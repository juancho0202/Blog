<script setup lang="ts">
defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
  }
}>()
</script>

<template>
  <NuxtLayout>
    <section class="mx-auto max-w-2xl rounded-3xl border border-border bg-surface-muted p-8 text-center shadow-sm">
      <p class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand">
        {{ error.statusCode || 'Error' }}
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-foreground">
        <span v-if="error.statusCode === 404">Page not found</span>
        <span v-else>Something went wrong</span>
      </h1>
      <p class="mt-4 text-lg text-foreground-muted">
        {{ error.statusMessage || 'Please try again later.' }}
      </p>
      <p class="mt-8">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          @click="clearError({ redirect: '/' })"
        >
          Go back home
        </button>
      </p>
    </section>
  </NuxtLayout>
</template>
