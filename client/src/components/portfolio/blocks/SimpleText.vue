<script setup lang="ts">
import { PropType } from 'vue';
import { ProjectSimpleTextBlock } from '~/types/cms';

defineProps({ block: { type: Object as PropType<ProjectSimpleTextBlock>, required: true } });
</script>

<template>
  <section>
    <BaseContainer>
      <h3 class="text-h3 text-gray-900">{{ block.title }}</h3>
      <p class="mt-6 whitespace-pre-wrap text-body text-gray-900 opacity-70 lg:mt-10">{{ block.body }}</p>
    </BaseContainer>
  </section>
</template>
