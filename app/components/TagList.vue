<script setup lang="ts">
defineProps<{
  tags?: string[]
}>()
</script>

<template>
  <ul v-if="tags?.length">
    <li
      v-for="tag in tags"
      :key="tag"
    >
      <span>{{ tag }}</span>
    </li>
  </ul>
</template>
