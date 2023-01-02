<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';

const bp = useBreakpoints(breakpointsTailwind);
const isSm = bp.smaller('sm');

const columns = computed(() => {
  // TODO: Return images array instead
  return new Array(isSm.value ? 2 : 4).fill([0, 0, 0]);
});
</script>

<template>
  <section class="relative z-0 h-screen min-h-[32rem] overflow-hidden">
    <div
      class="absolute bottom-0 left-0 z-10 hidden h-[50vh] max-h-80 w-screen bg-gradient-to-t from-gray-50 to-transparent sm:block"
    />

    <div class="absolute inset-0 -z-10">
      <BaseContainer no-y-padding class="grid grid-cols-2 gap-5 sm:grid-cols-4">
        <div v-for="col in columns" class="flex flex-col space-y-5">
          <div v-for="img in col" class="aspect-long-img-v w-full rounded-2xl bg-gray-200"></div>
        </div>
      </BaseContainer>
    </div>

    <BaseContainer no-y-padding class="relative flex h-full items-center pb-8 sm:items-end">
      <div class="z-10 w-full">
        <h1 class="text-center uppercase leading-none text-gray-900">
          <span class="block text-[min(5.5vw,4.5rem)]">{{ $t('home.hero.line1') }}</span>
          <span class="block text-h1 font-black">{{ $t('home.hero.line2') }}</span>
        </h1>
      </div>
    </BaseContainer>
  </section>
</template>
