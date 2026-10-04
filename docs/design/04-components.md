# Components

The blog already has a small, reusable component set that matches the content-first architecture. The design docs should reference those actual names rather than abstract or generic component names from a different codebase.

## Existing component system

Use the current Nuxt app component patterns as the baseline:

- `app/components/PostCard.vue` — post teaser on index pages
- `app/components/PostMeta.vue` — article metadata and draft badge
- `app/components/TagList.vue` — tags for each post
- `app/components/PostNav.vue` — previous/next article links
- `app/components/ColorModeToggle.vue` — mode toggle for system/light/dark
- `app/components/ProseImg.vue` — article image behavior

These are the building blocks for the blog interface and should be the primary naming references in any design guidance.

## Component behaviors

### PostCard

- present a compact summary with title, description, meta, and tags
- use a neutral card surface that emphasizes content readability
- focus states must be obvious and accessible

### PostMeta

- show the publication date and reading time
- show the draft badge only in local development
- keep metadata visually quiet so the headline remains dominant

### TagList

- use compact pills with clear contrast
- limit styling to small visual emphasis without overpowering the post content

### PostNav

- create a simple previous/next in-article navigation
- keep it aligned with the article column and visually separate from the main prose

### ColorModeToggle

- default to the system preference
- cycle through system → light → dark
- show the current mode with a local Lucide icon

## Styling approach

Use utility classes and theme tokens rather than ad hoc CSS. The current structure already groups theme and typography primitives in one place (`app/assets/css/main.css`). That pattern is preferable to introducing a separate component-scoped CSS layer.

## Accessibility rules

All interactive components should use:

- visible focus rings
- strong contrast against their backgrounds
- clear hover and active behavior
- semantic button and link patterns

The repo’s current focus styling is a good baseline to keep consistent across all components.
