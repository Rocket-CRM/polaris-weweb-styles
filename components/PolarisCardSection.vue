<template>
  <div class="polaris-card-section">
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-card-section {
  @include polaris-tokens;
  @include polaris-card-section;
}
</style>
