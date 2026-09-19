# AI Coding Workshop — Prompt → Next.js → GitHub → Vercel

A starter project for the workshop: describe what you want in plain English, have an AI coding assistant build it, push to GitHub, and watch it deploy live on Vercel automatically.

## Quickstart

1. Clone this repo and open it in Claude Code (or your AI coding assistant of choice).
2. If this is your first time here, say so — the **workshop-onboarding** skill in [`.claude/skills/workshop-onboarding/`](.claude/skills/workshop-onboarding/SKILL.md) will check your tooling (Node, Git, GitHub CLI, Vercel CLI), get you logged into GitHub and Vercel, and wire up the Vercel MCP server. In Claude Code you can also just run `/workshop-onboarding`.
3. Once onboarding passes:
   ```bash
   npm install
   npm run dev
   ```
   Open http://localhost:3000 — you should see a menu on the left and a kitchen panel on the right.

## What's in this repo

| Path | What it is |
|---|---|
| [`src/app/page.tsx`](src/app/page.tsx) | The demo app — a menu you can order from, with a live cooking-progress panel. |
| [`ONE-SHOT-PROMPT.md`](ONE-SHOT-PROMPT.md) | The exact prompt that generates this app in a single shot, plus the image prompts for its artwork. Read this before writing your own prompts — it's a model for how specific a good prompt needs to be. |
| [`.claude/skills/workshop-onboarding/`](.claude/skills/workshop-onboarding/SKILL.md) | The onboarding skill described above. |
| [`facilitator/`](facilitator/RUN-OF-SHOW.md) | Facilitator-only material (run-of-show script). Not needed to follow along. |

## The loop you're here to practice

1. **Prompt** — describe the feature you want, in plain English.
2. **Generate & edit** — your AI assistant proposes the change; you review the diff and approve.
3. **Push** — commit and push to GitHub.
4. **Deploy** — Vercel picks up the push automatically and your change goes live at a real URL, no manual deploy step needed.

Try it: pick something small (a new menu item, a different color scheme, an extra step in the cooking flow) and run the loop yourself.

## Scripts

- `npm run dev` — local dev server
- `npm run build` / `npm run start` — production build and serve
- `npm run lint` — eslint only
- `npm run verify` — lint + build, the same check used in preflight

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS, deployed on Vercel.
