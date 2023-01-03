<script setup lang="ts">
import { PropType } from 'vue';
import { ProjectDesktopMediaBlock } from '~/types/cms';

defineProps({ block: { type: Object as PropType<ProjectDesktopMediaBlock>, required: true } });
</script>

<template>
  <section>
    <BaseContainer no-y-padding>
      <img
        :src="block.img.url"
        :alt="block.img.alt"
        class="mt-20 aspect-2-1 w-full rounded-2xl border-2 border-gray-600 bg-gray-200 object-cover"
      />
    </BaseContainer>
  </section>
</template>
