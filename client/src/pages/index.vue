<script setup lang="ts">
import type { HomepageInfo } from '~/types/cms';

const env = useRuntimeConfig();
const { t, locale } = useI18n();

useHead({ title: t('homePage.heroTitle') });

const { data, error } = await useFetch<HomepageInfo>(
  `${env.public.apiUrl}/globals/homepage?locale=${locale.value}`
);
if (error.value) throw createError({ ...error.value, fatal: true });
</script>

<template>
  <main>
    <template v-if="data">
      <HomeHeroSection :gallery="data.hero.gallery" />
      <HomeAboutSection :info="data.about" />
      <HomePortfolioSection :projects="data.featProjects.projects" />

      <section class="pb-24">
        <UiMarquee :speed="40">
          <div class="ml-4 flex flex-nowrap gap-4 md:ml-8 md:gap-8">
            <img
              :src="item.img.url"
              :alt="item.img.alt"
              v-for="item in data.bottomMarquee.gallery"
              class="aspect-[4/3] w-72 shrink-0 rounded-3xl md:w-80 lg:w-[27vw]"
            />
          </div>
        </UiMarquee>
      </section>

      <GlobalCta />
    </template>
  </main>
</template>
