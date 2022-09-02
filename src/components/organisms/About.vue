<script setup lang="ts">
import AppPros from "../molecules/AppPros.vue";
</script>

<template>
  <section id="about" class="flex items-center justify-center flex-col bg-[#E8EDFA] w-full pt-72">
    <h3 data-aos="fade" class="text-4xl text-gray-600">Best tool for your plants</h3>
    <AppPros />
    <footer data-aos="fade" class="text-gray-600 text-lg ">Interested in more?
      <a class="text-cyan-700 cursor-pointer">View all features</a>
    </footer>
    <img class="w-full" src="/about/waves.png" alt="waves separator">
  </section>
</template>
