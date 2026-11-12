# Run-of-Show — Prompt → Next.js → GitHub → Vercel

~10 min live demo. Read this on stage. Everything below has been dry-run and confirmed working.

This file covers only the short pipeline demonstration. For the complete
60-minute participant workshop, use [`FULL-REHEARSAL.md`](FULL-REHEARSAL.md).

## Before attendees arrive

- [ ] Terminal open in this folder (`~/Documents/ai-coding-workshop-starter`)
- [ ] Tabs open: `localhost:3000` (once dev server is running), your GitHub repo, your Vercel dashboard
- [ ] Confirm still logged in: `gh auth status` / `vercel whoami`
- [ ] Backup: live URL already works right now → **https://ai-coding-workshop-starter.vercel.app**

## The script

**1. Wishful programming** — establish the outcome before showing the prompt.

Say to the room:

> "Before we ask Claude to build anything, we start with the goal. We want customers to add today's special without staff missing the order. What evidence would prove we reached that goal?"

Take one answer, then work backwards aloud:

- Evidence: the order count visibly increases.
- Immediately before: the customer clicks "Add to Order."
- Immediately before: the customer can see today's special.

Say:

> "That is wishful programming. Define the goal, decide what evidence proves it, then keep asking what must already be true. Stop when you reach something the team can build or test now. That chain becomes the scope of the prompt."

**2. Prompt** — type the resulting journey into Claude Code:

> "Add a 'Today's Special' menu card to the homepage — dish name, price, short description, and an 'Add to Order' button that shows a running order count when clicked."

Say to the room: *"I'm not writing code — I'm describing the outcome."*

**3. Generate & edit** — Claude Code proposes the change. Point at the diff before accepting.

Say: *"Nothing gets written until I approve it — I'm always the one in control."*

Run `npm run dev`, open `localhost:3000`, click "Add to Order" once live so the room sees it work locally first.

**4. Push to GitHub**

```bash
git add -A
git commit -m "Add Today's Special order card to homepage"
git push origin main
```

Switch to the GitHub tab, refresh, show the commit just landed.

**5. Auto-deploy via Vercel** — switch to the Vercel dashboard tab.

Say: *"I didn't run a deploy command. The push itself triggered this."*

Wait ~15–20s for the build to go from Building → Ready, then open the live URL and click "Add to Order" on the real deployed site.

## Fallback if anything breaks live

- Local dev server won't start → skip straight to the already-live URL above and narrate the diff instead of running it.
- Push/deploy hangs → talk through the GitHub commit and Vercel dashboard screenshots from this dry run while it catches up in the background.
- Wi-Fi dies → this exact flow was already run successfully once today; say so and move to Q&A, point them to the repo to try it themselves later.

## Reference links

- Repo: https://github.com/Tanwyhang/ai-coding-workshop-starter
- Live app: https://ai-coding-workshop-starter.vercel.app
- Slides: `workshop-slides.pdf` at the repository root
