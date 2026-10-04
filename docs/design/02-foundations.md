# Foundations

The foundation of the site should be defined in one place so that brand colors, typography, and dark-mode behavior remain easy to tune without spreading values across multiple files.

## Theme token model

The project uses Tailwind v4 and centralizes design tokens in `app/assets/css/main.css` via `@theme`.

Suggested token structure:

```css
@theme {
  --color-brand: #2563eb;
  --color-brand-strong: #1d4ed8;
  --color-accent: #7c3aed;
  --color-surface: #ffffff;
  --color-surface-muted: #f8fafc;
  --color-elevated: #f1f5f9;
  --color-border: #e2e8f0;
  --color-foreground: #0f172a;
  --color-foreground-muted: #475569;
  --color-code-bg: #0f172a;

  --font-sans: "Inter", "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "SFMono-Regular", monospace;
}
```

Use dark overrides with the class-based variant instead of duplicating the whole theme elsewhere:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

## Color direction

The system should be intentionally restrained:

- blue as the primary brand accent
- neutral surfaces and borders for calm contrast
- dark mode adjustments limited to the palette tokens rather than broad redesigns

This matches the repository’s current `ColorModeToggle.vue` and other components, which rely on semantic color utilities such as `bg-surface`, `text-foreground`, and `border-border`.

## Typography

The app uses:

- `Inter` for UI and body copy
- `JetBrains Mono` for code and technical labels

These are configured in `nuxt.config.ts` and exposed through `@theme` font variables. This keeps the app consistent with the existing static export setup and avoids runtime font fetching.

## Typographic scale

Keep headings tight and readable using a clear scale:

- page titles: bold, high-contrast, compact letter spacing
- body copy: comfortable line height and readable paragraph density
- metadata: small uppercase labels and muted text for article details

## Dark mode

The dark-mode behavior should follow system preference by default and persist through `@nuxtjs/color-mode`:

```ts
colorMode: {
  classSuffix: '',
  preference: 'system',
  fallback: 'light',
}
```

This is consistent with the repository’s implementation and keeps the theme predictable while avoiding a flash of incorrect mode on load.

## Implementation notes

The actual repository already follows this model in:

- `app/assets/css/main.css`
- `nuxt.config.ts`
- `app/components/ColorModeToggle.vue`
- `app/layouts/default.vue`

This is the correct place to continue tuning the tokens rather than introducing a separate JS theme layer.
