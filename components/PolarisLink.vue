<template>
  <a
    :class="classes"
    :href="props?.url || '#'"
    :target="props?.external ? '_blank' : undefined"
    :rel="props?.external ? 'noopener noreferrer' : undefined"
    @click="$emit('click', $event)"
  >
    <slot />
    <span v-if="props?.external" class="polaris-link__external-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" width="12" height="12" fill="currentColor">
        <path d="M14 13v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1V4H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-1h-2z"/>
        <path d="M10 3h7v7h-2V6.414l-5.293 5.293-1.414-1.414L13.586 5H10V3z"/>
      </svg>
    </span>
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: { type: String, default: '' },
  external: { type: Boolean, default: false },
  monochrome: { type: Boolean, default: false },
})

defineEmits(['click'])

const classes = computed(() => [
  'polaris-link',
  { 'polaris-link--monochrome': props?.monochrome },
])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-link {
  @include polaris-tokens;
  @include polaris-link;

  &--monochrome {
    @include polaris-link-monochrome;
  }

  &__external-icon {
    display: inline-flex;
    margin-left: var(--p-space-050);
    vertical-align: middle;
  }
}
</style>
