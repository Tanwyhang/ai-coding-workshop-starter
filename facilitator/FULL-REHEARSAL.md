# Full facilitator rehearsal - AI Coding Workshop

- **Session:** FeedMe × SUC 3-Day Startup Hackathon 2026
- **Facilitator:** Wy Hang Tan
- **Time:** Friday, 13 November 2026, 1:00-2:00 PM
- **Audience:** Non-technical and mixed-skill student teams
- **Outcome:** Each team turns one goal into a working browser journey, verifies
  it locally, publishes it to its team GitHub repository, and connects it to
  Vercel Git deployment.

This is the complete spoken rehearsal. Lines inside block quotes are suggested
words to say. Text marked **Do** is an action on your screen. Text marked
**Teams** is what participants should do at that moment.

## The delivery principle

Do not teach coding syntax. Teach participants how to direct and supervise an
agent:

> Goal -> evidence -> smallest journey -> build -> verify -> publish -> inspect.

Every section should end with something visible: a goal file, a working local
journey, a GitHub commit, or a public URL.

## Before the room opens

Complete this before 12:45 PM. Do not consume workshop time installing tools or
creating accounts.

### Facilitator machine

- Open the slide deck in presentation mode.
- Open a disposable copy of the starter, not the source repository you maintain.
- Confirm the copy contains `.claude/skills/workshop-onboarding`, `wish`,
  `one-shot`, and `ship-web`.
- Confirm `gh auth status`, `vercel whoami`, and Vercel MCP access.
- Run `npm install` and `npm run verify`.
- Keep one terminal open at the disposable project root.
- Keep Claude Desktop open on that exact folder.
- Keep browser tabs ready for the local app, demo GitHub repository, Vercel
  project, and known-good fallback deployment.
- Use a dedicated demo repository and Vercel project. Never push the live demo
  from the facilitator source repository.
- Put `START-HERE.md` behind one short link and QR code.
- Put the known-good final application, screenshots, and a short deployment
  recording in the offline fallback folder.

### Room and mentor setup

- One driver laptop per team.
- Ask teams to sit with the driver in the middle, screen visible to teammates.
- One mentor supports about four teams.
- Give mentors the troubleshooting order from the end of this document.
- Use three room signals:
  - Hand raised: blocked.
  - Laptop tilted forward: ready for the next checkpoint.
  - Continue working normally: still building.

### Do not start unless these are true

- Each driver has cloned `Tanwyhang/ai-coding-workshop-starter` and is signed in to
  their own GitHub account (the team repo is created later by `/ship-web`).
- Team drivers completed `/workshop-onboarding` before the event.
- Claude Desktop, Node, Git, GitHub CLI, Vercel CLI, and Vercel MCP are ready.
- At least one fallback driver machine is available for a team with a broken
  setup.

If several teams did not complete preflight, pair them with a ready laptop. Do
not turn the workshop into an installation clinic.

---

# 60-minute live rehearsal

## 0:00-0:05 - Show the finish line first

**Slide cue:** Cover, followed by the local -> GitHub -> Vercel flow.

**Do:** Show the finished F&B web app briefly. Complete one visible action. Then
show its GitHub repository and public Vercel URL.

Say:

> "By two o'clock, your team should have this same delivery loop. Your product
> will be different, but the path is the same: decide what success looks like,
> let Claude build the smallest useful journey, test it in a browser, push it to
> GitHub, and let Vercel publish it."

> "This is not a prompting lecture. You are going to supervise an agent that can
> read the project, change files, run commands, open the browser, and inspect a
> deployment. Your job is to give it a clear destination and check the evidence."

Point to each stage and say:

> "Local proves the experience works. GitHub owns the code and its history.
> Vercel turns a GitHub push into a public deployment."

Set the platform boundary:

> "For this hackathon, build a web app with Next.js. A phone-first website is
> welcome. Native iOS, Android, React Native, Expo, and Flutter projects are not
> accepted. If your idea sounds like a mobile app, build the browser version."

**Checkpoint:** Participants can explain the pipeline as local -> GitHub ->
Vercel.

## 0:05-0:10 - Put every team in working position

**Slide cue:** Required setup, followed by the tool registry.

Say:

> "Choose one driver. The driver controls Claude and the browser. Choose one
> product owner who protects the goal, one tester who must click the final
> journey, and one demo lead. Everyone else watches for unclear assumptions and
> helps with content."

