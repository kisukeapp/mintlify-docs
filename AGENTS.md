# Kisuke documentation contract

This repository contains Kisuke's public product documentation, built with Mintlify. Implementation lives in the sibling `../omni` repository. Explain real user workflows, with Zen mode and provider/model choice prominent.

## Evidence before claims

- Inspect the complete implementation path relevant to each claim. UI labels establish labels, not successful execution or persistence.
- Read relevant specs and recent history. Proposed specs establish intent until implementation confirms them.
- Record source paths, revision, observed behavior, and uncertainty in `maintenance/evidence.md`.
- Do not invent cross-platform parity, supported models, permissions guarantees, installation commands, pricing, or authentication methods.
- Explain provider, harness, model, project, device, and conversation as distinct concepts.
- Distinguish Zen layout from Worktree style. Do not describe Codex-only dots or Work/Chat modes as Kisuke features.

## Writing

- Use active voice, second person, sentence case headings, and bold exact UI labels.
- Provide prerequisites, steps, expected results, limitations, and recovery advice where useful.
- Prefer detailed task guidance over feature lists and marketing claims.
- Use root-relative internal links without extensions. Every page needs title and description frontmatter.
- Do not add pricing. Model examples are not an exhaustive availability list.
- Use real app screenshots with captions and alt text. Do not publish private conversations, account details, local test harnesses, or fabricated UI.

## Site workflow

- Configuration is in `docs.json`; pages use MDX.
- Use the installed Mintlify skill for platform conventions.
- Preview with `npx mint dev`; validate with `npx mint validate` and `npx mint broken-links`.
- Inspect rendered desktop and narrow layouts and share screenshots during work.
- Maintainer research belongs in `maintenance/`, excluded through `.mintignore`.
- Coverage and quality gates are in `maintenance/parity-plan.md`. Drafts and green link checks alone do not establish parity.
- Never generate a changeset unless explicitly requested.
