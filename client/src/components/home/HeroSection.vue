<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { PropType } from 'vue';
import { Homepage, Upload } from '~~/src/types/cms';

const props = defineProps({
  gallery: { type: Array as PropType<Homepage['heroGallery']>, required: true },
});

const { t } = useI18n();

const bp = useBreakpoints(breakpointsTailwind);
const isSm = bp.smaller('sm');

const columns = computed(() => {
  const cols: Upload[][] = isSm.value ? [[], []] : [[], [], [], []];

  iLoop: for (let iIdx = 0; iIdx < props.gallery.length; iIdx++) {
    const item = props.gallery[iIdx];

    cLoop: for (let cIdx = 0; cIdx < cols.length; cIdx++) {
      const col = cols[cIdx];
      if (col.length === 3) continue cLoop;
      col.push(item.img);
      continue iLoop;
    }
  }

  return cols;
});
</script>

<template>
  <section class="relative z-0 h-screen min-h-[32rem] overflow-hidden">
    <div
      class="absolute bottom-0 left-0 z-10 hidden h-[50vh] w-screen bg-gradient-to-t from-gray-50 to-transparent sm:block sm:max-h-80"
    />

    <div class="absolute inset-0 -z-10 opacity-70">
      <BaseContainer no-y-padding class="grid grid-cols-2 gap-5 sm:grid-cols-4">
        <div v-for="col in columns" class="flex flex-col space-y-5">
          <!-- TODO: Don't modify the height. Use default one by removing the aspect -->
          <img
            :src="item.url"
            :alt="item.alt"
            v-for="item in col"
            class="aspect-long-img-v w-full rounded-2xl bg-gray-200 object-cover object-center"
          />
        </div>
      </BaseContainer>
    </div>

    <BaseContainer no-y-padding class="relative flex h-full items-end pb-16 md:pb-8">
      <div class="z-10 w-full">
        <h1 class="text-center uppercase leading-none text-gray-900">
          <span class="block text-[min(5.5vw,4.5rem)]">{{ t('home.hero.line1') }}</span>
          <span class="block text-h1 font-black">{{ t('home.hero.line2') }}</span>
        </h1>
      </div>
    </BaseContainer>
  </section>
</template>