> "Open your cloned `ai-coding-workshop-starter` folder in Claude Desktop now. It
> must be the project folder itself, not the folder above it."

**Teams:** Open Claude Code, type `/`, and find:

```text
/workshop-onboarding
/wish
/one-shot
/ship-web
```

Say:

> "These are project skills. A skill is a saved playbook that tells the agent
> how this workshop works. You do not need to install these four separately;
> they travel with the repository."

Explain the tool registry in plain language:

- **Slash command:** starts a project playbook.
- **Skill:** the instructions and boundaries behind that command.
- **CLI:** lets Claude operate a local tool such as GitHub or Vercel from the
  terminal.
- **Connector or MCP:** gives Claude permissioned access to inspect an external
  service, such as Vercel deployments and build logs.
- **Plugin:** a packaged set of capabilities that may include skills,
  connectors, commands, or other integrations.

Say:

> "The agent can use tools, but it does not own your accounts. When it asks to
> create a repository, push code, or connect Vercel, read the destination and
> approve only if it is correct. Never paste a password, token, or `.env.local`
> into the chat."

**Do:** Ask for a quick readiness signal. Mentors immediately visit teams that
cannot see the slash commands. Do not hold the rest of the room longer than two
minutes.

**Checkpoint:** Every active team sees all four commands, or has moved to a
fallback driver laptop.

## 0:10-0:15 - Teach the agent loop

**Slide cue:** Agent loop or tool overview.

Say:

> "A chat answer is not proof. A coding agent should inspect, act, and verify.
> We will use this loop: describe, plan, approve, build, verify, commit, push,
> deploy."

> "The human owns three things: the goal, permission, and judgment. Claude can
> decide how to edit the project, but you decide whether the result solves the
> problem and whether an external action is allowed."

Use one concrete contrast:

> "'Build me a queue app' leaves the agent to invent the meaning of success.
> 'A stall worker adds a ticket, marks it ready, and the customer's number
> appears on the ready board' gives us a journey we can test."

Explain what the agent may do while building:

- Read the current files before editing.
- Use the project skills and ground truth.
- Change the Next.js interface.
- Run lint and production build checks.
- Start the local server.
- Walk the real browser journey.
- Fix a failure and repeat the verification loop.

Say:

> "Do not judge progress by how much code was generated. Judge it by whether the
> tester can produce the agreed evidence in the browser."

**Checkpoint:** The room knows that generated code is an attempt; observed
browser behavior is evidence.

## 0:15-0:22 - Wishful Programming: work backwards

**Slide cue:** Dedicated Wishful Programming page.

Say:

> "Before features, start with the wish. Wishful Programming means working
> backwards from the result you want until you reach the first thing you can
> build and test."

Use the mamak queue example. Ask the room the questions and pause for answers.

> "What result do we want?"

Use or guide toward:

> "Customers know when their food is ready without crowding the counter."

Then ask:

> "What would we see in the browser that proves it?"

Use:

> "The customer's queue number appears clearly on the ready board."

Then ask twice:

> "What must already be true immediately before that?"

Work backwards:

1. Staff marked the order ready.
2. A queue ticket already existed.
3. Staff created the ticket.

Say:

> "Now we have a journey: create a ticket, mark it ready, see the number on the
> ready board. Login, payments, analytics, and a database can wait because they
> do not prove this first goal."

**Do:** In the disposable demo project, enter:

```text
/wish
```

Answer the questions with the example above. Show the generated
`PROJECT-GOAL.md` and point at Goal, Evidence, Required conditions, Smallest
journey, and Later.

**Teams:** Run `/wish`. Each product owner answers one question at a time. The
driver does not start building yet.

Use this room prompt if teams are writing feature lists:

> "Tell me the result for the user, not the screens you want. What could your
> tester observe in the browser by the end of this hour?"

**Checkpoint:** Every team has a `PROJECT-GOAL.md` with a journey of three to
five actions and one visible success condition.

## 0:22-0:25 - Choose the build route

**Slide cue:** `/wish` and `/one-shot` command cards.

Say:

> "Your goal is approved in `PROJECT-GOAL.md`. Now run `/one-shot`. It builds that
> exact journey, checks it, fixes it, and browser-tests the local app for you."

Explain its boundary:

> "`/one-shot` works only on the local app. It does not create a GitHub
> repository or deploy. That separation prevents an agent from publishing work
> before you have tested it."

**Do:** Enter this in the disposable demo project:

