<script setup lang="ts">
import AOS from "aos";
import { onMounted } from "vue";

import Hero from "./components/organisms/Hero.vue";
import About from "./components/organisms/About.vue";
import AppFeatures from "./components/organisms/AppFeatures.vue";
import ComingSoon from "./components/organisms/ComingSoon.vue";
import Footer from "./components/organisms/Footer.vue";
import Changelog from "./components/organisms/Changelog.vue";
import Download from "./components/organisms/Download.vue";

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
  <About/>
  <AppFeatures />
  <Download />
  <Changelog />
  <ComingSoon />
  <Footer />
</template>
