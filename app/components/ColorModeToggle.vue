<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const label = computed(() => (isDark.value ? 'Dark mode' : 'Light mode'))
const iconName = computed(() => (isDark.value ? 'lucide:moon' : 'lucide:sun'))

function toggleMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-full border border-border bg-surface-muted p-2 text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    :aria-label="`Switch color mode (currently ${label.toLowerCase()})`"
    @click="toggleMode"
  >
    <Icon
      :name="iconName"
      class="h-4 w-4"
      aria-hidden="true"
    />
  </button>
</template>
