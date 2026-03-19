<template>
  <div
    class="polaris-skeleton-display-text"
    :class="`polaris-skeleton-display-text--${props?.size || 'medium'}`"
  />
</template>

<script setup>
const props = defineProps({
  size: { type: String, default: 'medium' },
})
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-skeleton-display-text {
  @include polaris-tokens;
  @include polaris-skeleton-display-text;

  &--small {
    height: 24px;
    max-width: 120px;
  }

  &--medium {
    height: 28px;
    max-width: 160px;
  }

  &--large {
    height: 32px;
    max-width: 200px;
  }

  &--extraLarge {
    height: 40px;
    max-width: 260px;
  }
}
</style>
