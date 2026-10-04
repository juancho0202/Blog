<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object,
    default: null,
  },
})

const statusCode = computed(() => props.error?.statusCode ?? 500)

const message = computed(() => {
  if (statusCode.value === 404) {
    return 'The page you are looking for does not exist.'
  }

  return 'Something went wrong while loading this page.'
})
</script>

<template>
  <div>
    <h1>{{ statusCode }}</h1>
    <p>{{ message }}</p>
    <NuxtLink
      to="/"
      @click.prevent="clearError({ redirect: '/' })"
    >
      Go back home
    </NuxtLink>
  </div>
</template>
