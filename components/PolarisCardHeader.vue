<template>
  <div class="polaris-card-header">
    <div class="polaris-card-header__text">
      <h2 v-if="props?.title" class="polaris-card-header__title">{{ props?.title }}</h2>
      <p v-if="props?.description" class="polaris-card-header__description">{{ props?.description }}</p>
    </div>
    <div v-if="$slots.action" class="polaris-card-header__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: '' },
  description: { type: String, default: '' },
})
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-card-header {
  @include polaris-tokens;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--p-space-300);
  padding: var(--p-space-400);

  &__text {
    flex: 1;
    min-width: 0;
  }

  &__title {
    @include polaris-text-heading-md;
    margin: 0;
  }

  &__description {
    @include polaris-text-body-subdued;
    margin: var(--p-space-100) 0 0;
  }

  &__action {
    flex-shrink: 0;
  }
}
</style>
