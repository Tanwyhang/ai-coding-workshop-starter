# Participant starter pack

This page is the front door for the workshop. Complete the setup section before the event, then return here when the workshop begins.

## What comes with the repository

- A working Next.js web starter
- The `/workshop-onboarding`, `/wish`, `/one-shot`, and `/ship-web` skills
- A complete F&B prompt example
- Local verification with `npm run verify`

The skills are stored in `.claude/skills/`. Claude loads them when you open the cloned project folder. Do not install them separately.

## Before you begin

Install these first:

- [Claude Desktop](https://claude.com/download) with Claude Code available
- [Node.js LTS](https://nodejs.org)
- [Git](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com)

Create or confirm your GitHub and Vercel accounts. The onboarding skill will check versions, finish authentication, install Vercel CLI if needed, and connect Vercel MCP.

## Before the workshop

### 1. Get your team repository

Open the team repository link provided by the facilitator. Confirm that your team can view it and that you have permission to push.

Do not use the facilitator's source repository as your submission repository.

### 2. Clone it

Replace the placeholder with the repository shown in your browser:

```bash
gh repo clone <team-owner>/<team-repository>
cd <team-repository>
```

### 3. Open the cloned folder

Open the cloned project folder in Claude Desktop. Type `/` and confirm these project skills appear:

```text
/workshop-onboarding
/wish
/one-shot
/ship-web
```

If they do not appear, confirm that Claude opened the cloned folder rather than its parent folder.

### 4. Run onboarding

```text
/workshop-onboarding
```

Follow the prompts for GitHub and Vercel sign-in. Onboarding also connects Vercel MCP, installs project packages, and runs the local verification.

You are ready when Claude confirms:

- GitHub CLI is authenticated
- Vercel CLI is authenticated
- Vercel MCP is connected
- `npm run verify` passes
- The local app opens in a browser

Finish installation, repository access, and onboarding at least 48 hours before the workshop.

## During the workshop

### 1. Work backwards from the goal

```text
/wish
```

Answer one question at a time. Review `PROJECT-GOAL.md` and approve the smallest browser journey.

### 2. Ask Claude to build the approved journey

For the hands-off route, run:

```text
/one-shot Build the approved journey in PROJECT-GOAL.md. [Add your visual or
language preferences.]
```

Claude builds, verifies, browser-tests, and leaves the local app running. It
does not publish or deploy.

For the guided route, use:

```text
Build the approved journey in PROJECT-GOAL.md. Keep this as a responsive Next.js web app. Use local sample data. Show me the plan before changing files.
```

Review the plan and approve it. Test the result in the browser.

### 3. Publish through GitHub and Vercel

```text
/ship-web
```

Review each approval request. The skill verifies the project, commits and pushes to the team's GitHub repository, connects Vercel Git, and checks the resulting deployment.

## Completion checklist

- The agreed journey works locally
- `npm run verify` passes
- The code is in the team's GitHub repository
- Vercel is connected to that repository
- The public URL works in a browser
- A later GitHub push creates another Vercel deployment

## Workshop rules

- Build a responsive Next.js website only
- Do not use native iOS, Android, React Native, Expo, Flutter, or app-store tooling
- Keep secrets in `.env.local`, never in Git
- Use Supabase only after the first local-to-deployment journey works
- GitHub remains the deployment source; do not use direct file deployment for the submission

## Reference links

- [GitHub CLI quickstart](https://docs.github.com/en/github-cli/github-cli/quickstart)
- [Vercel MCP setup](https://vercel.com/docs/agent-resources/vercel-mcp)
- [Vercel Git connection](https://vercel.com/docs/cli/git)
- [Wishful Programming worksheet](WISHFUL-PROGRAMMING.md)
- [Complete prompt example](ONE-SHOT-PROMPT.md)
