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
  >
    <p v-if="previous">
      Previous:
      <NuxtLink :to="previous.path">
        {{ previous.title }}
      </NuxtLink>
    </p>
    <p v-if="next">
      Next:
      <NuxtLink :to="next.path">
        {{ next.title }}
      </NuxtLink>
    </p>
  </nav>
</template>
