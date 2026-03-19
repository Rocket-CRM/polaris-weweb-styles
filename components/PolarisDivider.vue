<template>
  <hr :class="classes" />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  borderColor: { type: String, default: 'border' },
})

const classes = computed(() => [
  'polaris-divider',
  { 'polaris-divider--subdued': props?.borderColor === 'border-secondary' },
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-divider {
  @include polaris-tokens;
  @include polaris-divider;

  &--subdued {
    border-color: var(--p-color-border-secondary);
  }
}
</style>
