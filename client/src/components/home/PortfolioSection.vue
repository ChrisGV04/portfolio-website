<script setup lang="ts">
import { Project } from '~~/src/types/cms';

const { t } = useI18n();

defineProps({ projects: { type: Array<Project>, required: true } });
</script>

<template>
  <section class="overflow-hidden">
    <BaseContainer>
      <h2 class="text-h1 font-medium uppercase leading-none">
        {{ t('home.featuredProjects') }}
      </h2>
    </BaseContainer>

    <PortfolioListingsMain v-for="project in projects" :key="project.id" :project="project" />
  </section>
</template>
