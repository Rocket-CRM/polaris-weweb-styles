<template>
  <span
    class="polaris-tooltip-wrap"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
    @focusin="visible = true"
    @focusout="visible = false"
  >
    <slot />
    <transition name="polaris-tooltip-fade">
      <span
        v-if="visible && props?.content"
        class="polaris-tooltip"
        role="tooltip"
      >
        {{ props?.content }}
      </span>
    </transition>
  </span>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  content: { type: String, default: '' },
  preferredPosition: { type: String, default: 'above' },
})

const visible = ref(false)
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-tooltip-wrap {
  @include polaris-tokens;
  @include polaris-tooltip-trigger;
}

.polaris-tooltip {
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  background: var(--p-color-bg-surface-inverse, #303030);
  color: var(--p-color-text-inverse, #e3e3e3);
  padding: var(--p-space-100) var(--p-space-200);
  border-radius: var(--p-border-radius-200);
  font-size: var(--p-font-size-300);
  line-height: var(--p-font-line-height-400);
  font-weight: var(--p-font-weight-medium);
  white-space: nowrap;
  pointer-events: none;
  z-index: 516;
  box-shadow: var(--p-shadow-200);
}

.polaris-tooltip-fade-enter-active,
.polaris-tooltip-fade-leave-active {
  transition: opacity var(--p-motion-duration-100) var(--p-motion-ease);
}

.polaris-tooltip-fade-enter-from,
.polaris-tooltip-fade-leave-to {
  opacity: 0;
}
</style>
