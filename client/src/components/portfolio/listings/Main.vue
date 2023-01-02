<script setup lang="ts"></script>

<template>
  <BaseContainer>
    <div class="flex items-end justify-between gap-10">
      <h3 class="flex-1 text-h2 font-medium uppercase text-gray-900">Nombre del proyecto</h3>

      <p class="w-full max-w-lg text-xl text-gray-700">
        Este es un espacio dedicado a escribir una breve reseña de lo que trató el proyecto actual en un
        máximo de 3 renglones para conservar la estética.
      </p>
    </div>

    <ul aria-label="Galería de imágenes" class="mt-20 flex gap-5 overflow-x-visible">
      <li v-for="i in 4" class="w-full max-w-md shrink-0">
        <div class="aspect-long-img w-full rounded-2xl bg-gray-200"></div>
      </li>
    </ul>

    <div class="mt-20 flex items-end justify-between gap-10">
      <span class="text-gray-500">Plataformas &middot; Apps Web</span>

      <!-- Use real button -->
      <RouterLink to="/">
        <BaseButton class="btn-primary" icon-right="heroicons-arrow-right">Ver proyecto</BaseButton>
      </RouterLink>
    </div>
  </BaseContainer>
</template>
