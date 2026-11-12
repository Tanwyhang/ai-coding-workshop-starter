---
name: ship-web
description: Publish a verified workshop Next.js project through the team's GitHub repository and connect that repository to Vercel Git. Use when a participant runs /ship-web after the local browser journey works. Require approval before commits, pushes, repository changes, or Vercel connection changes.
---

# Ship the web project

Publish through GitHub and Vercel Git. Do not upload project files directly to Vercel.

Read `PROJECT-GROUND-TRUTH.md` before acting. Treat transcript entries as
history, not proof of login state, repository state, or authorization. Verify
all current external state with `gh`, `git`, `vercel`, and Vercel MCP.

Work in stages. Explain the result of each stage in plain language and stop for participant approval where specified.

## 1. Verify the project

Run:

```bash
npm run verify
npm run build
```

Confirm that the project remains a responsive Next.js web app and contains no native mobile framework or packaging dependency.

Check that `.gitignore` excludes:

```text
node_modules
.next
.env
.env.*
!.env.example
.vercel
```

Inspect the files Git would publish. Stop if a tracked or staged file contains an environment file, token, private key, service-role key, or credential.

## 2. Confirm the GitHub destination

Run:

```bash
gh auth status
git status
git remote -v
```

The destination must be the participant's assigned team repository. If `origin` points to the facilitator's source repository, do not push. Explain the problem and ask for the team repository URL.

Do not default to a repository name mentioned in the transcript. A rehearsal
repository proposed in an older session is not the participant's assigned team
repository and is not authorized merely because it was discussed.

If no team repository exists, offer to create a private repository with `gh repo create`, but request approval immediately before creating it. Default to private.

Show the participant:

- changed files
- the intended commit message
- the exact GitHub destination

Request approval before committing or pushing.

After approval, create the commit and push to `main`. Verify the remote and clean status afterward.

## 3. Connect Vercel Git

Run `vercel whoami` and confirm the intended Vercel account or team.

Use:

```bash
vercel link
vercel git connect
```

Request approval before linking or changing the Vercel project connection. The GitHub repository must remain the deployment source.

Do not use a direct upload or an MCP file-deployment tool for the participant's submission.

## 4. Check the deployment

Use Vercel MCP to find the linked project and latest deployment. Report its status and URL.

If the deployment failed, retrieve only the relevant build error. Make the smallest fix, run local verification again, then request approval before committing and pushing the repair.

Ask the tester to complete the agreed journey on the public URL.

## 5. Confirm continuous deployment

Explain that later pushes to the connected GitHub repository create new Vercel deployments. Do not create a test commit unless the participant asks for one.

## Boundaries

- Keep human confirmation enabled for GitHub and Vercel mutations.
- Never publish secrets or `.env.local`.
- Never push to the facilitator's source repository.
- Never change repository visibility without explicit approval.
- Never replace the Next.js web architecture or add native mobile tooling.
