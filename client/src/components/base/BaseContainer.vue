<script setup lang="ts">
const props = defineProps({
  noYPadding: Boolean,
  noXPadding: Boolean,
  size: { type: String as PropType<'default' | 'full' | 'sm' | 'xs'>, default: 'default' },
});

const styles = computed(() => {
  let sizingClasses = '';

  if (props.size === 'default') {
    sizingClasses = 'max-w-6xl';
    if (!props.noXPadding) sizingClasses += ' sm:px-6 lg:px-8 2xl:px-0';
  } else if (props.size === 'full') {
    if (!props.noXPadding) sizingClasses += ' sm:px-6 lg:px-8';
  } else if (props.size === 'sm') {
    sizingClasses = 'max-w-3xl';
    if (!props.noXPadding) sizingClasses += ' sm:px-6 lg:px-0';
  } else {
    sizingClasses = 'max-w-xl';
    if (!props.noXPadding) sizingClasses += ' sm:px-0';
  }

  return sizingClasses;
});
</script>

<template>
  <div class="mx-auto w-full" :class="[!noYPadding && 'py-24 lg:py-32', !noXPadding && 'px-4', styles]">
    <slot />
  </div>
</template>
