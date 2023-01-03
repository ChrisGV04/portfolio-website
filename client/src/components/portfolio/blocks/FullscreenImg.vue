<script setup lang="ts">
import { PropType } from 'vue';
import { ProjectFullscreenImgBlock } from '~/types/cms';

defineProps({ block: { type: Object as PropType<ProjectFullscreenImgBlock>, required: true } });
</script>

<template>
  <section
    :aria-label="block.img.alt"
    :style="{ backgroundImage: `url(${block.img.url})` }"
    class="h-[32rem] bg-cover bg-fixed bg-center lg:h-screen"
  ></section>
</template>
