<template>
  <div class="polaris-block-stack" :style="stackStyle">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  gap: { type: String, default: '400' },
})

const gapMap = {
  '0': '0',
  '025': 'var(--p-space-025)',
  '050': 'var(--p-space-050)',
  '100': 'var(--p-space-100)',
  '150': 'var(--p-space-150)',
  '200': 'var(--p-space-200)',
  '300': 'var(--p-space-300)',
  '400': 'var(--p-space-400)',
  '500': 'var(--p-space-500)',
  '600': 'var(--p-space-600)',
  '800': 'var(--p-space-800)',
  '1000': 'var(--p-space-1000)',
  '1200': 'var(--p-space-1200)',
}

const stackStyle = computed(() => ({
  gap: gapMap[props?.gap] || `var(--p-space-${props?.gap || '400'})`,
}))
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-block-stack {
  @include polaris-tokens;
  @include polaris-block-stack;
}
</style>
