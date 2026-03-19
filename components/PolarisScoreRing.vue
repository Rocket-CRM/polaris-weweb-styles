<template>
  <div class="polaris-score-ring" :style="ringStyle">
    <v-chart
      :option="gaugeOption"
      :theme="themeName"
      :autoresize="true"
      class="polaris-score-ring__chart"
    />
    <div v-if="label" class="polaris-score-ring__label">{{ label }}</div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import VChart from 'vue-echarts'
import { registerPolarisTheme, THEME_NAME } from '../themes/echarts-polaris.js'

const props = defineProps({
  value: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  size: { type: [String, Number], default: 120 },
  color: { type: String, default: '' },
  label: { type: String, default: '' },
  strokeWidth: { type: Number, default: 10 },
  format: { type: String, default: '{value}%' },
})

const themeName = THEME_NAME

onMounted(() => { registerPolarisTheme() })

const ringStyle = computed(() => {
  const s = typeof props.size === 'number' ? `${props.size}px` : props.size
  return { width: s, height: s }
})

const resolvedColor = computed(() => {
  if (props.color) return props.color
  const pct = (props.value / props.max) * 100
  if (pct >= 75) return '#22C55E'
  if (pct >= 50) return '#EAB308'
  if (pct >= 25) return '#F97316'
  return '#d82c0d'
})

const gaugeOption = computed(() => ({
  series: [{
    type: 'gauge',
    startAngle: 90,
    endAngle: -270,
    radius: '90%',
    min: 0,
    max: props.max,
    progress: {
      show: true,
      width: props.strokeWidth,
      roundCap: true,
      itemStyle: { color: resolvedColor.value },
    },
    pointer: { show: false },
    axisLine: {
      lineStyle: {
        width: props.strokeWidth,
        color: [[1, '#EBEDEF']],
      },
    },
    axisTick: { show: false },
    splitLine: { show: false },
    axisLabel: { show: false },
    title: { show: false },
    detail: {
      valueAnimation: true,
      fontSize: Math.max(14, parseInt(String(props.size)) / 5),
      fontWeight: 700,
      fontFamily: "'Inter', sans-serif",
      color: '#202223',
      offsetCenter: [0, 0],
      formatter: props.format,
    },
    data: [{ value: props.value }],
  }],
}))
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-score-ring {
  @include polaris-tokens;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &__chart {
    width: 100%;
    height: 100%;
  }

  &__label {
    font-size: var(--p-font-size-275);
    color: var(--p-color-text-secondary);
    text-align: center;
    margin-top: calc(-1 * var(--p-space-100));
  }
}
</style>
