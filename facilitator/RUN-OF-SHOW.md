# Run-of-Show — Prompt → Next.js → GitHub → Vercel

~10 min live demo. Read this on stage. Everything below has been dry-run and confirmed working.

## Before attendees arrive

- [ ] Terminal open in this folder (`~/Documents/ai-coding-workshop-starter`)
- [ ] Tabs open: `localhost:3000` (once dev server is running), your GitHub repo, your Vercel dashboard
- [ ] Confirm still logged in: `gh auth status` / `vercel whoami`
- [ ] Backup: live URL already works right now → **https://ai-coding-workshop-starter.vercel.app**

## The script

**1. Prompt** — say this out loud, then type it into Claude Code:

> "Add a 'Today's Special' menu card to the homepage — dish name, price, short description, and an 'Add to Order' button that shows a running order count when clicked."

Say to the room: *"I'm not writing code — I'm describing the outcome."*

**2. Generate & edit** — Claude Code proposes the change. Point at the diff before accepting.

Say: *"Nothing gets written until I approve it — I'm always the one in control."*

Run `npm run dev`, open `localhost:3000`, click "Add to Order" once live so the room sees it work locally first.

**3. Push to GitHub**

```bash
git add -A
git commit -m "Add Today's Special order card to homepage"
git push origin main
```

Switch to the GitHub tab, refresh, show the commit just landed.

**4. Auto-deploy via Vercel** — switch to the Vercel dashboard tab.

Say: *"I didn't run a deploy command. The push itself triggered this."*

Wait ~15–20s for the build to go from Building → Ready, then open the live URL and click "Add to Order" on the real deployed site.

## Fallback if anything breaks live

- Local dev server won't start → skip straight to the already-live URL above and narrate the diff instead of running it.
- Push/deploy hangs → talk through the GitHub commit and Vercel dashboard screenshots from this dry run while it catches up in the background.
- Wi-Fi dies → this exact flow was already run successfully once today; say so and move to Q&A, point them to the repo to try it themselves later.

## Reference links

- Repo: https://github.com/Tanwyhang/ai-coding-workshop-starter
- Live app: https://ai-coding-workshop-starter.vercel.app
- Slides: `workshop-slides.pptx` (this folder)
