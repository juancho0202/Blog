<script setup lang="ts">
defineProps<{
  previous?: {
    path: string
    title: string
  }
  next?: {
    path: string
    title: string
  }
}>()
</script>

<template>
  <nav
    v-if="previous || next"
    aria-label="Post navigation"
    class="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-2"
  >
    <div
      v-if="previous"
      class="rounded-2xl border border-border bg-surface-muted p-4"
    >
      <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground-muted">
        Anterior
      </p>
      <NuxtLink
        :to="previous.path"
        class="text-lg font-medium text-foreground hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        {{ previous.title }}
      </NuxtLink>
    </div>
    <div
      v-if="next"
      class="rounded-2xl border border-border bg-surface-muted p-4 sm:text-right"
    >
      <p class="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-foreground-muted">
        Siguiente
      </p>
      <NuxtLink
        :to="next.path"
        class="text-lg font-medium text-foreground hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
      >
        {{ next.title }}
      </NuxtLink>
    </div>
  </nav>
</template>
