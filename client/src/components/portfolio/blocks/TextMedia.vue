<script setup lang="ts">
import { PropType } from 'vue';
import { ProjectTextMediaBlock } from '~/types/cms';

defineProps({ block: { type: Object as PropType<ProjectTextMediaBlock>, required: true } });
</script>

<template>
  <section>
    <BaseContainer
      class="flex items-center gap-10"
      :class="block.mediaPos === 'r' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'"
    >
      <img
        :src="block.media.url"
        :alt="block.media.alt"
        class="block w-full rounded-2xl border-2 border-gray-600 bg-gray-200"
      />

      <div class="w-full">
        <h3 class="text-h4 text-gray-900">{{ block.title }}</h3>
        <p class="mt-6 whitespace-pre-wrap text-body text-gray-900 opacity-70 lg:mt-10">{{ block.body }}</p>
      </div>
    </BaseContainer>
  </section>
</template>
