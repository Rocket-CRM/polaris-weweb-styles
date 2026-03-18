<template>
  <div class="polaris-text-field" :class="{ 'polaris-text-field--error': props?.error }">
    <label
      v-if="props?.label"
      :for="inputId"
      class="polaris-text-field__label"
      :class="{ 'polaris-text-field__label--hidden': props?.labelHidden }"
    >
      {{ props?.label }}
      <span v-if="props?.required" class="polaris-text-field__required">*</span>
    </label>
    <input
      :id="inputId"
      class="polaris-text-field__input"
      :type="props?.type || 'text'"
      :value="props?.modelValue"
      :placeholder="props?.placeholder"
      :disabled="props?.disabled"
      :required="props?.required"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <p v-if="props?.error" class="polaris-text-field__error">{{ props?.error }}</p>
    <p v-else-if="props?.helpText" class="polaris-text-field__help">{{ props?.helpText }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  helpText: { type: String, default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'text' },
  labelHidden: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const inputId = computed(() => `polaris-tf-${Math.random().toString(36).slice(2, 9)}`)
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-text-field {
  @include polaris-tokens;
  display: flex;
  flex-direction: column;
  gap: var(--p-space-100);

  &__label {
    @include polaris-label;

    &--hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  }

  &__required {
    color: var(--p-color-text-critical);
  }

  &__input {
    @include polaris-input;
  }

  &--error &__input {
    border-color: var(--p-color-border-critical);

    &:focus {
      box-shadow: 0 0 0 1px var(--p-color-border-critical);
    }
  }

  &__error {
    @include polaris-error-text;
    margin: 0;
  }

  &__help {
    @include polaris-help-text;
    margin: 0;
  }
}
</style>
