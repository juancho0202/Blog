<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
  caption?: string
}>()

const resolveContentAssetPath = useContentAssetPath()
const resolvedSrc = computed(() => resolveContentAssetPath(props.src))
</script>

<template>
  <figure class="not-prose my-8 overflow-hidden rounded-2xl border border-border bg-surface-muted">
    <img
      :src="resolvedSrc"
      :alt="props.alt || ''"
      loading="lazy"
      class="m-0 w-full"
    >
    <figcaption
      v-if="props.caption"
      class="border-t border-border px-4 py-3 text-sm text-foreground-muted"
    >
      {{ props.caption }}
    </figcaption>
  </figure>
</template>