```text
/one-shot Build the approved journey in PROJECT-GOAL.md. Use a playful dark
theme, English, mobile-first layout, and no login.
```

**Teams:** Run their own version:

```text
/one-shot Build the approved journey in PROJECT-GOAL.md. [Add visual or language
preferences here.]
```

Tell them:

> "If you do not care about a visual choice, say 'surprise me.' Do not add a
> backend yet. Local sample data is enough to prove the journey."

**Checkpoint:** Every building team has started `/one-shot` using its approved
goal, not an unrelated fresh idea.

## 0:25-0:36 - Supervised build sprint

**Slide cue:** Keep the agent loop visible. Do not advance through text-heavy
slides while teams need their screens.

Say:

> "Claude is now reading the project, narrowing the journey, editing the app,
> running verification, starting the server, and testing the browser. Let it
> work. Read its short updates, but do not interrupt just because files are
> changing. Interrupt if it changes the goal, asks for a secret, adds a native
> framework, or tries to publish."

While the agents work, narrate only these concepts:

1. **Project context**

   > "The repository contains `CLAUDE.md` and a project ground truth. This is how
   > we stop the agent from inventing a different stack or reviving an old task."

2. **Verification loop**

   > "A valid local result needs three pieces of evidence: `npm run verify`
   > passes, the server returns 200, and a real tester completes the happy path
   > in a browser."

3. **Failure behavior**

   > "A failed build is not a failed project. The agent should read the error,
   > fix the smallest cause, and run the same checks again. It must not delete
   > the check to make the result look green."

4. **Scope**

   > "If the first version needs a database, login, payments, and five user
   > roles, the journey is probably too large. Move those into Later."

**Mentors:** Circulate in this order:

1. Agent has not started because it is asking an unnecessary question.
2. Agent is building outside Next.js web.
3. Verification has a concrete error.
4. Local server or port is unavailable.
5. Team is changing scope while the agent is building.

If Claude drifts, the driver should paste:

```text
Stop. Read PROJECT-GROUND-TRUTH.md, PROJECT-GOAL.md, and the active skill again.
State the current objective in one sentence. Ignore historical tasks and
continue only the current local build.
```

At minute 32, announce:

> "Four minutes to the local checkpoint. If your journey is too large, ask
> Claude to keep only the first visible success and move everything else to
> Later."

**Checkpoint at minute 36:** The local URL is open. Teams still compiling may
continue, but they receive mentor attention immediately.

## 0:36-0:42 - Test the journey, not the screenshot

**Slide cue:** Local verification or tester page.

Say:

> "Drivers, take your hands off the mouse. Testers, use the app without being
> coached. Follow the Smallest journey in `PROJECT-GOAL.md`."

**Teams:** The tester completes each action and confirms the evidence. The
product owner watches for whether the result solves the stated goal.

Ask every team to check:

- Does the page load at the URL Claude reported?
- Can the tester identify the first action without explanation?
- Does every required action respond?
- Is the success condition visibly different from the starting state?
- Does refreshing or repeating the journey cause an obvious failure?
- Does the phone-width layout remain usable?

If the test fails, tell the driver to give evidence rather than a vague review:

```text
The tester completed steps 1 and 2, but after [exact action] the browser showed
[exact result] instead of [expected evidence]. Fix the smallest cause, rerun
npm run verify, and walk the journey again.
```

Say:

> "Do not say 'make it better.' Report the action, the observed result, and the
> expected evidence. That gives the agent something testable."

**Do:** Complete the demo journey in the browser. Show that the queue number is
created, moved to Ready, and removed when collected. Do not merely show the
homepage.

**Checkpoint:** The tester, not the builder, confirms the local happy path.

## 0:42-0:52 - Publish through GitHub and connect Vercel

**Slide cue:** GitHub -> Vercel CI flow and permission card.

Say:

> "Local success is the gate for publishing. Now we use a different skill
> because publishing changes external systems and needs explicit approval."

**Do:** Enter:

```text
/ship-web
```

**Teams:** Run `/ship-web` only after the tester has confirmed the local journey.

Narrate the stages as Claude performs them:

### Safety check

> "First, Claude reruns verification, checks the production build, confirms this
> is still a Next.js web app, checks `.gitignore`, and looks for secrets. If it
> finds `.env.local`, a token, or a private key in the files to publish, stop and
> call a mentor."

### GitHub destination

> "Next, Claude asks where the code should go. Paste your team's GitHub repo
> link, or say 'new' and it creates a private repo on the driver's account. It
> will never push to the starter you cloned."

