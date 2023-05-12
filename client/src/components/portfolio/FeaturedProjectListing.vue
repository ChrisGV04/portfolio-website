<script setup lang="ts">
const wrapperEl = ref<HTMLElement | null>(null);
const { elementX, elementY } = useMouseInElement(wrapperEl, { touch: false, handleOutside: false });
</script>

<template>
  <li ref="wrapperEl">
    <a href="#" target="_blank" class="feat-project relative flex items-center justify-between gap-5 p-10">
      <h3 class="text-7xl text-white">Ecos media</h3>
      <span class="text-lg text-white">Type</span>
    </a>
  </li>
</template>

<style scoped>
.feat-project:hover::before {
  opacity: 1;
}

.feat-project::before {
  left: 0;
  top: 0;
  content: '';
  z-index: -1;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0;
  transition: opacity 500ms;

  background: radial-gradient(
    800px circle at v-bind(`${elementX}px`) v-bind(`${elementY-20}px`),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
}
</style>
