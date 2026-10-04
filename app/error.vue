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
    <section>
      <h1 v-if="error.statusCode === 404">
        Page not found
      </h1>
      <h1 v-else>
        Something went wrong
      </h1>
      <p>{{ error.statusMessage || 'Please try again later.' }}</p>
      <p>
        <NuxtLink to="/">
          Go back home
        </NuxtLink>
      </p>
    </section>
  </NuxtLayout>
</template>
