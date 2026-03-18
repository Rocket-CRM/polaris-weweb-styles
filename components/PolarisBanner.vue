<template>
  <div :class="classes" role="status">
    <div class="polaris-banner__content">
      <p v-if="props?.title" class="polaris-banner__title">{{ props?.title }}</p>
      <div class="polaris-banner__body">
        <slot />
      </div>
      <div v-if="$slots.actions" class="polaris-banner__actions">
        <slot name="actions" />
      </div>
    </div>
    <button
      v-if="props?.dismissible"
      class="polaris-banner__dismiss"
      aria-label="Dismiss"
      @click="$emit('dismiss')"
    >
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z" fill="currentColor" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'info' },
  title: { type: String, default: '' },
  dismissible: { type: Boolean, default: false },
})

defineEmits(['dismiss'])

const classes = computed(() => [
  'polaris-banner',
  `polaris-banner--${props?.variant || 'info'}`,
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-banner {
  @include polaris-tokens;
  position: relative;

  &--info {
    @include polaris-banner-info;
  }

  &--success {
    @include polaris-banner-success;
  }

  &--warning {
    @include polaris-banner-warning;
  }

  &--critical {
    @include polaris-banner-critical;
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--p-space-200);
  }

  &__title {
    margin: 0;
    font-family: var(--p-font-family-sans);
    font-size: var(--p-font-size-350);
    font-weight: var(--p-font-weight-semibold);
    line-height: var(--p-font-line-height-400);
    color: var(--p-color-text);
  }

  &__body {
    font-family: var(--p-font-family-sans);
    font-size: var(--p-font-size-350);
    line-height: var(--p-font-line-height-400);
    color: var(--p-color-text);
  }

  &__actions {
    display: flex;
    gap: var(--p-space-200);
    margin-top: var(--p-space-100);
  }

  &__dismiss {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--p-color-icon);
    border-radius: var(--p-border-radius-100);

    &:hover {
      color: var(--p-color-icon-hover);
    }

    &:focus-visible {
      outline: 2px solid var(--p-color-focus-ring);
      outline-offset: 2px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
}
</style>
