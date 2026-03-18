<template>
  <div class="polaris-button-group" :class="{ 'polaris-button-group--segmented': segmented }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PolarisButtonGroup',
  props: {
    segmented: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-button-group {
  @include polaris-tokens;
  @include polaris-button-group;

  &--segmented {
    @include polaris-button-group-segmented;
  }
}
</style>
