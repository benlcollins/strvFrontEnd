---
description: Deploy the local changes to both GitHub and Google Apps Script using the Project Ops skill.
---

# Deploy Workflow

This workflow leverages the **Project Ops** skill to sync your project safely.

## Prerequisites
- `clasp` must be installed and authenticated.
- You should be in the root directory of the project.
- You must have a commit message ready.

## Steps

// turbo
1. Execute the Project Ops sync
   ```bash
   # This will trigger the skill logic, including the commit and push sequence.
   bash .agents/skills/project-ops/scripts/sync.sh "$COMMIT_MESSAGE"
   ```

## Verification
- GitHub should show the new commit.
- Google Apps Script should show the updated files.
