<script setup lang="ts">
const { locale, t } = useI18n();
const localePath = useLocalePath();

useHead({ title: t('pageTitles.home') });
</script>

<template>
  <div class="flex flex-col">
    <h1 class="text-2xl font-semibold uppercase text-gray-900">{{ $t('buttons.viewLive') }}</h1>
    <span
      >Current locale: <strong>{{ locale }}</strong></span
    >

    <NuxtLink :to="localePath('/', 'es')">Es</NuxtLink>
    <NuxtLink :to="localePath('/', 'en')">En</NuxtLink>
  </div>
</template>
