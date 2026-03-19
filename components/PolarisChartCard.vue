<template>
  <div class="polaris-chart-card">
    <div class="polaris-chart-card__header">
      <div class="polaris-chart-card__title-area">
        <h3 class="polaris-chart-card__title">{{ title }}</h3>
        <span v-if="subtitle" class="polaris-chart-card__subtitle">{{ subtitle }}</span>
      </div>
      <div v-if="$slots.actions" class="polaris-chart-card__actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="metric || $slots.metric" class="polaris-chart-card__metric">
      <slot name="metric">
        <span v-if="metricPrefix" class="polaris-chart-card__metric-prefix">{{ metricPrefix }}</span>
        <span class="polaris-chart-card__metric-value">{{ metric }}</span>
        <span v-if="metricSuffix" class="polaris-chart-card__metric-suffix">{{ metricSuffix }}</span>
      </slot>
    </div>
    <div v-if="$slots['metric-secondary']" class="polaris-chart-card__metric-secondary">
      <slot name="metric-secondary" />
    </div>
    <div class="polaris-chart-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="polaris-chart-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  metric: { type: [String, Number], default: '' },
  metricPrefix: { type: String, default: '' },
  metricSuffix: { type: String, default: '' },
})
</script>

<style lang="scss" scoped>
@import 'polaris-weweb-styles';

.polaris-chart-card {
  @include polaris-tokens;
  @include polaris-card;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--p-space-200);
    padding: var(--p-space-400) var(--p-space-400) 0;
  }

  &__title-area {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-size: var(--p-font-size-325);
    font-weight: var(--p-font-weight-semibold);
    color: var(--p-color-text-secondary);
    margin: 0;
    line-height: var(--p-font-line-height-400);
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  &__subtitle {
    font-size: var(--p-font-size-275);
    color: var(--p-color-text-secondary);
    margin-top: 2px;
    display: block;
  }

  &__actions {
    flex-shrink: 0;
    display: flex;
    gap: var(--p-space-100);
  }

  &__metric {
    padding: var(--p-space-100) var(--p-space-400) 0;
    display: flex;
    align-items: baseline;
    gap: 2px;
  }

  &__metric-value {
    font-size: var(--p-font-size-700);
    font-weight: var(--p-font-weight-bold);
    color: var(--p-color-text);
    line-height: 1.1;
  }

  &__metric-prefix,
  &__metric-suffix {
    font-size: var(--p-font-size-400);
    font-weight: var(--p-font-weight-medium);
    color: var(--p-color-text-secondary);
  }

  &__metric-secondary {
    padding: var(--p-space-100) var(--p-space-400) 0;
    font-size: var(--p-font-size-300);
    color: var(--p-color-text-secondary);
    display: flex;
    align-items: center;
    gap: var(--p-space-200);
    flex-wrap: wrap;
  }

  &__body {
    flex: 1;
    padding: var(--p-space-300) var(--p-space-400) var(--p-space-400);
  }

  &__footer {
    padding: 0 var(--p-space-400) var(--p-space-400);
    display: flex;
    gap: var(--p-space-200);
  }
}
</style>
