<script setup lang="ts">
const { t } = useI18n();
useHead({ title: t('pageTitles.projects') });
</script>

<template>
  <h1>{{ $t('navigation.projects') }}</h1>
</template>
