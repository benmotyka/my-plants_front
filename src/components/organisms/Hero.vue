<script setup lang="ts">
import WatchButton from "../atoms/WatchButton.vue";
import HeroImages from "../molecules/HeroImages.vue";
import HeroButtons from "../molecules/HeroButtons.vue";
import HeroPageInfo from "../molecules/HeroPageInfo.vue";
</script>

<template>
  <section id="hero" data-aos="fade-in"
    class="flex items-center flex-col h-[800px] bg-center bg-cover background-image relative pb-24 z-[3]">
    <main class="flex flex-col items-center justify-center h-full gap-y-4 z-[3] px-6">
      <HeroPageInfo />
      <HeroButtons />
      <WatchButton />
    </main>
    <HeroImages />
  </section>
</template>

<style scoped>
.background-image {
  background-image: url("/hero/background.png");
}
</style>
