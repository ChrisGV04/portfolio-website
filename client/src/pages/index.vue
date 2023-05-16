<script setup lang="ts">
import type { HomepageInfo } from '~/types/cms';

const env = useRuntimeConfig();
const { t, locale } = useI18n();

useHead({ title: t('homePage.heroTitle') });

definePageMeta({
  // Automatic language detection
  middleware: (to, from) => {
    if (!process.client) return;

    if (to.fullPath !== '/' || to.fullPath !== from.fullPath) return;

    const cookie = useCookie('i18n', { sameSite: 'lax' });
    const switchLocale = useSwitchLocalePath();

    // For the "page:reveal" hook to work, we need to do a full page refresh
    // with window.location.href, since navigateTo doesn't work

    // If user already got a redirection cookie, allow any language switch
    if (cookie.value) {
      if (cookie.value.startsWith('es') && to.fullPath.startsWith('/en'))
        window.location.href = switchLocale('es');
      if (cookie.value.startsWith('en') && !to.fullPath.startsWith('/en'))
        window.location.href = switchLocale('en');

      return;
    }

    // No cookie set. Figure out which language to use
    if (process.client && 'language' in navigator) {
      const language = navigator.language;
      if (language.startsWith('en')) {
        cookie.value = 'en';
        window.location.href = switchLocale('en');
      }

      cookie.value = 'es';
      return;
    }
  },
});

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
