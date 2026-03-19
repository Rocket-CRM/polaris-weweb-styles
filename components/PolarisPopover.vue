<template>
  <span class="polaris-popover-wrap">
    <span @click="$emit('toggle')">
      <slot name="activator" />
    </span>
    <transition name="polaris-popover-fade">
      <div
        v-if="props?.active"
        class="polaris-popover"
        :class="{ 'polaris-popover--full-width': props?.fullWidth }"
      >
        <div class="polaris-popover__content">
          <slot />
        </div>
      </div>
    </transition>
  </span>
</template>

<script setup>
const props = defineProps({
  active: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
  preferredAlignment: { type: String, default: 'left' },
})

defineEmits(['toggle', 'close'])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-popover-wrap {
  @include polaris-tokens;
  position: relative;
  display: inline-block;
}

.polaris-popover {
  @include polaris-popover;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 400;

  &--full-width {
    width: 100%;
    min-width: 100%;
  }

  &__content {
    @include polaris-popover-content;
  }
}

.polaris-popover-fade-enter-active,
.polaris-popover-fade-leave-active {
  transition: opacity var(--p-motion-duration-150) var(--p-motion-ease);
}

.polaris-popover-fade-enter-from,
.polaris-popover-fade-leave-to {
  opacity: 0;
}
</style>
