---
active: true
iteration: 1
max_iterations: 30
completion_promise: "ALL SEO TASKS COMPLETE"
started_at: "2026-02-10T20:20:46Z"
---

You are fixing SEO issues on the novamir.com website.

## Your Task
Read .ralph/seo-fix-plan.md to see the checklist of SEO fixes.
Work through tasks IN ORDER (T1, T2, T3...).

## Per Task Workflow
1. Read the fix plan to find the next unchecked task
2. Read the relevant source files
3. Make the fix
4. Mark the task as [x] in .ralph/seo-fix-plan.md
5. Git add and commit the change with a descriptive message
6. Move to the next task

## Rules
- Fix ONE task per iteration, then let the loop continue
- Always update .ralph/seo-fix-plan.md after each fix
- Do NOT change visual design — only SEO/technical fixes
- Run npm run build after code changes to verify no errors
- For T17: run squirrel audit and record the new score

## Completion
When ALL tasks T1-T18 are marked [x] or [SKIP], output:
<promise>ALL SEO TASKS COMPLETE</promise>

If a task cannot be fixed (e.g., requires server config), mark it [SKIP] with a reason and move on.
