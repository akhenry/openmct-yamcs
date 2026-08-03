#!/bin/sh
# Opt-in setup for an ISOLATED, security-ENABLED YAMCS instance used only by
# the proxy-authenticated security-roles e2e spec
# (tests/e2e/yamcs-security/securityRoles.e2e.spec.mjs).
#
# This is deliberately NOT named tests/patch-quickstart-*.sh so the Makefile's
# `patch-quickstart` glob (`for f in tests/patch-quickstart-*.sh`) never picks
# it up: securing YAMCS globally would deactivate the anonymous guest user and
# 401 every other (unauthenticated) spec in the default suite. Everything here
# is confined to a separate `quickstart-secure/` checkout on separate ports and
# a separate docker compose project so the default `quickstart/` instance and
# the default `test:e2e:quickstart` path are completely untouched.
#
# What it produces (all idempotent, safe to re-run):
#   - a fresh `quickstart-secure/` clone of yamcs/quickstart
#   - overridable, non-default published ports (YAMCS_HTTP_PORT default 8160,
#     YAMCS_TM_PORT default 10085) and no fixed container_name, so a distinct
#     COMPOSE_PROJECT_NAME (e.g. yamcs-unit-security) can isolate it
#   - the openmct-test overlay MDB (so the OpenMCT:role=Flight operator-status
#     parameters the adapter's role gate keys off of exist)
#   - security.yaml (enabled) + users.yaml (a real named user `flight` carrying
#     role `Flight`) + roles.yaml (the privileges the app needs to fully load)
#
# Auth is injected at the DEV PROXY (see .webpack/webpack.secure.mjs), not in
# the adapter -- the browser/adapter stay credential-less and unmodified, YAMCS
# just sees an authenticated, role-bearing user. This mirrors the maintainer's
# own recommendation on issue #385 (do auth at the proxy, not in the plugin).

set -e

SECURE_DIR="quickstart-secure"
COMPOSE_FILE="$SECURE_DIR/docker/docker-compose.yml"
SIMULATOR_MAKEFILE="$SECURE_DIR/docker/Makefile"
INSTANCE_CONFIG="$SECURE_DIR/src/main/yamcs/etc/yamcs.myproject.yaml"
ETC_DIR="$SECURE_DIR/src/main/yamcs/etc"
MDB_DIR="$SECURE_DIR/src/main/yamcs/mdb"
OVERLAY_SRC="tests/e2e/test-data/mdb/openmct-test.xml"
OVERLAY_DEST="$MDB_DIR/openmct-test.xml"

# The real named user the proxy authenticates as. The password is intentionally
# a throwaway local-only credential; it is stored plaintext in users.yaml (no
# hasher configured) and base64'd into the proxy Basic-auth header. Keep these
# in sync with .webpack/webpack.secure.mjs's defaults.
SECURE_YAMCS_USER="${SECURE_YAMCS_USER:-flight}"
SECURE_YAMCS_PASSWORD="${SECURE_YAMCS_PASSWORD:-flightpassword}"

# A second real named user for the DENIAL (negative) path: an authenticated but
# UNPRIVILEGED read-only user carrying role Observer, NOT Flight and with NO
# WriteParameter privilege. The denial spec
# (tests/e2e/yamcs-security/securityRolesDenied.e2e.spec.mjs) authenticates as
# this user (via SECURE_YAMCS_USER=observer on a second proxy) and asserts the
# adapter's role/write gates DENY it -- proving the gates are conditional, not
# unconditionally true. Keep in sync with .webpack/webpack.secure.mjs defaults.
SECURE_YAMCS_OBSERVER_USER="${SECURE_YAMCS_OBSERVER_USER:-observer}"
SECURE_YAMCS_OBSERVER_PASSWORD="${SECURE_YAMCS_OBSERVER_PASSWORD:-observerpassword}"

echo "Setting up isolated secured YAMCS in $SECURE_DIR ..."

if [ ! -d "$SECURE_DIR" ]; then
    git clone --depth 1 https://github.com/yamcs/quickstart "$SECURE_DIR"
else
    echo "Directory '$SECURE_DIR' already exists; reusing it."
fi

# --- Ports / container isolation (same technique as patch-quickstart-ports.sh,
# but defaulting to non-default ports so it can never collide with the default
# quickstart instance on 8090/10015). ------------------------------------------
if [ -f "$COMPOSE_FILE" ]; then
    sed -i.bak '/container_name: yamcs/d' "$COMPOSE_FILE"
    sed -i.bak 's/"8090:8090"/"${YAMCS_HTTP_PORT:-8160}:8090"/' "$COMPOSE_FILE"
    sed -i.bak 's#"10015:10015/udp"#"${YAMCS_TM_PORT:-10085}:10015/udp"#' "$COMPOSE_FILE"
    rm -f "$COMPOSE_FILE.bak"
fi

if [ -f "$SIMULATOR_MAKEFILE" ]; then
    sed -i.bak \
        -e 's#\./simulator\.py$#./simulator.py --tm_port=$${YAMCS_TM_PORT:-10085}#' \
        -e 's#\./simulator\.py --rate=10$#./simulator.py --rate=10 --tm_port=$${YAMCS_TM_PORT:-10085}#' \
        "$SIMULATOR_MAKEFILE"
    rm -f "$SIMULATOR_MAKEFILE.bak"
