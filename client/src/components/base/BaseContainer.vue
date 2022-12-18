<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  noYPadding: Boolean,
  noXPadding: Boolean,
  size: { type: String as PropType<'full' | 'sm' | 'xs'>, default: 'full' },
});
</script>

<template>
  <div
    class="mx-auto w-full"
    :class="[
      !noYPadding && 'py-6 lg:py-32',
      !noXPadding && 'px-4 sm:px-6 lg:px-8',
      size === 'full' ? 'max-w-6xl' : size === 'sm' ? 'max-w-3xl' : 'max-w-xl',
    ]"
  >
    <slot />
  </div>
</template>
