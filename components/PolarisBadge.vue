<template>
  <span :class="classes">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'default' },
})

const classes = computed(() => [
  'polaris-badge',
  `polaris-badge--${props?.variant || 'default'}`,
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-badge {
  @include polaris-tokens;

  &--default {
    @include polaris-badge-default;
  }

  &--info {
    @include polaris-badge-info;
  }

  &--success {
    @include polaris-badge-success;
  }

  &--warning {
    @include polaris-badge-warning;
  }

  &--critical {
    @include polaris-badge-critical;
  }

  &--attention {
    @include polaris-badge-warning;
  }
}
</style>
