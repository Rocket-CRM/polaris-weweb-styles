<template>
  <div ref="rootRef" class="polaris-chart" :style="rootStyle">
    <v-chart
      v-if="!loading"
      ref="chartRef"
      :option="option"
      :theme="themeName"
      :autoresize="true"
      class="polaris-chart__canvas"
    />
    <div v-else class="polaris-chart__skeleton">
      <div v-for="i in 4" :key="i" class="polaris-chart__skeleton-line" :style="{ width: `${50 + i * 12}%` }" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import VChart from 'vue-echarts'
import { registerPolarisTheme, THEME_NAME } from '../themes/echarts-polaris.js'

const props = defineProps({
  option: { type: Object, default: () => ({}) },
  height: { type: String, default: '200px' },
  loading: { type: Boolean, default: false },
})

const rootRef = ref(null)
const chartRef = ref(null)
const themeName = THEME_NAME

const rootStyle = computed(() => ({ height: props.height }))

onMounted(() => {
  registerPolarisTheme()
})

defineExpose({
  getChart: () => chartRef.value,
})
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-chart {
  @include polaris-tokens;
  position: relative;
  width: 100%;

  &__canvas {
    width: 100%;
    height: 100%;
  }

  &__skeleton {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: var(--p-space-200) 0;
    height: 100%;
    justify-content: center;
  }

  &__skeleton-line {
    height: 14px;
    background: var(--p-color-bg-surface-secondary);
    border-radius: var(--p-border-radius-100);
    animation: polaris-chart-pulse 1.5s ease-in-out infinite;
  }

  @keyframes polaris-chart-pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
}
</style>
