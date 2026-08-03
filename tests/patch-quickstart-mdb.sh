#!/bin/sh
# Patches the locally cloned yamcs/quickstart checkout so it also loads an
# overlay MDB (tests/e2e/test-data/mdb/openmct-test.xml) alongside the stock
# QuickStart MDB. This overlay defines a SpaceSystem of `dataSource="local"`
# parameters that exercise openmct-yamcs features which the stock QuickStart
# MDB has no parameters for: mission status, operator status, poll question,
# imagery, `OpenMCT:omit`, and a plain `OpenMCT:type` override.
#
# Being `dataSource="local"`, these parameters require no changes to the
# TM/TC simulator pipeline: they're set directly through the YAMCS REST API.
#
# Safe to run twice: both the file copy and the yamcs.myproject.yaml edit
# are idempotent.

set -e

OVERLAY_SRC="tests/e2e/test-data/mdb/openmct-test.xml"
OVERLAY_DEST="quickstart/src/main/yamcs/mdb/openmct-test.xml"
INSTANCE_CONFIG="quickstart/src/main/yamcs/etc/yamcs.myproject.yaml"

if [ -f "$OVERLAY_SRC" ] && [ -d "quickstart/src/main/yamcs/mdb" ]; then
    cp "$OVERLAY_SRC" "$OVERLAY_DEST"
fi

if [ -f "$INSTANCE_CONFIG" ] && ! grep -q "mdb/openmct-test.xml" "$INSTANCE_CONFIG"; then
    # Append a second `mdb:` loader entry right after the stock xtce.xml one,
    # matching the existing list's indentation (2-space list item, 4-space args).
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
