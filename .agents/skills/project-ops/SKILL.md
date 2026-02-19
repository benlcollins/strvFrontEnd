---
name: Project Ops
description: Comprehensive workflow for syncing changes to both GitHub and Google Apps Script with verification.
---

# Project Ops Skill

This skill ensures that code changes are safely verified, committed to Git, pushed to GitHub, and deployed to Google Apps Script.

## Verification Phase
Before any sync, the following checks should be performed:
1. **No Debugs**: Ensure no `console.log` or debug statements are left in critical paths (unless intentional).
2. **Standard Format**: Ensure files are properly formatted.
3. **Clasp Status**: Verify `clasp` is logged in and the project is linked.

## Sync Procedure
1. **GitHub Sync**:
   - Check current branch.
   - Stage all changes.
   - **CRITICAL**: Use `notify_user` to ask the user for a descriptive commit message.
   - Commit and push to origin.
2. **GAS Sync**:
   - Run `clasp push`.
   - Verify success output.

## Error Handling
- If `git push` fails (e.g., behind remote), inform the user and suggest a pull/rebase.
- If `clasp push` fails, check for authorization or syntax issues in `.gs` files.
