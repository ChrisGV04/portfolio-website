<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.about') });
</script>

<template>
  <main>
    <Body class="bg-gray-50" />
    <h1>{{ $t('navigation.about') }}</h1>
  </main>
</template>
