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
  <section>
    <BaseContainer>
      <div class="flex flex-col">
        <h2 class="text-7xl font-medium uppercase text-gray-900">{{ $t('home.services.title') }}</h2>
        <span class="mt-4 text-xl text-gray-700">{{ $t('home.services.subtext') }}</span>
      </div>

      <ul class="mt-20 grid grid-cols-3 gap-5">
        <li v-for="service in services" class="w-full">
          <div class="aspect-4-5 w-full rounded-2xl bg-gray-300"></div>

          <div class="mt-4 flex flex-col">
            <h3 class="text-2xl font-medium text-gray-900">{{ service.name }}</h3>
            <span class="text-gray-500">{{ service.cat1 }} &middot; {{ service.cat2 }}</span>
          </div>
        </li>
      </ul>
    </BaseContainer>
  </section>
</template>
