<script setup lang="ts">
import Hero from "./components/organisms/Hero.vue";
import About from "./components/organisms/About.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init({
    once: true,
    delay: 100,
    duration: 800
  });
})

</script>

<template>
  <Hero />
  <About />
</template>
