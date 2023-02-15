<script setup lang="ts">
import { PropType } from 'vue';
import { Project } from '~/types/cms';

defineProps({ project: { type: Object as PropType<Project>, required: true } });
</script>

<template>
  <section>
    <BaseContainer>
      <div class="flex items-end">
        <div class="flex-1">
          <h1 class="max-w-2xl flex-1 text-h2 font-medium uppercase text-gray-900">{{ project.title }}</h1>
          <div class="mt-8 flex items-baseline gap-20 text-body text-gray-600">
            <span>{{ project.listing.company }} &middot; {{ project.listing.year }}</span>
            <span
              ><template v-for="(category, idx) in project.categories"
                >{{ category.title }}{{ idx !== project.categories.length - 1 ? ' &middot; ' : '' }}</template
              ></span
            >
          </div>
        </div>

        <a :href="project.url" v-if="project.url" target="_blank">
          <BaseButton class="btn-primary" icon-right="heroicons:arrow-top-right-on-square-20-solid"
            >Ver en vivo</BaseButton
          >
        </a>
      </div>

      <!-- TODO: Also add video posibilities -->
      <img
        :src="project.featuredMedia.url"
        class="mt-20 aspect-2-1 w-full rounded-2xl border-2 border-gray-600 bg-gray-200 object-cover"
      />
    </BaseContainer>
  </section>
</template>
