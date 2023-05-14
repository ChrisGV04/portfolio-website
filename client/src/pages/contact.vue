<script setup lang="ts">
import type { ContactPageInfo } from '~/types/cms';

const env = useRuntimeConfig();
const { t, locale } = useI18n();

useHead({ title: t('general.getInTouch') });

const { data, error } = await useFetch<ContactPageInfo>(
  `${env.public.apiUrl}/globals/contact-page?locale=${locale.value}`
);
</script>

<template>
  <main class="flex">
    <BaseContainer
      no-y-padding
      v-if="data && !error"
      class="flex flex-col gap-8 py-24 sm:pt-32 md:flex-row md:items-center md:justify-between"
    >
      <div class="max-w-lg lg:max-w-3xl">
        <h1 class="fix-kerning block w-full text-4xl text-white sm:text-5xl lg:text-7xl">
          {{ t('contactPage.heroTitle') }}
        </h1>

        <img
          :alt="data.avatar.alt"
          :src="data.avatar.url"
          class="mt-10 w-20 rounded-full md:mt-16 md:w-40 lg:w-56"
        />
      </div>

      <div class="space-y-10">
        <div class="flex flex-col space-y-2">
          <span class="section-title">{{ t('general.contactMethods') }}</span>
          <a :href="media.url" target="_blank" v-for="media in data.contactMethods" class="section-item">{{
            media.name
          }}</a>
        </div>
        <div class="flex flex-col space-y-2">
          <span class="section-title">{{ t('general.information') }}</span>
          <span class="section-item" v-for="info in data.info">{{ info.name }}</span>
        </div>
        <div class="flex flex-col space-y-2">
          <span class="section-title">{{ t('general.otherMedia') }}</span>
          <a :href="media.url" target="_blank" v-for="media in data.otherMedia" class="section-item">{{
            media.name
          }}</a>
        </div>
      </div>
    </BaseContainer>
  </main>
</template>

<style scoped>
.section-title {
  @apply text-sm font-semibold uppercase text-white text-opacity-70;
}

.section-item {
  @apply text-white md:text-lg;
}

a.section-item {
  @apply hover:underline;
}
</style>
