<script setup lang="ts"></script>

<template>
  <section class="overflow-hidden">
    <BaseContainer>
      <h2 class="text-[clamp(2.5rem,8.4vw,8rem)] font-medium uppercase leading-none">
        {{ $t('home.featuredProjects') }}
      </h2>
    </BaseContainer>

    <PortfolioListingsMain />
    <PortfolioListingsMain />
  </section>
</template>
