<template>
  <span :class="classes" role="status">
    <span class="polaris-spinner__visual" />
    <span class="polaris-spinner__sr-only">{{ props?.label || 'Loading' }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: { type: String, default: 'default' },
  label: { type: String, default: 'Loading' },
})

const classes = computed(() => [
  'polaris-spinner',
  `polaris-spinner--${props?.size || 'default'}`,
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-spinner {
  @include polaris-tokens;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &__visual {
    @include polaris-spinner;
  }

  &--small &__visual {
    @include polaris-spinner-small;
  }

  &--large &__visual {
    @include polaris-spinner-large;
  }

  &__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
}
</style>
