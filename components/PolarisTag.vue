<template>
  <span class="polaris-tag" :class="{ 'polaris-tag--removable': props?.removable }">
    <slot />
    <button
      v-if="props?.removable"
      class="polaris-tag__remove"
      aria-label="Remove"
      @click.stop="$emit('remove')"
    >
      <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
        <path d="M11.414 10l4.293-4.293a1 1 0 0 0-1.414-1.414L10 8.586 5.707 4.293a1 1 0 0 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10z"/>
      </svg>
    </button>
  </span>
</template>

<script setup>
const props = defineProps({
  removable: { type: Boolean, default: false },
})

defineEmits(['remove'])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-tag {
  @include polaris-tokens;
  @include polaris-chip;

  &--removable {
    @include polaris-chip-removable;
  }

  &__remove {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border: none;
    background: transparent;
    cursor: pointer;
    color: inherit;
    border-radius: 50%;
    padding: 0;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
