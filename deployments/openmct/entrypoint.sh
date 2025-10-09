#!/usr/bin/env bash

pkill -f node

npm start

tail -f /dev/null
