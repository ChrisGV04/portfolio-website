<script setup lang="ts"></script>

<template>
  <section class="relative z-0 h-screen min-h-[32rem] overflow-hidden">
    <div
      class="absolute bottom-0 left-0 z-10 h-[50vh] max-h-80 w-screen bg-gradient-to-t from-gray-50 to-transparent"
    />

    <div class="absolute inset-0 -z-10">
      <BaseContainer no-y-padding class="grid grid-cols-4 gap-5">
        <div v-for="col in 4" class="flex flex-col space-y-5">
          <div v-for="img in 3" class="aspect-long-img-v w-full rounded-2xl bg-gray-200"></div>
        </div>
      </BaseContainer>
    </div>

    <BaseContainer no-y-padding class="relative flex h-full items-end pb-8">
      <div class="z-10 w-full">
        <h1 class="text-center uppercase leading-none text-gray-900">
          <span class="block text-[clamp(1.5rem,4.6vw,4.5rem)]">{{ $t('home.hero.line1') }}</span>
          <span class="block text-[clamp(2.5rem,8.4vw,8rem)] font-black">{{ $t('home.hero.line2') }}</span>
        </h1>
      </div>
    </BaseContainer>
  </section>
</template>
