<script setup lang="ts">
const props = defineProps({ speed: { type: Number, default: 20 }, reverse: Boolean, pause: Boolean });

const isVisible = ref(false);
const wrapperRef = ref<HTMLElement | null>(null);
const marqueeRef = ref<HTMLElement | null>(null);

const { width: wrapperWidth } = useElementBounding(wrapperRef);
const { width: marqueeWidth } = useElementBounding(marqueeRef);

const duration = computed(
  () =>
    `${
      marqueeWidth.value < wrapperWidth.value
        ? wrapperWidth.value / props.speed
        : marqueeWidth.value / props.speed
    }s`
);

useIntersectionObserver(wrapperRef, ([{ isIntersecting }]) => (isVisible.value = isIntersecting));
</script>

<template>
  <div ref="wrapperRef" class="marquee__wrapper flex select-none overflow-hidden">
    <div
      ref="marqueeRef"
      :class="['marquee__content', !isVisible || (pause && 'pause'), reverse && 'reverse']"
    >
      <slot />
    </div>
    <div
      aria-hidden="true"
      :class="['marquee__content', !isVisible || (pause && 'pause'), reverse && 'reverse']"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped>
.marquee__content {
  @apply min-w-full shrink-0;
}

.marquee__content {
  animation: scroll v-bind(duration) linear infinite;
}

.marquee__content.reverse {
  animation-direction: reverse;
}

.marquee__content.pause {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
}
</style>
