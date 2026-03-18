<template>
  <div class="polaris-select-field" :class="{ 'polaris-select-field--error': props?.error }">
    <label
      v-if="props?.label"
      :for="selectId"
      class="polaris-select-field__label"
      :class="{ 'polaris-select-field__label--hidden': props?.labelHidden }"
    >
      {{ props?.label }}
    </label>
    <select
      :id="selectId"
      class="polaris-select-field__select"
      :value="props?.modelValue"
      :disabled="props?.disabled"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="props?.placeholder" value="" disabled>{{ props?.placeholder }}</option>
      <option
        v-for="opt in normalizedOptions"
        :key="opt?.value"
        :value="opt?.value"
      >
        {{ opt?.label }}
      </option>
    </select>
    <p v-if="props?.error" class="polaris-select-field__error">{{ props?.error }}</p>
    <p v-else-if="props?.helpText" class="polaris-select-field__help">{{ props?.helpText }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, default: '' },
  modelValue: { type: String, default: '' },
  options: { type: Array, default: () => [] },
  placeholder: { type: String, default: '' },
  error: { type: String, default: '' },
  helpText: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  labelHidden: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const selectId = computed(() => `polaris-sel-${Math.random().toString(36).slice(2, 9)}`)

const normalizedOptions = computed(() =>
  (props?.options || []).map(opt =>
    typeof opt === 'string' ? { value: opt, label: opt } : opt
  )
)
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-select-field {
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

  &__select {
    @include polaris-select;
  }

  &--error &__select {
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
