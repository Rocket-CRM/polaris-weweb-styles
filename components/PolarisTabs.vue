<template>
  <div class="polaris-tabs-wrap">
    <div class="polaris-tabs" role="tablist">
      <button
        v-for="(tab, index) in (props?.tabs || [])"
        :key="tab?.id || index"
        class="polaris-tab"
        :class="{ 'polaris-tab--selected': (props?.selected ?? 0) === index }"
        role="tab"
        :aria-selected="(props?.selected ?? 0) === index"
        @click="$emit('select', index)"
      >
        {{ tab?.content || tab?.label || '' }}
      </button>
    </div>
    <div class="polaris-tab-panel" role="tabpanel">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: { type: Array, default: () => [] },
  selected: { type: Number, default: 0 },
})

defineEmits(['select'])
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-tabs-wrap {
  @include polaris-tokens;
}

.polaris-tabs {
  @include polaris-tabs;
}

.polaris-tab {
  @include polaris-tab;

  &--selected {
    @include polaris-tab-selected;
  }
}

.polaris-tab-panel {
  @include polaris-tab-panel;
}
</style>
