<template>
  <div class="polaris-skeleton-body-text">
    <div
      v-for="n in (props?.lines || 3)"
      :key="n"
      class="polaris-skeleton-body-text__line"
      :class="{ 'polaris-skeleton-body-text__line--last': n === (props?.lines || 3) }"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  lines: { type: Number, default: 3 },
})
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-skeleton-body-text {
  @include polaris-tokens;
  display: flex;
  flex-direction: column;
  gap: var(--p-space-200);

  &__line {
    @include polaris-skeleton-body-text;
  }

  &__line--last {
    width: 60%;
  }
}
</style>
