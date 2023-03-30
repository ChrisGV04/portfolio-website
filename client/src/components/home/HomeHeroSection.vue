<script setup lang="ts"></script>

<template>
  <section class="relative z-0 overflow-hidden">
    <BaseContainer no-y-padding class="flex h-screen items-end">
      <h1 class="mb-10 text-center text-[clamp(2rem,10vw,8.75rem)] uppercase leading-none text-white">
        Diseño web personalizado
      </h1>
    </BaseContainer>

    <div class="absolute inset-0 -z-10 h-full w-full bg-gradient-to-t from-gray-900 to-transparent"></div>

    <div class="absolute inset-0 -z-20 h-full w-full">
      <BaseContainer class="grid grid-cols-2 gap-5 sm:grid-cols-3">
        <div class="mt-32 flex flex-col space-y-5">
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
        </div>
        <div class="flex flex-col space-y-5">
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
        </div>
        <div class="hidden sm:mt-32 sm:flex sm:flex-col sm:space-y-5">
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
          <div class="aspect-[3/4] w-full rounded-lg bg-gray-600"></div>
        </div>
      </BaseContainer>
    </div>
  </section>
</template>
