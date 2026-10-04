# Decisions

This design system intentionally favors a narrow set of decisions that match the repository’s current implementation and constraints.

## Why this direction

The blog is a content-first static site, not a general web app. That means the design should prioritize:

- reading comfort
- long-form article legibility
- low maintenance and easy theme tuning
- fast static generation without third-party runtime requests

## Why Tailwind v4 and CSS tokens

The project already uses Tailwind v4 and a central `@theme` block in `app/assets/css/main.css`. This keeps the design system tweakable in one file and avoids a large JS configuration layer.

## Why local fonts and icons

The repository intentionally uses `@nuxt/fonts` and local Lucide assets to avoid runtime requests to external providers. This aligns with the production requirement for static generation and keeps the generated site more reliable.

## Why class-based dark mode

The implementation in `nuxt.config.ts` uses `@nuxtjs/color-mode` with `classSuffix: ''` and a custom dark variant. This makes the mode switch predictable while matching the existing utility approach.

## Why minimal motion and restrained styling

The blog is centered on writing, and the interface should not compete with the content. Minimal transitions and low-noise surfaces provide a better reading experience and better accessibility without requiring a large design system.

## Future guidance

When updating the design system, continue to follow the repo’s existing patterns instead of introducing a separate component DSL or design language that does not match the app structure. Keep customizations centralized, small, and easy to reason about.
