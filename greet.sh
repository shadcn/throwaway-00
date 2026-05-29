#!/usr/bin/env bash
# Prints a greeting for the given name.
set -euo pipefail

name="${1:-world}"
echo "Hello, ${name}!"
