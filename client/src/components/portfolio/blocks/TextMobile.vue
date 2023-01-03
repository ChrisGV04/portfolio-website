<script setup lang="ts">
import { PropType } from 'vue';
import { ProjectTextMobileBlock } from '~/types/cms';

defineProps({ block: { type: Object as PropType<ProjectTextMobileBlock>, required: true } });
</script>

<template>
  <section>
    <BaseContainer
      class="flex items-center gap-10"
      :class="block.mediaPos === 'r' ? 'flex-col-reverse md:flex-row-reverse' : 'flex-col md:flex-row'"
    >
      <div class="flex w-full justify-center space-x-8">
        <img
          :src="media.res.url"
          :alt="media.res.alt"
          v-for="(media, mIdx) in block.media"
          :class="mIdx === 1 && 'md:translate-y-10 md:transform'"
          class="block aspect-portrait w-full max-w-[15rem] rounded-2xl border-2 border-gray-600 bg-gray-200 object-cover object-center md:max-w-none"
        />
      </div>

      <div class="w-full">
        <h3 class="text-h4 text-gray-900">{{ block.title }}</h3>
        <p class="mt-6 whitespace-pre-wrap text-body text-gray-900 opacity-70 lg:mt-10">{{ block.body }}</p>
      </div>
    </BaseContainer>
  </section>
</template>
