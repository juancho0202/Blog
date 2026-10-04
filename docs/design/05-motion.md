# Motion

Motion in the blog should stay subtle and purposeful. The interface is content-first, so motion should support readability and affordances without drawing attention away from the writing.

## Principles

- keep transitions short and gentle
- favor opacity, color, and movement that feels calm
- avoid exaggerated or decorative animation
- ensure that motion does not reduce legibility

## Timing

Use light, brief transitions such as:

- 150-200ms hover/focus transitions for links and buttons
- soft background or border transitions
- subtle color or shadow transitions around interactive elements

This matches the current repository patterns in `app/layouts/default.vue`, `app/components/PostCard.vue`, and `app/components/ColorModeToggle.vue`.

## Motion patterns to prefer

- gentle hover state changes on links and nav pills
- short focus ring transitions for keyboard users
- low-contrast color shifts in theme toggles and card actions

## Motion patterns to avoid

- large parallax effects
- repeated spinning or bouncing animations
- dramatic page transitions or intro animations
- anything that distracts from reading long-form content

## Accessibility

Motion should be respectful of reduced-motion preferences and should never be necessary for understanding the interface. If motion is added later, it should remain optional and lightweight.
