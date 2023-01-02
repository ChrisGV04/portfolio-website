<script setup lang="ts"></script>

<template>
  <section class="overflow-x-hidden py-24 lg:py-32">
    <BaseContainer no-y-padding>
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <h3 class="flex-1 text-h2 font-medium uppercase text-gray-900">Nombre del proyecto</h3>

        <p class="w-full max-w-lg text-body text-gray-700">
          Este es un espacio dedicado a escribir una breve reseña de lo que trató el proyecto actual en un
          máximo de 3 renglones para conservar la estética.
        </p>
      </div>
    </BaseContainer>

    <BaseContainer
      no-y-padding
      aria-label="Galería de imágenes"
      class="md: mt-10 flex snap-x gap-5 overflow-x-auto lg:mt-20 lg:snap-none lg:overflow-x-visible"
    >
      <div
        v-for="i in 4"
        class="aspect-long-img w-[calc(100vw-4rem)] max-w-md shrink-0 snap-center rounded-2xl bg-gray-200 lg:snap-align-none"
      ></div>
    </BaseContainer>

    <BaseContainer
      no-y-padding
      class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10 lg:mt-20"
    >
      <span class="text-gray-500">Plataformas &middot; Apps Web</span>

      <!-- Use real button -->
      <RouterLink to="/">
        <BaseButton class="btn-primary" icon-right="heroicons-arrow-right">Ver proyecto</BaseButton>
      </RouterLink>
    </BaseContainer>
  </section>
</template>
