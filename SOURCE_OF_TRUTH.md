# Kisuke Docs Source Of Truth

This file captures the current source-of-truth decisions for the Kisuke documentation site.

## Canonical Links

- Main website: `https://kisuke.dev/`
- Downloads page: `https://kisuke.dev/downloads/`
- Docs site: `https://docs.kisuke.dev/`

Do not link to `https://beta.kisuke.dev/downloads/` from docs. Download links should use `https://kisuke.dev/downloads/`.

## Visual Source

Use `https://kisuke.dev/` as the primary visual source of truth for the docs site.

Use `https://kisuke.dev/downloads/` as the source of truth for light mode. Its content palette is:

```css
--content-bg: #f5f0e6;
--content-bg-alt: #f2ede4;
--content-fg: #2d2b28;
--content-fg-muted: #6b6860;
--content-fg-dim: #9a9589;
--content-border: rgba(0, 0, 0, .06);
--content-accent: #5a8a5e;
```

Use the main site dark palette for dark mode:

```css
--bg-0: #0a0a0b;
--bg-1: #161618;
--bg-2: #222226;
--bg-3: #2c2c30;
--bg-4: #38383e;
--fg: #ffffff;
--fg-muted: #a1a1aa;
--fg-dim: #71717a;
--border: #27272a;
--border-subtle: #1f1f22;
--accent-primary: #bfd690;
--accent-secondary: #e6d3a5;
```

## Shape And Type

- Navbar and normal button radius should match the website: `8px`.
- Larger download-style buttons on the website use slightly larger radius, but docs navbar buttons should stay at `8px`.
- Docs should use the Kisuke app font stack for prose and UI.
- Monospace should only be used for code, terminal snippets, and ASCII logo rendering.

## Layout Rules

- The docs layout should follow the OpenAI docs pattern: fixed left sidebar, centered content column, and right-side "On this page" rail.
- Sidebar section titles should be visible, non-clickable labels.
- Sidebar child pages should be clickable.
- Do not show the parent/sidebar group title as an eyebrow above the article title.
- Scrolling inside the sidebar should only scroll the sidebar, not the main page.

## Navigation

- Keep top navbar actions minimal: Support and Download.
- Do not include GitHub in the top navbar.
- It is acceptable for GitHub links to remain in footer/resource/support contexts when useful.
