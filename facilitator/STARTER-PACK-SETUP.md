# Publishing the participant starter pack

The participant experience should begin with one repository link and [`START-HERE.md`](../START-HERE.md).

## Current repository constraint

As checked on 20 September 2026, `Tanwyhang/ai-coding-workshop-starter` is private and is not configured as a GitHub template. Participants without repository access cannot use it as their front door.

Resolve this before sharing the workshop link. Choose one delivery model:

### Recommended: GitHub template

1. Give participants read access, or make the starter public if the event permits it.
2. Enable **Template repository** in GitHub settings.
3. Share the template's **Use this template** link.
4. Each team creates a private repository in its chosen account or organisation.
5. The team clones its new repository and follows `START-HERE.md`.

### Alternative: assigned team repositories

1. Create one repository per team from the starter before the event.
2. Give the team driver push access.
3. Send each team its own repository link.
4. The team clones that repository and follows `START-HERE.md`.

Do not ask participants to clone the facilitator repository and push back to it.

## Distribution checklist

- Push the latest starter files and project skills
- Confirm `START-HERE.md` opens from the shared link
- Confirm all four slash commands load from a clean clone:
  `/workshop-onboarding`, `/wish`, `/one-shot`, and `/ship-web`
- Run `/workshop-onboarding` on clean macOS and Windows machines
- Create a short link or QR code that opens `START-HERE.md`
- Keep an offline ZIP of the same commit as a fallback
