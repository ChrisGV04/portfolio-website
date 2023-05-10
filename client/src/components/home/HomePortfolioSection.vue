<script setup lang="ts">
const { t } = useI18n();
const localeRoute = useLocaleRoute();
</script>

<template>
  <section>
    <BaseContainer no-y-padding class="pb-24 lg:pb-32">
      <div class="px-10 py-5">
        <h2 class="uppercase text-white opacity-60">{{ t('general.featuredProjects') }}</h2>
      </div>

      <ul class="divide-y divide-white/10 border-y border-white/10">
        <li class="flex items-center justify-between gap-5 p-10">
          <h3 class="text-7xl text-white">Ecos media</h3>

          <span class="text-lg text-white">{{ t('general.website') }}</span>
        </li>
        <li class="flex items-center justify-between gap-5 p-10">
          <h3 class="text-7xl text-white">FZB Diestra</h3>

          <span class="text-lg text-white">{{ t('general.website') }}</span>
        </li>
        <li class="flex items-center justify-between gap-5 p-10">
          <h3 class="text-7xl text-white">BikeBook</h3>

          <span class="text-lg text-white">{{ t('general.webApp') }}</span>
        </li>
      </ul>

      <div class="mt-10 flex justify-center">
        <NuxtLink
          :to="localeRoute('/projects')"
          class="block rounded-xl border border-white/10 px-8 py-4 text-xl text-white text-opacity-60"
          >{{ t('general.viewAll') }}</NuxtLink
        >
      </div>
    </BaseContainer>
  </section>
</template>
