<script setup lang="ts">
const colorMode = useColorMode()

const label = computed(() => {
  if (colorMode.preference === 'dark') {
    return 'Dark mode'
  }

  if (colorMode.preference === 'light') {
    return 'Light mode'
  }

  return 'System mode'
})

const iconName = computed(() => {
  if (colorMode.preference === 'dark') {
    return 'lucide:moon'
  }

  if (colorMode.preference === 'light') {
    return 'lucide:sun'
  }

  return 'lucide:laptop'
})

function cycleMode() {
  const current = colorMode.preference || 'system'
  const next = {
    system: 'light',
    light: 'dark',
    dark: 'system',
  }[current] || 'system'

  colorMode.preference = next
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-full border border-border bg-surface-muted p-2 text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    :aria-label="`Switch color mode (currently ${label.toLowerCase()})`"
    @click="cycleMode"
  >
    <Icon
      :name="iconName"
      class="h-4 w-4"
      aria-hidden="true"
    />
  </button>
</template>
