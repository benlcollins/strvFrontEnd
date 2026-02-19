#!/bin/bash

# Project Ops Sync Script
# This script handles the sequence of git commit/push and clasp push.
# It expects the commit message as the first argument.

COMMIT_MSG=$1

if [ -z "$COMMIT_MSG" ]; then
  echo "Error: No commit message provided."
  exit 1
fi

echo "--- Starting Sync Process ---"

# 1. Git Sync
echo "Step 1: Pushing to GitHub..."
git add .
if git commit -m "$COMMIT_MSG"; then
    git push origin $(git branch --show-current)
else
    echo "No changes to commit to Git, skipping push."
fi

# 2. GAS Sync
echo "Step 2: Pushing to Google Apps Script..."
if clasp push; then
    echo "--- Sync Complete! ---"
else
    echo "Error: clasp push failed."
    exit 1
fi
