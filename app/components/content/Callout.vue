<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'info' | 'tip' | 'warning' | 'danger'
}>(), {
  type: 'info',
})

const styleByType = {
  info: {
    icon: 'lucide:info',
    classes: 'border-sky-300/70 bg-sky-50/70 text-sky-950 dark:border-sky-500/40 dark:bg-sky-950/35 dark:text-sky-100',
  },
  tip: {
    icon: 'lucide:lightbulb',
    classes: 'border-emerald-300/70 bg-emerald-50/70 text-emerald-950 dark:border-emerald-500/40 dark:bg-emerald-950/35 dark:text-emerald-100',
  },
  warning: {
    icon: 'lucide:triangle-alert',
    classes: 'border-amber-300/80 bg-amber-50/75 text-amber-950 dark:border-amber-500/45 dark:bg-amber-950/35 dark:text-amber-100',
  },
  danger: {
    icon: 'lucide:circle-alert',
    classes: 'border-rose-300/80 bg-rose-50/75 text-rose-950 dark:border-rose-500/45 dark:bg-rose-950/35 dark:text-rose-100',
  },
} as const

const currentStyle = computed(() => styleByType[props.type])
</script>

<template>
  <aside
    class="not-prose my-6 rounded-2xl border-l-4 p-4"
    :class="currentStyle.classes"
  >
    <div class="flex gap-3">
      <Icon
        :name="currentStyle.icon"
        class="mt-0.5 h-5 w-5 shrink-0"
      />
      <div class="text-sm leading-6 [&_code]:text-current [&_p]:m-0">
        <slot />
      </div>
    </div>
  </aside>
</template>
