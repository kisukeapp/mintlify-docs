# Kisuke documentation

Product documentation for Kisuke, built with Mintlify around Zen mode and provider/model choice. Coverage and runtime verification are still in progress.

## Preview and validate

From this directory, run:

```sh
npx mint dev
npx mint broken-links
npx mint validate
npx mint a11y
```

The default preview address is `http://localhost:3000`. Use the URL printed by the CLI if it chooses another port.

## Evidence and scope

Keep local coverage and verification notes in `maintenance/parity-plan.md` and source references in `maintenance/evidence.md`. The `maintenance/` directory is excluded from version control and the published site because it contains local research, runtime logs, and disposable verification projects. The audit remains in progress.

Read the relevant Kisuke implementation in the sibling `omni` checkout before changing product claims. Proposed specs are not proof of shipped behavior. Record real screenshots and keep private account information out of public images.

Do not add pricing, copy Codex-only features into Kisuke, or claim every harness supports every model. No deployment is implied by local editing or previewing.
