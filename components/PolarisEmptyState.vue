<template>
  <div class="polaris-empty-state" :class="{ 'polaris-empty-state--compact': props?.compact }">
    <div v-if="props?.icon" class="polaris-empty-state__icon" v-html="props?.icon" />
    <h2 v-if="props?.heading" class="polaris-empty-state__heading">{{ props?.heading }}</h2>
    <div class="polaris-empty-state__content">
      <slot />
    </div>
    <div v-if="$slots.actions" class="polaris-empty-state__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: { type: String, default: '' },
  icon: { type: String, default: '' },
  compact: { type: Boolean, default: false },
})
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-empty-state {
  @include polaris-tokens;
  @include polaris-empty-state;

  &--compact {
    padding: var(--p-space-400) var(--p-space-300);
  }

  &__icon {
    @include polaris-empty-state-image;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--p-color-icon-secondary);
  }

  &__heading {
    @include polaris-empty-state-heading;
  }

  &__content {
    @include polaris-empty-state-content;
  }

  &__actions {
    display: flex;
    justify-content: center;
    gap: var(--p-space-200);
  }
}
</style>
