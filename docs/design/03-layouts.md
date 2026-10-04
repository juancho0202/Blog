# Layouts

The blog should have a simple page shell with a strong reading column and a quiet frame around it.

## Page structure

The repository already uses a layered layout structure centered around:

- `app/layouts/default.vue` for the global shell
- `app/pages/index.vue` and `app/pages/blog/index.vue` for index pages
- `app/pages/blog/[...slug].vue` for article detail pages

This should stay as the baseline structure. The documentation should not suggest replacing it with a more app-like layout pattern.

## Shell

The global shell should include:

- sticky header with left-aligned site title and right-aligned navigation toggle area
- slim nav pills using a subtle background and border treatment
- skip-to-content link for keyboard users
- footer with copyright text and GitHub link

Recommended behavior:

- responsive nav wraps cleanly on smaller screens
- page shell uses a generous but not oversized max width
- content block remains visually centered and readable

## Content column

Article pages should use a centered content column that feels like a readable editorial document:

- article width around 70 characters per line
- large heading hierarchy
- neutral frame/background around the prose panel
- relaxed spacing between sections and list blocks

The repository’s current `ProseImg` and article content wrapper in `app/pages/blog/[...slug].vue` are a good fit for this pattern.

## Responsive behavior

The design should prioritize mobile-first structure:

- single-column stack on small screens
- nav pills remain compact and usable
- cards and article shells preserve spacing as they grow on larger screens
- no content jumps or awkward overflow when code blocks are present

## Rules for future changes

- keep the shell lean; avoid visual clutter around the main reading flow
- avoid adding extra columns or dashboard-like sections to the post flow
- keep spacing and containers consistent with the existing `page-shell` utility and `content-card` layer
- prefer component composition over one-off custom wrappers
