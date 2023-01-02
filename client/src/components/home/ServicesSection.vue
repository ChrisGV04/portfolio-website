<script setup lang="ts">
interface ServiceItem {
  name: string;
  cat1: string;
  cat2: string;
}

const { t } = useI18n();

const services: ServiceItem[] = [
  {
    name: t('home.services.coding.title'),
    cat1: t('home.services.coding.cat1'),
    cat2: t('home.services.coding.cat2'),
  },
  {
    name: t('home.services.web.title'),
    cat1: t('home.services.web.cat1'),
    cat2: t('home.services.web.cat2'),
  },
  {
    name: t('home.services.ecommerce.title'),
    cat1: t('home.services.ecommerce.cat1'),
    cat2: t('home.services.ecommerce.cat2'),
  },
];
</script>

<template>
  <section class="py-24 lg:py-32">
    <BaseContainer no-y-padding>
      <div class="flex flex-col">
        <h2 class="text-h2 font-medium uppercase text-gray-900">{{ $t('home.services.title') }}</h2>
        <span class="mt-4 text-body text-gray-700">{{ $t('home.services.subtext') }}</span>
      </div>
    </BaseContainer>

    <BaseContainer
      no-y-padding
      class="mt-20 flex snap-x gap-5 overflow-x-auto md:grid md:grid-cols-3 md:overflow-hidden"
    >
      <div
        v-for="service in services"
        class="w-[calc(100vw-4rem)] max-w-[25rem] shrink-0 md:w-full md:max-w-none"
      >
        <div class="aspect-4-5 w-full rounded-2xl bg-gray-300"></div>

        <div class="mt-4 flex flex-col">
          <h3 class="text-xl font-medium text-gray-900 lg:text-2xl">{{ service.name }}</h3>
          <span class="text-gray-500">{{ service.cat1 }} &middot; {{ service.cat2 }}</span>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