fi

# --- Overlay MDB (provides the OpenMCT:role Flight/Science operator-status
# parameters, poll question, mission status; same overlay the default suite
# uses via patch-quickstart-mdb.sh). -------------------------------------------
if [ -f "$OVERLAY_SRC" ] && [ -d "$MDB_DIR" ]; then
    cp "$OVERLAY_SRC" "$OVERLAY_DEST"
fi

if [ -f "$INSTANCE_CONFIG" ] && ! grep -q "mdb/openmct-test.xml" "$INSTANCE_CONFIG"; then
    awk '
        { print }
        /file: mdb\/xtce\.xml/ {
            print "  - type: xtce"
            print "    args:"
            print "      file: mdb/openmct-test.xml"
        }
    ' "$INSTANCE_CONFIG" > "$INSTANCE_CONFIG.tmp"
    mv "$INSTANCE_CONFIG.tmp" "$INSTANCE_CONFIG"
fi

# --- Security config -----------------------------------------------------------
# security.yaml: enabling security deactivates the anonymous guest user, so
# every request must now be authenticated (which is exactly why this instance is
# isolated from the default suite). The YamlAuthModule validates the named user
# below on every request; with no `hasher` configured it compares the password
# plaintext, which is fine for a throwaway local credential.
cat > "$ETC_DIR/security.yaml" <<EOF
enabled: true

authModules:
  - class: org.yamcs.security.YamlAuthModule
    args:
      required: true
EOF

# users.yaml: two real, named users.
#   - `flight` carries role Flight. `Flight` is the role the overlay MDB
#     registers as an operator-status role (OpenMCT:role alias), which is what
#     the adapter's getStatusRoleForCurrentUser matches on. This is the POSITIVE
#     (privileged) path.
#   - `observer` carries only role Observer (read-only, NOT Flight, NO
#     WriteParameter). This is the DENIAL (negative) path: an authenticated but
#     unauthorized user the adapter's gates must reject.
cat > "$ETC_DIR/users.yaml" <<EOF
$SECURE_YAMCS_USER:
  displayName: Flight Controller
  password: $SECURE_YAMCS_PASSWORD
  roles: [ Flight ]

$SECURE_YAMCS_OBSERVER_USER:
  displayName: Read-Only Observer
  password: $SECURE_YAMCS_OBSERVER_PASSWORD
  roles: [ Observer ]
EOF

# roles.yaml: broad READ object privileges (so the whole tree/telemetry loads)
# + the system privileges the app needs, + scoped WriteParameter privileges that
# unlock the adapter's canSetPollQuestion / canSetMissionStatus gates.
#
# WriteParameter is deliberately scoped to the overlay's OpenMCTTest space
# system rather than global `.*` -- this is both the realistic way an operator
# who edits poll/mission/operator status would be authorized, AND it satisfies
# BOTH adapter gates, which match the returned privilege patterns DIFFERENTLY:
#   - canSetMissionStatus (mission-status-telemetry.js#isMissionStatusParameterName)
#     treats each WriteParameter object as a REGEX, so `/OpenMCTTest/.*` matches
#     the mission-status parameters.
#   - canSetPollQuestion (poll-question-parameter.js#isPollQuestionParameterName)
#     does an EXACT string compare against the poll-question parameter's
#     qualifiedName, so the specific `/OpenMCTTest/PollQuestion` entry is what
#     unlocks it (a broad `.*` alone would NOT -- an asymmetry this real-privilege
#     integration test surfaces that the faked-user spec, which already used the
#     specific name, does not exercise).
cat > "$ETC_DIR/roles.yaml" <<EOF
Flight:
  ReadParameter: [".*"]
  WriteParameter:
    - "/OpenMCTTest/.*"
    - "/OpenMCTTest/PollQuestion"
  ReadPacket: [".*"]
  Command: [".*"]
  CommandHistory: [".*"]
  ReadAlarms: [".*"]
  ReadCommand: [".*"]
  System:
    - GetMissionDatabase
    - ControlProcessor
    - ControlAlarms
    - ReadEvents
    - ReadCommandHistory

# Observer: the read-only role for the DENIAL path. It grants ONLY the object
# READ privileges the app needs to fully load (object tree + telemetry) plus
# GetMissionDatabase, and deliberately withholds:
#   - the Flight role entirely (so hasRole('Flight') is false and
#     getStatusRoleForCurrentUser finds no intersecting status role), and
#   - WriteParameter entirely (so getWriteParameters() is empty, and both
#     canSetMissionStatus and canSetPollQuestion evaluate false).
# This is the minimum that lets the app load read-only; granting either of the
# above would defeat the negative test.
Observer:
  ReadParameter: [".*"]
  ReadPacket: [".*"]
  ReadAlarms: [".*"]
  System:
    - GetMissionDatabase
    - ReadEvents
EOF

echo "Secured YAMCS config written:"
echo "  user:  $SECURE_YAMCS_USER (role Flight)"
echo "  user:  $SECURE_YAMCS_OBSERVER_USER (role Observer, read-only)"
echo "  ports: HTTP \${YAMCS_HTTP_PORT:-8160}, TM \${YAMCS_TM_PORT:-10085}"
echo "Done."
