<script setup lang="ts">
const transitionStyles = ref('translate-y-full  md:translate-y-0 md:translate-x-full');
function transitionBL() {
  transitionStyles.value = 'translate-y-0 md:translate-x-0';
}

function transitionAE() {
  transitionStyles.value = 'translate-y-full md:translate-y-0 md:translate-x-full';
}
</script>

<template>
  <Html>
    <Body class="bg-gray-50 antialiased">
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

      <div
        id="transition-bar"
        :class="[
          'fixed top-0 right-0 z-30 h-screen w-screen transform bg-gray-800 transition-transform duration-300',
          transitionStyles,
        ]"
      ></div>
    </Body>
  </Html>
</template>
