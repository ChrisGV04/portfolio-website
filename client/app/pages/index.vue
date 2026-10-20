<script setup lang="ts">
import type { HomepageInfo } from '~/types/cms';

const env = useRuntimeConfig();
const { t, locale } = useI18n();

useHead({ title: t('homePage.heroTitle') });

definePageMeta({
  // Automatic language detection, only on a first client load of `/`
  middleware: (to, from) => {
    if (!import.meta.client || to.fullPath !== '/' || to.fullPath !== from.fullPath) return;

    const cookie = useCookie('i18n', { sameSite: 'lax' });
    cookie.value ||= navigator.language.startsWith('en') ? 'en' : 'es';

    // A full page load is needed for the "page:reveal" hook, navigateTo doesn't trigger it.
    // localePath resolves from the given path; switchLocalePath would read the not-yet-resolved route
    if (cookie.value.startsWith('en')) window.location.href = useLocalePath()('/', 'en');
  },
});

const { data, error } = await useFetch<HomepageInfo>(
  `${env.public.apiUrl}/globals/homepage?locale=${locale.value}`
);
if (error.value) throw createError({ status: 500, message: error.value.message, fatal: true });
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
              class="aspect-4/3 w-72 shrink-0 rounded-3xl md:w-80 lg:w-[27vw]"
            />
          </div>
        </UiMarquee>
      </section>

      <GlobalCta />
    </template>
  </main>
</template>
