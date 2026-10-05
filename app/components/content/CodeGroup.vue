<script setup lang="ts">
import { nextTick } from 'vue'

const wrapper = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const labels = ref<string[]>([])
let mutationObserver: MutationObserver | null = null

function syncBlocks() {
  const blocks = Array.from(wrapper.value?.querySelectorAll<HTMLElement>('figure[data-code-block="true"]') ?? [])

  if (blocks.length === 0) {
    labels.value = []
    return
  }

  labels.value = blocks.map((block, index) => {
    const label = block.dataset.codeLabel?.trim()
    return label && label.length > 0 ? label : `Code ${index + 1}`
  })

  if (activeIndex.value >= blocks.length) {
    activeIndex.value = 0
  }

  blocks.forEach((block, index) => {
    const isActive = index === activeIndex.value
    block.classList.toggle('hidden', !isActive)
  })
}

onMounted(async () => {
  await nextTick()
  syncBlocks()

  if (!wrapper.value) {
    return
  }

  mutationObserver = new MutationObserver(() => {
    syncBlocks()
  })

  mutationObserver.observe(wrapper.value, { childList: true, subtree: true })
})

watch(activeIndex, () => {
  syncBlocks()
})

onBeforeUnmount(() => {
  mutationObserver?.disconnect()
  mutationObserver = null
})
</script>

<template>
  <div class="not-prose my-8 overflow-hidden rounded-2xl border border-border bg-slate-950 shadow-sm">
    <div
      v-if="labels.length > 0"
      class="flex flex-wrap gap-1 border-b border-slate-800 bg-slate-900/95 p-2"
    >
      <button
        v-for="(label, index) in labels"
        :key="`${label}-${index}`"
        type="button"
        class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors"
        :class="index === activeIndex ? 'bg-slate-700 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'"
        @click="activeIndex = index"
      >
        {{ label }}
      </button>
    </div>
    <div ref="wrapper">
      <slot />
    </div>
  </div>
</template>
