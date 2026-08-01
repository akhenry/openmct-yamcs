#!/bin/sh
# Patches the locally cloned yamcs/quickstart checkout so its Docker-published
# ports are overridable via env vars (YAMCS_HTTP_PORT, YAMCS_TM_PORT), and its
# fixed container_name is removed so COMPOSE_PROJECT_NAME can isolate parallel
# instances. This lets multiple worktree checkouts run `make test-all`
# concurrently against non-conflicting ports/containers/networks.
#
# Defaults (8090/10015) match the upstream quickstart and are used when the
# corresponding env var is unset, so this is a no-op for a single local run.
#
# Known gap: the TC (command) UDP port (10025) is not published by docker-compose
# and is not parameterized here — see tests/e2e/README or the coverage plan for
# details; command-related specs should not assume port isolation on that path.
set -e

COMPOSE_FILE="quickstart/docker/docker-compose.yml"
SIMULATOR_MAKEFILE="quickstart/docker/Makefile"

if [ -f "$COMPOSE_FILE" ]; then
    sed -i.bak '/container_name: yamcs/d' "$COMPOSE_FILE"
    sed -i.bak 's/"8090:8090"/"${YAMCS_HTTP_PORT:-8090}:8090"/' "$COMPOSE_FILE"
    sed -i.bak 's#"10015:10015/udp"#"${YAMCS_TM_PORT:-10015}:10015/udp"#' "$COMPOSE_FILE"
    rm -f "$COMPOSE_FILE.bak"
fi

if [ -f "$SIMULATOR_MAKEFILE" ]; then
    # $$ escapes Make's own variable expansion in a recipe line, leaving a
    # single $ for the shell to resolve the YAMCS_TM_PORT env var/default.
    sed -i.bak \
        -e 's#\./simulator\.py$#./simulator.py --tm_port=$${YAMCS_TM_PORT:-10015}#' \
        -e 's#\./simulator\.py --rate=10$#./simulator.py --rate=10 --tm_port=$${YAMCS_TM_PORT:-10015}#' \
        "$SIMULATOR_MAKEFILE"
    rm -f "$SIMULATOR_MAKEFILE.bak"
fi
