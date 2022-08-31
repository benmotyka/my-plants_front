<script setup lang="ts">
import PreviewItem from "./PreviewItem.vue";
</script>

<template>
  <section class="flex items-center justify-center flex-col bg-[#E8EDFA] w-full pt-72">
    <h3 class="text-4xl text-gray-600">Best tool to track watering of your plants</h3>
    <div  class="flex items-center py-10 ">
      <PreviewItem header="hej" description="Friendly and simple user interface ..." img-src="/about/time.png" />
      <PreviewItem header="Set reminders" description="Something that app can remind you of"
        img-src="/about/time.png" />
      <PreviewItem header="Completely free" description="Free and open source" img-src="/about/time.png" />
    </div>
    <footer class="text-gray-600 text-lg ">Interested in more? <a class="text-cyan-700">View all features</a></footer>
    <img class="w-full" src="/about/waves.png" alt="waves separator">
  </section>
</template>
