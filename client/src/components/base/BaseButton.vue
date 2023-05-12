<script setup lang="ts">
type ButtonVariantType = 'default' | 'white' | 'custom';
type ButtonSizeType = 'default' | 'custom';

defineProps({
  loading: Boolean,
  disabled: Boolean,
  as: { type: [String, Object], default: 'button' },
  size: { type: String as PropType<ButtonSizeType>, default: 'default' },
  variant: { type: String as PropType<ButtonVariantType>, default: 'default' },
});
</script>

<template>
  <component
    :is="as"
    :disabled="disabled || loading"
    :class="[
      'btn',
      loading && 'animate-pulse',
      size !== 'custom' && `btn__size-${size}`,
      variant !== 'custom' && `btn__variant-${variant}`,
    ]"
  >
    <div :class="['flex w-full items-center justify-center gap-x-2', loading && 'invisible']">
      <div
        v-if="$slots['left-icon']"
        :class="['pointer-events-none', size !== 'custom' && '-ml-1 [&>*]:h-4 [&>*]:w-4']"
      >
        <slot name="left-icon" />
      </div>

      <span class="inline-flex">
        <slot />
      </span>

      <div
        v-if="$slots['right-icon']"
        :class="['pointer-events-none', size !== 'custom' && '-mr-1 [&>*]:h-4 [&>*]:w-4']"
      >
        <slot name="right-icon" />
      </div>
    </div>

    <div v-if="loading" class="absolute inset-0 grid place-items-center">
      <Icon name="ph:circle-notch-bold" class="btn__loading-icon h-5 w-5 animate-spin" />
    </div>
  </component>
</template>

<style>
.btn {
  @apply relative inline-flex items-center border transition-colors duration-100 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:select-none;
}

.btn__variant-default {
  @apply rounded-xl border-white/10 text-white text-opacity-60 hover:bg-accent-600 hover:text-opacity-100 focus:ring-accent-400 focus:ring-offset-gray-900 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-opacity-60;
}

.btn__variant-white {
  @apply rounded-xl border-transparent bg-white text-gray-900 hover:bg-accent-600 hover:text-white focus:ring-accent-400 focus:ring-offset-gray-900 disabled:border-white/10 disabled:bg-transparent disabled:text-white/60 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-opacity-60;
}

.btn__size-default {
  @apply px-8 py-4 text-xl;
}
</style>
