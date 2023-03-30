<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const bp = useBreakpoints(breakpointsTailwind);

const size = computed(() =>
  bp['2xl'].value
    ? '2xl'
    : bp.xl.value
    ? 'xl'
    : bp.lg.value
    ? 'lg'
    : bp.md.value
    ? 'md'
    : bp.sm.value
    ? 'sm'
    : 'xs'
);
</script>

<template>
  <div
    class="pointer-events-none fixed bottom-0 right-0 z-[999] rounded-tl-lg bg-gray-500 px-4 py-2 font-mono text-white"
  >
    {{ size }}
  </div>
</template>
