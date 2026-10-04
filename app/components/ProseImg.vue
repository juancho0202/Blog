<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})

const attrs = useAttrs()
const resolveContentAssetPath = useContentAssetPath()

const resolvedSrc = computed(() => resolveContentAssetPath(props.src))
</script>

<template>
  <img
    v-bind="attrs"
    :src="resolvedSrc"
    :alt="alt"
  >
</template>