When the skill asks for commit/push approval, say:

> "Read three things before approving: the changed files, the commit message,
> and the destination repository. Approval is not a formality."

Teams do not have repositories before this step; `/ship-web` creates one or
uses an existing one the team pastes. The skill suggests a short name from
`PROJECT-GOAL.md`; the driver only needs to accept it or type another.

### Vercel Git connection

> "GitHub stores the code. Vercel watches that repository. Claude pushes your
> code, connects Vercel, then pushes one empty commit so Vercel sees a push and
> builds it. The Git push, not a file upload, is the deployment source."

When the skill asks to connect or change a Vercel project, say:

> "Confirm the Vercel account or team and project name before approving. Keep
> the GitHub repository as the source."

Clarify the three tools:

- GitHub CLI creates or updates repository history.
- Vercel CLI links the local project and Git repository.
- Vercel MCP inspects projects, deployments, status, and build logs.

Say:

> "We do not use direct-file deployment for the submission. That would bypass
> the Git history and stop later pushes from becoming the normal deployment
> workflow."

**Checkpoint:** Teams have pushed to their own repository and connected Vercel
Git, or are waiting on a known permission issue.

## 0:52-0:57 - Inspect the deployment and repair one failure

**Slide cue:** Deployment inspection.

Say:

> "A deploy button is not evidence. We need the deployment status, the public
> URL, and the same browser journey working there."

**Do:** Let `/ship-web` use Vercel MCP to locate the project and latest
deployment. Show the status. If it is ready, open the public URL and repeat the
happy path.

If the build fails, narrate the correct recovery:

> "Claude reads the relevant build error, fixes the smallest cause locally,
> reruns verification, then asks before committing and pushing the repair. The
> new Git push creates the next deployment."

Do not manually upload files or bypass the Git connection to save time.

**Teams:** Test the public URL. Confirm it is the deployed application, not the
local tab.

Ask teams with a working URL to paste it into the event collection form or show
it to their mentor, according to the event submission process.

**Checkpoint:** A team has a public URL only when the tester completes the same
agreed journey on it.

## 0:57-1:00 - Close and hand off to open build time

**Slide cue:** Final checklist and next steps.

Say:

> "You have now used the complete agentic delivery loop. You started with a
> result, worked backwards to observable evidence, let an agent build the
> smallest journey, tested it, published the code, and inspected the live
> deployment."

> "From here, every improvement follows the same loop: update the goal, make one
> small change, verify locally, commit, push, and check the new deployment."

Set the backend boundary:

> "Only add Supabase when your next goal truly needs persistent data, login,
> storage, or shared state. Keep schema changes tracked, enable row-level
> security on exposed tables, and never put secret keys in the repository. Ask
> a mentor before adding it if your local journey is not already stable."

Give the teams their immediate next action:

> "If your URL works, improve one thing that strengthens the goal. If your local
> app works but deployment does not, keep the verified repository and take it to
> a mentor. If the local journey does not work, shrink the journey before adding
> anything new."

Finish with:

> "Your hackathon project is not measured by how many features Claude can
> generate. It is measured by whether a real person can complete a useful
> journey and whether your team can explain the evidence."

---

# Exact participant cheat sheet

Display or share this section after the workshop.

## Before the workshop

```text
1. git clone https://github.com/Tanwyhang/ai-coding-workshop-starter.git
2. Open the ai-coding-workshop-starter folder in Claude Desktop.
3. Type / and confirm all four project skills appear.
4. Run /workshop-onboarding.
5. Complete every login and verification step at least 48 hours before Friday.
```

## During the workshop

```text
1. Run /wish.
2. Approve the smallest journey in PROJECT-GOAL.md.
3. Run /one-shot (add preferences if you like).
4. Let the tester complete the local journey.
5. Run /ship-web. Paste your team's GitHub repo link, or say "new".
6. Check the repo name, Vercel account, files, and commit message before
   approving each step.
7. Test the same journey on the public https://<project>.vercel.app link.
```

## What each command owns

| Command | Purpose | Must not do |
|---|---|---|
| `/workshop-onboarding` | Prepare tools and authentication | Build, create repositories, deploy |
| `/wish` | Define goal, evidence, and journey | Change application code |
| `/one-shot` | Build and verify the local app | Push, create repositories, deploy |
| `/ship-web` | Publish through GitHub and Vercel Git | Bypass Git with direct upload |

---

