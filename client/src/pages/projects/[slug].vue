<script setup lang="ts">
import DesktopMedia from '~/components/portfolio/blocks/DesktopMedia.vue';
import FullscreenImg from '~/components/portfolio/blocks/FullscreenImg.vue';
import SimpleText from '~/components/portfolio/blocks/SimpleText.vue';
import TextMedia from '~/components/portfolio/blocks/TextMedia.vue';
import TextMobile from '~/components/portfolio/blocks/TextMobile.vue';
import type { Project, Paginated } from '~/types/cms';

const env = useRuntimeConfig();
const route = useRoute();
const slug = route.params.slug?.toString();

const { data: project } = await useAsyncData(`project:${slug}`, async () => {
  const { docs } = await $fetch<Paginated<Project>>(
    `${env.public.apiUrl}/projects?where[slug][equals]=${slug}`
  );
  return docs[0];
});

if (!project.value) throw createError({ statusCode: 404 });

useHead({ title: project.value!.title });

const themeBg = computedEager(() => {
  switch (project.value!.theme) {
    case 'gr':
      return 'bg-gray-100';
    case 'rd':
      return 'bg-red-50';
    case 'or':
      return 'bg-orange-100';
    case 'am':
      return 'bg-amber-50';
    case 'lm':
      return 'bg-lime-100';
    case 'gn':
      return 'bg-green-50';
    case 'em':
      return 'bg-emerald-100';
    case 'tl':
      return 'bg-teal-100';
    case 'cy':
      return 'bg-cyan-50';
    case 'sk':
      return 'bg-sky-100';
    case 'bl':
      return 'bg-blue-100';
    case 'in':
      return 'bg-indigo-100';
    case 'vl':
      return 'bg-violet-100';
    case 'pr':
      return 'bg-purple-100';
    case 'fc':
      return 'bg-fuchsia-50';
    case 'pn':
      return 'bg-pink-100';
    default:
      return 'bg-gray-50';
  }
});
</script>

<template>
  <main v-if="project">
    <Body :class="themeBg" />

    <PortfolioBlocksHero :project="project" />
    <component
      v-for="block in project.content"
      :key="block.id"
      :block="block"
      :is="
        block.blockType === 'block-desktop-media'
          ? DesktopMedia
          : block.blockType === 'block-fullscreen-img'
          ? FullscreenImg
          : block.blockType === 'block-simple-text'
          ? SimpleText
          : block.blockType === 'block-text-media'
          ? TextMedia
          : TextMobile
      "
    />
  </main>
</template>
