# AI execution rules — theater

These rules are mandatory for every AI agent, browser agent, automation and manual repair session that changes this repository.

## MANUAL TASK COMPLETION GATE

A manual user request is **not complete** when code is drafted, a commit exists, a build starts, or a report can be written. Completion requires a verified user-visible result.

Required loop:

1. Inspect the current production state.
2. Implement the requested change.
3. Commit and push it to the production source branch.
4. Wait for / inspect the Cloudflare deployment result.
5. Verify the exact public production URL over HTTP and verify the requested behavior in the live page.
6. If verification fails, treat the failure as part of the same task: diagnose, repair, redeploy and re-verify.
7. Repeat until the delivery gate passes.

### The agent MUST NOT stop for

- a discovered bug;
- a failed build or deploy;
- a missing file that the agent can create;
- a test failure that the agent can repair;
- an intermediate commit/push;
- an analysis/report/status update;
- a temporary tool error when another available path exists.

### The agent MAY stop early only for a genuine owner-only blocker

Examples: OAuth/login confirmation, CAPTCHA, payment/plan approval, secret value that only the owner possesses, or a UI permission toggle that cannot be changed through available tools.

When such a blocker exists, ask for **one concrete manual action only**. After the owner performs it, resume the same task through live verification.

## DELIVERY EVIDENCE

A final response is allowed only when at least one of these is true:

- **PASS:** the requested behavior is verified on the exact production URL;
- **OWNER_BLOCKED:** exactly one unavoidable owner action is required.

For PASS, include concise evidence: production URL, what was verified, and any requested before → after metrics. Never present an unverified URL as working.

## CLOUDFLARE PRODUCTION RULE

Production host for this repository is Cloudflare. Netlify is not a production target for this project. Do not deploy this repository to Netlify.

Current public production origin: `https://theater.mmmpaykin.workers.dev/`.

## USER-VISIBLE CHANGE RULE

SEO/CRO/site improvements count as delivered only after the production page contains the change. A local file, branch, commit, PR, build artifact or deployment log alone is not evidence that the user can see it.

## NO INTERMEDIATE CHAT REPORTS

During an active manual task, do not send "working", "prepared", "found the issue", percentage-only, or other progress messages unless the user explicitly asks for progress. Continue using available tools until PASS or OWNER_BLOCKED.
