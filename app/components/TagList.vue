<script setup lang="ts">
defineProps<{
  tags?: string[]
}>()
</script>

<template>
  <ul
    v-if="tags?.length"
    class="flex flex-wrap gap-2"
  >
    <li
      v-for="tag in tags"
      :key="tag"
      class="rounded-full border border-brand/20 bg-brand/5 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-brand"
    >
      <span>{{ tag }}</span>
    </li>
  </ul>
</template>
