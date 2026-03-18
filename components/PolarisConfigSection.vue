<template>
  <div class="polaris-config-section">
    <button
      class="polaris-config-section__header"
      :class="{ 'polaris-config-section__header--collapsible': props?.collapsible }"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span v-if="props?.icon" class="polaris-config-section__icon" v-html="props?.icon" />
      <div class="polaris-config-section__text">
        <span v-if="props?.title" class="polaris-config-section__title">{{ props?.title }}</span>
        <span v-if="props?.subtitle" class="polaris-config-section__subtitle">{{ props?.subtitle }}</span>
      </div>
      <svg
        v-if="props?.collapsible"
        class="polaris-config-section__chevron"
        :class="{ 'polaris-config-section__chevron--open': isOpen }"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z" fill="currentColor" />
      </svg>
    </button>
    <div v-show="isOpen" class="polaris-config-section__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  icon: { type: String, default: '' },
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  collapsible: { type: Boolean, default: false },
  defaultOpen: { type: Boolean, default: true },
})

const isOpen = ref(props?.defaultOpen !== false)

function toggle() {
  if (props?.collapsible) {
    isOpen.value = !isOpen.value
  }
}
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-config-section {
  @include polaris-tokens;
  border-top: 1px solid var(--p-color-border);

  &__header {
    display: flex;
    align-items: center;
    gap: var(--p-space-300);
    width: 100%;
    padding: var(--p-space-400);
    background: none;
    border: none;
    text-align: left;
    font-family: var(--p-font-family-sans);
    color: var(--p-color-text);

    &--collapsible {
      cursor: pointer;

      &:hover {
        background: var(--p-color-bg-surface-hover);
      }
    }
  }

  &__icon {
    @include polaris-icon;
    flex-shrink: 0;
  }

  &__text {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--p-space-050);
  }

  &__title {
    @include polaris-text-heading-sm;
  }

  &__subtitle {
    @include polaris-text-body-subdued;
    font-size: var(--p-font-size-300);
  }

  &__chevron {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    color: var(--p-color-icon);
    transition: transform var(--p-motion-duration-150) var(--p-motion-ease);

    &--open {
      transform: rotate(180deg);
    }
  }

  &__body {
    padding: 0 var(--p-space-400) var(--p-space-400);
  }
}
</style>
