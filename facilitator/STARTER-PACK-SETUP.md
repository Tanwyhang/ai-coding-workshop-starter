# Publishing the participant starter pack

The participant experience begins with one public repository and
[`START-HERE.md`](../START-HERE.md).

## Delivery model

`Tanwyhang/ai-coding-workshop-starter` is public. Every team driver clones it
directly. Teams do **not** need a repository before the event: at the end of the
workshop `/ship-web` either creates a private repository on the driver's GitHub
account or pushes to a team repository the driver pastes, then connects it to
Vercel Git.

Do not give participants push access to the starter. `/ship-web` never pushes
to it.

## Distribution checklist

- Push the latest starter files and project skills
- Confirm `START-HERE.md` opens from the shared link
- Confirm all four slash commands load from a clean clone:
  `/workshop-onboarding`, `/wish`, `/one-shot`, and `/ship-web`
- Run `/workshop-onboarding` on clean macOS and Windows machines
- Create a short link or QR code that opens `START-HERE.md`
- Keep an offline ZIP of the same commit as a fallback
