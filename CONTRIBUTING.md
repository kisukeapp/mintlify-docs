# Contribute to Kisuke documentation

Read [AGENTS.md](AGENTS.md) for the documentation contract. Verify product claims against the implementation and interaction instructions against the running app.

1. Identify the user action the page should help someone complete.
2. Inspect implementation, relevant specs, and recent history in the sibling `omni` checkout.
3. Record the source revision and verification in `maintenance/evidence.md`.
4. Write the procedure with prerequisites, expected results, limitations, and recovery advice.
5. Update `docs.json` when adding or moving pages.
6. Run `npx mint validate`, `npx mint broken-links`, and `npx mint a11y`. The accessibility command checks contrast and media alt text; also inspect keyboard navigation and rendered layouts.
7. Preview with `npx mint dev` and inspect desktop and narrow layouts.

Use real screenshots. Keep private details, unrelated conversations, and local test harnesses out of public images. Give images descriptive alt text and useful captions.

## Check keyboard reading

1. Reload a page and press **Tab**. **Skip to main content** should become visible with a clear focus indicator.
2. Press **Enter**. Confirm that focus moves to the current article's heading and that the heading is visible below the sticky header.
3. Press **Tab** again. Focus should continue inside the article; the heading should not become an extra stop when tabbing backward later.
4. Follow a **Previous** or **Next** page link and repeat the skip check. This exercises navigation within the site as well as a page reload.
5. Open an expandable screenshot, reach its image button with **Tab**, and press **Enter** to open the full-image viewer. Use **Escape** to close it. After the closing transition finishes, confirm that focus returns to the visible image button. Repeat at a narrow viewport.

When a check fails, record the route, viewport, focused element, document readiness and screenshot before retrying. Preserve the failed observation even if a later check passes. Do not add timing workarounds without reproducing the cause.

The current image viewer marks its transition on `html[data-ramka-view-transition]`. Its close button can disappear before that attribute is removed and focus is restored. In browser checks, wait for the transition marker to disappear instead of using a fixed delay or treating the missing close button as completion.

`mint a11y` checks configured color combinations and media alt attributes; it does not verify rendered focus behavior, the quality of descriptions, or screen-reader usability. Interpret its output alongside the rendered checks. The skip-link procedure follows [W3C technique G1](https://www.w3.org/WAI/WCAG22/Techniques/general/G1).

Keep unresolved research and coverage work in `maintenance/`, separate from public content.
