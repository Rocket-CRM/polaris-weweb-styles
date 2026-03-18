<template>
  <button
    :class="classes"
    :disabled="props?.disabled || props?.loading"
    @click="$emit('click', $event)"
  >
    <span v-if="props?.loading" class="polaris-button__spinner" />
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'default' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  fullWidth: { type: Boolean, default: false },
  iconOnly: { type: Boolean, default: false },
})

defineEmits(['click'])

const classes = computed(() => [
  'polaris-button',
  `polaris-button--${props?.variant || 'default'}`,
  {
    'polaris-button--slim': props?.size === 'slim',
    'polaris-button--full-width': props?.fullWidth,
    'polaris-button--icon-only': props?.iconOnly,
    'polaris-button--loading': props?.loading,
  },
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-button {
  @include polaris-tokens;

  &--default {
    @include polaris-button-default;
  }

  &--primary {
    @include polaris-button-primary;
  }

  &--plain {
    @include polaris-button-plain;
  }

  &--critical {
    @include polaris-button-critical;
  }

  &--outline {
    @include polaris-button-outline;
  }

  &--slim {
    @include polaris-button-slim;
  }

  &--full-width {
    @include polaris-button-full-width;
  }

  &--icon-only {
    @include polaris-button-icon-only;
  }

  &--loading {
    color: transparent;
    pointer-events: none;
    position: relative;
  }

  &__spinner {
    @include polaris-spinner-small;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
