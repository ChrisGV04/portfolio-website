<script setup lang="ts">
import type { Paginated, Project } from '~/types/cms';

const { t, locale } = useI18n();
useHead({ title: t('pageTitles.projects') });

const env = useRuntimeConfig();
const { data } = await useAsyncData(async () => {
  const { docs } = await $fetch<Paginated<Project>>(`${env.public.apiUrl}/projects?locale=${locale.value}`);
  return docs;
});

console.log(data.value);
</script>

<template>
  <main v-if="data?.length">
    <HomePortfolioSection :projects="data" />
  </main>
</template>
