<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from '~~/src/types/cms';

const { t } = useI18n();
const localeRoute = useLocaleRoute();

defineProps({ project: { type: Object as PropType<Project>, required: true } });
</script>

<template>
  <section class="overflow-x-hidden py-24 lg:py-32">
    <BaseContainer no-y-padding>
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <h3 class="flex-1 text-h2 font-medium uppercase text-gray-900">{{ project.title }}</h3>

        <p class="w-full max-w-lg whitespace-pre-line text-body text-gray-700">
          {{ project.listing.summary }}
        </p>
      </div>
    </BaseContainer>

    <BaseContainer
      no-y-padding
      aria-label="Galería de imágenes"
      class="md: mt-10 flex snap-x gap-5 overflow-x-auto lg:mt-20 lg:snap-none lg:overflow-x-visible"
    >
      <img
        :src="item.img.url"
        :alt="item.img.alt"
        v-for="item in project.listing.gallery"
        class="aspect-long-img w-[calc(100vw-4rem)] max-w-md shrink-0 snap-center rounded-2xl bg-gray-200 object-cover object-center lg:snap-align-none"
      />
    </BaseContainer>

    <BaseContainer
      no-y-padding
      class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:mt-20"
    >
      <span class="text-gray-500">
        <template v-for="(category, cIdx) in project.categories">
          {{ category.title }}{{ cIdx !== project.categories.length - 1 ? ' &middot; ' : '' }}
        </template>
      </span>

      <NuxtLink :to="localeRoute(`/projects/${project.slug}`)">
        <BaseButton class="btn-primary" icon-right="heroicons-arrow-right">{{
          t('buttons.viewProject')
        }}</BaseButton>
      </NuxtLink>
    </BaseContainer>
  </section>
</template>
