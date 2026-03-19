<template>
  <div class="polaris-date-range-picker">
    <div class="polaris-date-range-picker__presets">
      <button
        v-for="p in allPresets"
        :key="p.value"
        class="polaris-date-range-picker__preset"
        :class="{ 'polaris-date-range-picker__preset--active': modelValue === p.value }"
        @click="selectPreset(p.value)"
      >
        {{ p.label }}
      </button>
    </div>
    <div v-if="modelValue === 'custom'" class="polaris-date-range-picker__custom">
      <input
        type="date"
        class="polaris-date-range-picker__input"
        :value="customFrom"
        @input="$emit('update:customFrom', $event.target.value)"
      />
      <span class="polaris-date-range-picker__sep">&ndash;</span>
      <input
        type="date"
        class="polaris-date-range-picker__input"
        :value="customTo"
        @input="$emit('update:customTo', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: { type: String, default: '30d' },
  customFrom: { type: String, default: '' },
  customTo: { type: String, default: '' },
  showCustom: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue', 'update:customFrom', 'update:customTo', 'change'])

const allPresets = computed(() => {
  const base = [
    { value: '7d', label: '7d' },
    { value: '30d', label: '30d' },
    { value: '90d', label: '90d' },
    { value: '6m', label: '6m' },
    { value: '1y', label: '1y' },
  ]
  if (props.showCustom) base.push({ value: 'custom', label: 'Custom' })
  return base
})

const selectPreset = (value) => {
  emit('update:modelValue', value)
  emit('change', value)
}
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-date-range-picker {
  @include polaris-tokens;
  display: flex;
  align-items: center;
  gap: var(--p-space-200);

  &__presets {
    display: flex;
    background: var(--p-color-bg-surface-secondary);
    border-radius: var(--p-border-radius-200);
    padding: 2px;
  }

  &__preset {
    padding: var(--p-space-100) var(--p-space-200);
    border: none;
    background: transparent;
    border-radius: var(--p-border-radius-150);
    font-size: var(--p-font-size-275);
    font-weight: var(--p-font-weight-medium);
    font-family: var(--p-font-family-sans);
    color: var(--p-color-text-secondary);
    cursor: pointer;
    transition: all var(--p-motion-duration-150) var(--p-motion-ease);
    white-space: nowrap;

    &:hover {
      color: var(--p-color-text);
      background: var(--p-color-bg-surface-hover);
    }

    &--active {
      color: var(--p-color-text);
      background: var(--p-color-bg-surface);
      box-shadow: var(--p-shadow-100);
    }
  }

  &__custom {
    display: flex;
    align-items: center;
    gap: var(--p-space-100);
  }

  &__input {
    padding: var(--p-space-100) var(--p-space-200);
    border: var(--p-border-width-025) solid var(--p-color-border);
    border-radius: var(--p-border-radius-150);
    font-size: var(--p-font-size-275);
    font-family: var(--p-font-family-sans);
    color: var(--p-color-text);
    background: var(--p-color-bg-surface);

    &:focus {
      outline: none;
      border-color: var(--p-color-border-focus);
    }
  }

  &__sep {
    color: var(--p-color-text-secondary);
    font-size: var(--p-font-size-300);
  }
}
</style>
