# Graphics

The blog should keep graphics minimal and quiet. It should feel editorial and technical, not decorative or brand-heavy.

## Visual treatment

Use graphics for support, not as decorative hero objects:

- thin borders and subtle shadows to define cards and content panels
- accent color only for links, tags, and status labels
- restrained radii and spacing to keep the system consistent
- no large illustration system or complex iconography beyond utility icons

## Image handling

`app/components/ProseImg.vue` should remain the main mechanism for article images. Images should be embedded cleanly within the article flow and not break the reading rhythm.

## Borders, surfaces, and contrast

The current repo already uses a restrained system that favors:

- low-contrast borders
- neutral surfaces with close color values
- only a little accent for selection and emphasis
- readable contrast for both light and dark themes

This should remain the default approach; avoid introducing hard-to-maintain gradients or noisy surfaces.
