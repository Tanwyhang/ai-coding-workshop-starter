---
name: workshop-onboarding
description: Run this the first time a participant opens this repo in Claude Code, or whenever they run /workshop-onboarding, to check and set up everything needed for the "Prompt → Next.js → GitHub → Vercel" workshop — tool versions, GitHub/Vercel auth, the Vercel MCP server, and a working local build. Use proactively at the start of a fresh session in this repo if the participant hasn't confirmed they're already set up.
---

# Workshop onboarding

Goal: get a participant's laptop from "just cloned this repo" to "ready to prompt, push, and deploy" with as little manual fiddling as possible. Work through these steps in order. Don't skip ahead — later steps assume earlier ones passed.

Read `PROJECT-GROUND-TRUTH.md` before acting. Do not infer current login or MCP
state from `SESSION-TRANSCRIPT.md`; check it live. Do not resume an earlier
device-code flow unless the current status check shows it is still required.

## 1. Tools

Check each of these and report versions. If any is missing, tell the participant how to install it for their OS and wait — don't try to install compilers/runtimes yourself.

```bash
node --version
git --version
gh --version
vercel --version
```

- Node missing → point to https://nodejs.org (or `nvm install --lts` if they have nvm).
- Git missing → macOS: `xcode-select --install`; Linux: their package manager; Windows: https://git-scm.com.
- `gh` missing → https://cli.github.com
- `vercel` missing → install it yourself: `npm i -g vercel`.

## 2. Git identity

```bash
git config --global user.name
git config --global user.email
```

If either is empty, ask the participant for their name/email and set it with `git config --global user.name "..."` / `user.email "..."`.

## 3. GitHub auth

```bash
gh auth status
```

If not logged in, run `gh auth login` (HTTPS, and let it manage git credentials). This opens a device code/URL — surface it clearly to the participant and wait for them to confirm they've completed it in a browser before moving on. Re-run `gh auth status` to confirm.

## 4. Vercel auth

```bash
vercel whoami
```

If not logged in, run `vercel login` in an interactive terminal (use a terminal tool, not a plain backgrounded shell command, since it needs to show a device code / open a browser). Wait for the participant to confirm before re-checking `vercel whoami`.

Once logged in, remind them once: authorize Vercel's GitHub App for their account/repos at https://github.com/apps/vercel if they haven't already — needed for auto-deploy-on-push later.

## 5. Vercel MCP

Add the Vercel MCP server globally so it's available in every project, not just this one:

```bash
claude mcp add --transport http vercel https://mcp.vercel.com -s user
```

Tell the participant to run `/mcp` themselves and complete the OAuth popup, then confirm it shows "connected" before continuing. Remind them to keep human confirmation ON for Vercel tool calls — don't auto-approve deploys.

## 6. Local project check

From the repo root:

```bash
npm install
npm run verify   # lint + build
npm run dev
```

Confirm `npm run verify` passes clean and the dev server serves `http://localhost:3000` with a 200. Stop the dev server once confirmed (don't leave it running).

## 7. Point them at what's next

Once everything above passes, tell the participant:

- The app in `src/app/page.tsx` is the starting point — a simple two-panel food-ordering demo (menu on the left, kitchen/cooking status on the right).
- Want it hands-off? Run `/one-shot` with your idea. It builds, tests and fixes until the app works, and you can state your own preferences (look, language, must-haves).
- Run `/wish` before writing the coding prompt. It works backwards from the goal to one testable browser journey.
- [`WISHFUL-PROGRAMMING.md`](../../../WISHFUL-PROGRAMMING.md) is the participant worksheet for that method.
- [`ONE-SHOT-PROMPT.md`](../../../ONE-SHOT-PROMPT.md) is a worked example showing how the resulting journey becomes a precise prompt.
- Once the local journey works, run `/ship-web` to verify it, push to the team's GitHub repository, and connect Vercel Git.
- Their goal for the workshop: work backwards from the desired outcome, have Claude Code build the smallest complete journey, then publish through GitHub and Vercel.

## Don't

- Don't install GitHub CLI, Vercel CLI's runtime deps, Node, or Xcode command line tools' license-gated pieces without the participant present — these may need sudo/password or GUI interaction you can't complete for them.
- Don't skip the confirmation waits in steps 3–5 — the CLI logins are async browser flows and will hang or silently fail if you check status before the participant has actually completed them.
- Don't create GitHub repos or deploy anything from this skill — onboarding only sets up tooling. Building/shipping their own app is the workshop exercise itself.
