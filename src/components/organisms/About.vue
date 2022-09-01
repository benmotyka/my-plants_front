<script setup lang="ts">
import AppPros from "../molecules/AppPros.vue";
import Link from "../atoms/Link.vue";
</script>

<template>
  <section class="flex items-center justify-center flex-col bg-[#E8EDFA] w-full pt-72">
    <h3 data-aos="fade" class="text-4xl text-gray-600">Best tool to track watering of your plants</h3>
    <AppPros />
    <footer data-aos="fade" class="text-gray-600 text-lg ">Interested in more?
      <Link text="View all features" />
    </footer>
    <img class="w-full" src="/about/waves.png" alt="waves separator">
  </section>
</template>
