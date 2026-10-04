<script setup lang="ts">
import { resolveContentAssetPath } from '../composables/content-asset-path.mjs'

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
const { app } = useRuntimeConfig()

const resolvedSrc = computed(() => resolveContentAssetPath(props.src, app.baseURL))
</script>

<template>
  <img
    v-bind="attrs"
    :src="resolvedSrc"
    :alt="alt"
  >
</template>
