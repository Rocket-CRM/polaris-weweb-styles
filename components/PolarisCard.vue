<template>
  <div class="polaris-card">
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-card {
  @include polaris-tokens;
  @include polaris-card;
}
</style>
