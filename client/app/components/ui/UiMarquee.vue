<script setup lang="ts">
// Seamless infinite horizontal marquee: the slot is rendered twice and both copies slide one copy-width left.
// `speed` is in px/s.
const props = defineProps<{ speed: number }>();

const trackEl = useTemplateRef('trackEl');
const { width } = useElementSize(trackEl);
const duration = computed(() => `${width.value / props.speed}s`);
</script>

<template>
  <div class="flex overflow-hidden select-none">
    <div ref="trackEl" class="marquee-track min-w-full shrink-0">
      <slot />
    </div>
    <div class="marquee-track min-w-full shrink-0" aria-hidden="true">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.marquee-track {
  animation: marquee v-bind(duration) linear infinite;
}

@keyframes marquee {
  to {
    transform: translateX(-100%);
  }
}
</style>
