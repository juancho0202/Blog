<script setup lang="ts">
const props = defineProps<{
  id?: string
}>()
</script>

<template>
  <h2
    :id="props.id"
    class="group"
  >
    <a
      v-if="props.id"
      :href="`#${props.id}`"
      class="flex items-start gap-2 no-underline"
    >
      <span class="min-w-0"><slot /></span>
      <span
        aria-hidden="true"
        class="opacity-0 transition-opacity text-brand group-hover:opacity-100 group-focus-within:opacity-100"
      >#</span>
    </a>
    <slot v-else />
  </h2>
</template>
