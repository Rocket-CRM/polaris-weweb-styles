<template>
  <div
    class="polaris-progress-bar-wrap"
    :class="{ 'polaris-progress-bar-wrap--small': props?.size === 'small' }"
    role="progressbar"
    :aria-valuenow="clampedProgress"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="polaris-progress-bar">
      <div class="polaris-progress-bar__fill" :style="{ width: `${clampedProgress}%` }" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  progress: { type: Number, default: 0 },
  size: { type: String, default: 'default' },
})

const clampedProgress = computed(() =>
  Math.min(Math.max(props?.progress || 0, 0), 100)
)
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-progress-bar-wrap {
  @include polaris-tokens;
}

.polaris-progress-bar {
  @include polaris-progress-bar;
}

.polaris-progress-bar__fill {
  @include polaris-progress-bar-fill;
  transition: width var(--p-motion-duration-200) var(--p-motion-ease);
}

.polaris-progress-bar-wrap--small .polaris-progress-bar {
  @include polaris-progress-bar-small;
}
</style>
