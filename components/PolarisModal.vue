<template>
  <transition name="polaris-modal-fade">
    <div v-if="props?.open" class="polaris-modal-backdrop" @click.self="$emit('close')">
      <div
        class="polaris-modal"
        :class="{ 'polaris-modal--large': props?.large }"
        role="dialog"
        :aria-label="props?.title"
      >
        <div class="polaris-modal__header">
          <span class="polaris-modal__title">{{ props?.title }}</span>
          <button class="polaris-modal__close" aria-label="Close" @click="$emit('close')">
            <svg viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
              <path d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"/>
            </svg>
          </button>
        </div>
        <div class="polaris-modal__content">
          <slot />
        </div>
        <div v-if="$slots.footer" class="polaris-modal__footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: '' },
  large: { type: Boolean, default: false },
})

defineEmits(['close'])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-modal-backdrop {
  @include polaris-tokens;
  @include polaris-modal-backdrop;
}

.polaris-modal {
  @include polaris-modal;

  &--large {
    max-width: 720px;
  }

  &__header {
    @include polaris-modal-header;
  }

  &__title {
    font-size: var(--p-font-size-400);
    font-weight: var(--p-font-weight-semibold);
    color: var(--p-color-text);
  }

  &__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: var(--p-space-100);
    border-radius: var(--p-border-radius-200);
    color: var(--p-color-icon-secondary);

    &:hover {
      background: var(--p-color-bg-surface-hover);
      color: var(--p-color-icon);
    }
  }

  &__content {
    @include polaris-modal-content;
  }

  &__footer {
    @include polaris-modal-footer;
  }
}

.polaris-modal-fade-enter-active,
.polaris-modal-fade-leave-active {
  transition: opacity var(--p-motion-duration-200) var(--p-motion-ease);
}

.polaris-modal-fade-enter-from,
.polaris-modal-fade-leave-to {
  opacity: 0;
}
</style>
