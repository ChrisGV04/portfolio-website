<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';
import type { PropType } from 'vue';

const props = defineProps({ error: { type: Object as PropType<NuxtError>, required: true } });

console.log(props.error);

if (props.error.statusCode.toString() === '404') clearError({ redirect: '/404' });
</script>

<template>
  <span>Ocurrió un error</span>
</template>
