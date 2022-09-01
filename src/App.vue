<script setup lang="ts">
import AOS from "aos";
import { onMounted } from "vue";

import Hero from "./components/organisms/Hero.vue";
import About from "./components/organisms/About.vue";
import Footer from "./components/organisms/Footer.vue";

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
  <Footer />
</template>
