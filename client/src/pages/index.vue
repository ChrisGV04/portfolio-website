<script setup lang="ts">
import { Homepage } from '../types/cms';

const { t, locale } = useI18n();
useHead({ title: t('pageTitles.home') });

const env = useRuntimeConfig();
const { data } = await useFetch<Homepage>(`${env.public.apiUrl}/globals/homepage?locale=${locale.value}`);
</script>

<template>
  <main v-if="data">
    <Body class="bg-gray-50" />
    <HomeHeroSection :gallery="data.heroGallery" />
    <HomeServicesSection :images="data.services" />
    <HomePortfolioSection :projects="data.featProjects" />
  </main>
</template>
