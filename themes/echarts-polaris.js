import { use, registerTheme } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, LineChart, PieChart, GaugeChart, FunnelChart } from 'echarts/charts'
import {
  TitleComponent, TooltipComponent, LegendComponent,
  GridComponent, DataZoomComponent, MarkLineComponent,
  MarkPointComponent, ToolboxComponent,
} from 'echarts/components'

use([
  CanvasRenderer,
  BarChart, LineChart, PieChart, GaugeChart, FunnelChart,
  TitleComponent, TooltipComponent, LegendComponent,
  GridComponent, DataZoomComponent, MarkLineComponent,
  MarkPointComponent, ToolboxComponent,
])

export const POLARIS_CHART_COLORS = [
  '#3B82F6', '#22C55E', '#F97316', '#8B5CF6',
  '#EAB308', '#EC4899', '#06B6D4', '#14B8A6',
  '#F59E0B', '#6366F1', '#10B981', '#9CA3AF',
]

export const POLARIS_SEMANTIC_COLORS = {
  purchase: '#22C55E',
  spend: '#22C55E',
  pointsEarn: '#3B82F6',
  pointsBurn: '#F97316',
  redemption: '#8B5CF6',
  mission: '#EAB308',
  referral: '#EC4899',
  campaign: '#06B6D4',
  activity: '#14B8A6',
  tierChange: '#F59E0B',
  package: '#6366F1',
  checkin: '#10B981',
  manual: '#9CA3AF',
}

export const THEME_NAME = 'polaris'

let registered = false

export function registerPolarisTheme() {
  if (registered) return
  registered = true

  registerTheme(THEME_NAME, {
    color: POLARIS_CHART_COLORS,
    backgroundColor: 'transparent',
    textStyle: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
      color: '#6d7175',
      fontSize: 12,
    },
    title: {
      textStyle: {
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontWeight: 600,
        color: '#202223',
        fontSize: 14,
      },
      subtextStyle: {
        color: '#6d7175',
        fontSize: 12,
      },
    },
    line: {
      itemStyle: { borderWidth: 2 },
      lineStyle: { width: 2 },
      symbolSize: 6,
      symbol: 'circle',
      smooth: false,
    },
    bar: {
      itemStyle: {
        barBorderRadius: [4, 4, 0, 0],
      },
    },
    pie: {
      itemStyle: {
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    },
    gauge: {
      axisLine: {
        lineStyle: { width: 12, color: [[1, '#EBEDEF']] },
      },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: { show: false },
      pointer: { show: false },
      title: { show: false },
      detail: {
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: 28,
        color: '#202223',
        offsetCenter: [0, 0],
      },
    },
    categoryAxis: {
      axisLine: { show: true, lineStyle: { color: '#EBEDEF' } },
      axisTick: { show: false },
      axisLabel: {
        color: '#6d7175',
        fontSize: 11,
        fontFamily: "'Inter', sans-serif",
      },
      splitLine: { show: false },
    },
    valueAxis: {
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#6d7175',
        fontSize: 11,
        fontFamily: "'Inter', sans-serif",
      },
      splitLine: {
        show: true,
        lineStyle: { color: '#EBEDEF', type: 'dashed' },
      },
    },
    legend: {
      textStyle: {
        color: '#6d7175',
        fontSize: 12,
        fontFamily: "'Inter', sans-serif",
      },
      icon: 'circle',
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 16,
    },
    tooltip: {
      backgroundColor: '#ffffff',
      borderColor: '#EBEDEF',
      borderWidth: 1,
      textStyle: {
        color: '#202223',
        fontSize: 12,
        fontFamily: "'Inter', sans-serif",
      },
      extraCssText: 'box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.07); border-radius: 8px; padding: 8px 12px;',
    },
    grid: {
      left: 0,
      right: 0,
      top: 8,
      bottom: 0,
      containLabel: true,
    },
  })
}
