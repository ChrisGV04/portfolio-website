<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.contact') });
</script>

<template>
  <main>
    <Body class="bg-gray-50" />
    <h1>{{ t('navigation.contact') }}</h1>
  </main>
</template>
