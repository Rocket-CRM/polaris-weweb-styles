<template>
  <label class="polaris-checkbox" :class="{ 'polaris-checkbox--disabled': props?.disabled }">
    <input
      type="checkbox"
      class="polaris-checkbox__input"
      :checked="props?.modelValue"
      :disabled="props?.disabled"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span v-if="props?.label" class="polaris-checkbox__label">{{ props?.label }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: '' },
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-checkbox {
  @include polaris-tokens;
  @include polaris-checkbox-wrapper;

  &--disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }

  &__input {
    @include polaris-checkbox;
  }

  &__label {
    @include polaris-label;
    cursor: inherit;
  }
}
</style>
