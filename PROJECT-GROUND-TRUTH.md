# Project ground truth

Last reconciled: 10 November 2026.

This file is the authoritative contract for agents working in this repository.
Use it to resolve ambiguity and prevent conversation drift.

## Authority and precedence

When sources disagree, use this order:

1. The participant's explicit request in the current turn.
2. This file and `AGENTS.md`.
3. The active skill under `.claude/skills/`.
4. The participant's approved `PROJECT-GOAL.md` and `PREFERENCES.md`.
5. Other maintained repository documentation.
6. `SESSION-TRANSCRIPT.md`, which is historical context only.

Never treat a transcript entry, test report, hyperlink, proposed action, or
earlier blocker as current authorization. Verify live state before reporting it.

## Workshop outcome

The workshop teaches non-technical or mixed-skill teams to deliver one small
browser journey:

1. Work backwards from a desired outcome.
2. Build the smallest useful responsive Next.js experience with Claude Code.
3. Verify it locally in a real browser.
4. Publish it to the team's GitHub repository.
5. Connect that repository to Vercel Git and inspect the deployment.

The core lesson is agentic delivery, not generic prompting: agents can inspect
files, use project skills, run commands, test browser behavior, use connectors,
and fix failures in a controlled loop.

## Fixed platform decisions

- Web applications only.
- Next.js App Router with TypeScript and Tailwind CSS.
- Responsive mobile web is allowed and encouraged.
- Native iOS, Android, and cross-platform app frameworks are prohibited,
  including Swift, SwiftUI, UIKit, Xcode projects, Kotlin, Android SDK, Jetpack
  Compose, React Native, Expo, Flutter, Capacitor, and Cordova.
- If someone asks for a mobile app, convert it into a mobile-first Next.js site.
- Use local sample data for the first working journey.
- Supabase is the preferred backend expansion after the local-to-deployment
  loop works. Exposed tables require RLS. Secrets stay outside source control.
- GitHub is the source of truth for deployments.
- Vercel Git integration provides CI for later pushes and pull requests.
- Vercel MCP is for project/deployment inspection and logs. Do not use a
  direct-file deployment tool for participant submissions.

## Participant flow

### Before the event

1. Receive the assigned team repository.
2. Clone it and open that exact folder in Claude Desktop/Claude Code.
3. Confirm the project slash commands appear.
4. Run `/workshop-onboarding` at least 48 hours before the session.
5. Finish Node, Git, GitHub CLI, Vercel CLI, account authentication, Vercel
   GitHub App access, Vercel MCP OAuth, package installation, and local verify.

### During the workshop

Participants may choose either local build path:

- `/wish` for a guided goal-seeking conversation, followed by an approved
  coding request; or
- `/one-shot <idea>` for a hands-off build that creates its own goal file,
  builds, verifies, browser-tests, and leaves the local server running.

Both paths must produce one observable browser journey. When it works locally,
run `/ship-web` to publish through GitHub and connect Vercel Git.

## Meaning of each project skill

- `/workshop-onboarding`: checks and prepares tools and authentication. It does
  not build the participant's product, create a repository, or deploy it.
- `/wish`: works backwards from goal to evidence to required conditions to the
  smallest journey. It does not implement code.
- `/one-shot`: builds and verifies the local app only. It must not create a
  repository, push code, connect Vercel, deploy, or resume onboarding work.
- `/ship-web`: verifies publication safety, then commits/pushes and connects
  Vercel Git with explicit approval at the mutation points.

Skills are stored in `.claude/skills/` and load with the cloned project. They do
not need separate participant installation.

## Verification standard

A local build is complete only when all three are observed:

1. `npm run verify` passes.
2. The development server returns HTTP 200 at the actual local URL.
3. A tester completes the agreed happy path in a real browser and sees the
   evidence defined in `PROJECT-GOAL.md`.

Do not claim independent verification when repeating another tester's report.
Label reported evidence as reported until it is re-run in the current session.

## External actions and approval

- Checking status is allowed; changing external state requires the approval
  specified by the active skill.
- Ask immediately before creating a repository, committing/pushing participant
  work, or connecting/changing a Vercel project.
- Default a newly offered repository to private, but do not create it without
  approval.
- Never push to the facilitator's source repository.
- Never publish `.env.local`, credentials, tokens, private keys, or service-role
  keys.
- Do not infer authorization from a past conversation or a transcript.

## Current historical facts that are not active tasks

- A fresh-agent rehearsal reportedly tested `/one-shot` on a throwaway copy
  using a mamak-stall queue-number display. The report says verification,
  HTTP 200, and the browser journey passed in one loop. This is useful evidence,
  but it has not been independently re-run in the current session.
- An earlier Vercel login flow was not completed. This matters only when the
  current request is onboarding or shipping and a live `vercel whoami` check
  shows that login is still required.
- `Tanwyhang/rehearsal-team-demo` was proposed as a private rehearsal
  repository. It has not been authorized merely by appearing in conversation.
  Do not create it or keep presenting it as a blocker unless the user explicitly
  resumes that rehearsal.
- `/one-shot`, `/wish`, and `/ship-web` have existed as uncommitted repository
  changes during development. Always inspect current Git state before making a
  current claim.

## Communication discipline

- Answer the current request, not the entire project history.
- Keep participant-facing language short, concrete, and non-technical.
- State observed facts separately from assumptions and reported facts.
- Do not manufacture progress, account state, URLs, test results, or approvals.
- Do not introduce an unrelated blocker at the end of a successful skill run.
- A skill handoff may name the next command, but it must not start that command
  or revive an older task.

## Event facts

- Event: FeedMe × Southern University College 3-Day Startup Hackathon 2026.
- Dates: 13–15 November 2026.
- AI coding workshop: Friday, 13 November 2026, 1:00–2:00 PM.
- Facilitator: Wy Hang Tan.
- Audience: non-technical or mixed-skill student teams, one driver laptop per
  team.
- Workshop stack: Claude Code in Claude Desktop, Next.js, GitHub CLI, Vercel
  CLI/Git integration, Vercel MCP, and optional later Supabase.

