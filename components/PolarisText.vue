<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'bodyMd' },
  color: { type: String, default: 'default' },
})

const tag = computed(() => {
  const v = props?.variant || 'bodyMd'
  return v.startsWith('body') ? 'p' : 'span'
})

const classes = computed(() => [
  'polaris-text',
  `polaris-text--${props?.variant || 'bodyMd'}`,
  {
    'polaris-text--subdued': props?.color === 'subdued',
    'polaris-text--critical': props?.color === 'critical',
    'polaris-text--success': props?.color === 'success',
  },
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-text {
  @include polaris-tokens;
  margin: 0;

  &--headingXl {
    @include polaris-text-heading-xl;
  }

  &--headingLg {
    @include polaris-text-heading-lg;
  }

  &--headingMd {
    @include polaris-text-heading-md;
  }

  &--headingSm {
    @include polaris-text-heading-sm;
  }

  &--bodyMd {
    @include polaris-text-body;
  }

  &--bodySm {
    @include polaris-text-body;
    font-size: var(--p-font-size-300);
    line-height: var(--p-font-line-height-300);
  }

  &--subdued {
    color: var(--p-color-text-secondary);
  }

  &--critical {
    color: var(--p-color-text-critical);
  }

  &--success {
    color: var(--p-color-text-success);
  }
}
</style>