# Facilitator recovery prompts

## Claude is drifting into an older task

```text
Stop. Read PROJECT-GROUND-TRUTH.md, PROJECT-GOAL.md, and the active skill again.
State the current objective in one sentence. Treat SESSION-TRANSCRIPT.md as
history only. Do not resume any earlier login, repository, deployment, or
rehearsal task. Continue only the current request.
```

## The app scope is too large

```text
Return to the Evidence in PROJECT-GOAL.md. Keep only the smallest browser
journey needed to produce that evidence. Move every other feature to Later,
then continue.
```

## Claude reports success without testing

```text
Do not claim completion yet. Run npm run verify, confirm the actual local URL
returns 200, then use the browser to perform every action in the Smallest
journey and confirm the Evidence is visible. Report observed evidence only.
```

## The tester finds a failure

```text
The tester performed [action]. The browser showed [observed result]. The
expected evidence was [expected result]. Fix the smallest cause, rerun
verification, and repeat the browser journey.
```

## Claude tries to build native mobile

```text
This hackathon accepts responsive Next.js web apps only. Convert the requested
mobile experience into a mobile-first browser journey. Do not add React Native,
Expo, Flutter, Swift, Kotlin, Capacitor, or native packaging.
```

---

# Troubleshooting order for mentors

Use this order so teams are not sent down unrelated debugging paths.

## Slash command missing

1. Confirm Claude opened the cloned repository itself.
2. Confirm `.claude/skills/<skill-name>/SKILL.md` exists.
3. Reopen the correct project folder.

## Build cannot start

1. Read the actual error.
2. Confirm Node 20 or newer and dependencies installed.
3. Run `npm run verify` once.
4. Let the agent fix the first concrete failure.

## Local URL unavailable

1. Read the server output for the actual port.
2. Use the URL the server reported rather than assuming port 3000.
3. Stop only a process the current agent started; never kill every Node process
   by name.

## GitHub push blocked

1. Run `gh auth status`.
2. Confirm Git identity.
3. Confirm `origin` is the team repository (the starter should now be
   `upstream`).
4. Confirm the driver has push access.
5. If the push is rejected for different history, do not force-push; use a new
   repo or a mentor.
6. Never redirect the push to the starter repository.

## Vercel connection blocked

1. Run `vercel whoami`.
2. Confirm the intended Vercel account or team.
3. Confirm the Vercel GitHub App can access the team repository.
4. Confirm the local Vercel project link.
5. Run or inspect `vercel git connect` through the active skill.
6. Connected but no deployment? Linking does not deploy; only a push after the
   connection does. Let `/ship-web` push its empty "Start Vercel deployment"
   commit (it asks first).
7. Private repo owned by a GitHub organisation refused on the free Vercel plan?
   Use a repo on the driver's personal account.
8. Use Vercel MCP for deployment status and relevant logs.
9. Visitors see a Vercel login? They were given the long deployment URL; share
   `https://<project>.vercel.app` instead.

## A secret is detected

Stop the publishing flow. Remove the secret from files Git would publish,
rotate it if it may have been exposed, and rerun the safety check. Do not paste
the secret into Claude or a shared screen.

---

# Time protection rules

- Do not spend live workshop time installing system software.
- Do not let one team's authentication issue stop the room.
- Do not add Supabase during the core hour.
- Do not create extra pages or roles before the first journey works.
- Do not wait silently for a long build; teach the verification model while it
  runs.
- At minute 36, prioritize local evidence.
- At minute 52, preserve a verified GitHub repository even if Vercel still needs
  mentor support.
- Never bypass GitHub CI to manufacture a public URL.

# Success measures

By the end of the hour:

- Target at least 18 of 20 teams with a team-owned GitHub repository containing
  the verified work.
- Target at least 16 teams with a working Vercel URL.
- Every remaining team should have a locally verified repository that a mentor
  can deploy immediately afterward.

# Final facilitator self-review

After rehearsing, answer these questions:

- Did I demonstrate a completed journey before explaining tools?
- Did I explain skills, slash commands, CLIs, connectors/MCP, and plugins in
  plain language?
- Did the room produce `PROJECT-GOAL.md` before building?
- Did a tester other than the driver complete the local journey?
- Did I show the exact GitHub destination before approving a push?
- Did I explain that GitHub, not direct upload, triggers Vercel deployment?
- Did I inspect the deployment rather than only showing a URL?
- Did I leave at least three minutes for the handoff?

