<script setup lang="ts">
const transitionStyles = ref('opacity-0 translate-y-full md:translate-y-0 md:translate-x-full');
function transitionBL() {
  transitionStyles.value = 'opacity-100 translate-y-0 md:translate-x-0';
}

function transitionAE() {
  transitionStyles.value = 'opacity-100 translate-y-full md:translate-y-0 md:translate-x-full';
}
</script>

<template>
  <Html>
    <Body class="antialiased transition-colors">
      <GlobalHeader />
      <NuxtPage
        :transition="{
          duration: 300,
          mode: 'out-in',
          onAfterEnter: transitionAE,
          onBeforeLeave: transitionBL,
        }"
      />
      <GlobalFooter />

      <Teleport to="body">
        <div
          id="transition-bar"
          :class="[
            'fixed top-0 right-0 z-50 h-screen w-screen transform bg-gray-800 transition-transform duration-300',
            transitionStyles,
          ]"
        ></div>
      </Teleport>
    </Body>
  </Html>
</template>
