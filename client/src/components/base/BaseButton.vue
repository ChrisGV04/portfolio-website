<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  iconLeft: String,
  iconRight: String,
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  size: { type: String as PropType<'regular' | 'dense' | 'lg'>, default: 'regular' },
});
</script>

<template>
  <button
    :disabled="disabled || loading"
    :class="[
      { 'animate-pulse': loading },
      size === 'lg' ? 'btn-lg' : size === 'regular' ? 'btn-regular' : 'btn-dense',
    ]"
    class="btn btn-rings relative inline-flex select-none items-center justify-center"
  >
    <div class="flex flex-grow items-center justify-center gap-2">
      <Icon class="pointer-events-none block shrink-0" :name="iconLeft" v-if="iconLeft && !loading" />

      <span>
        <slot />
      </span>

      <Icon
        v-show="loading || iconRight"
        :class="loading && 'animate-spin'"
        class="pointer-events-none block shrink-0"
        :name="loading ? 'ph-circle-notch' : iconRight || ''"
      />
    </div>
  </button>
</template>
