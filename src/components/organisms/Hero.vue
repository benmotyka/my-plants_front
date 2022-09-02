<script setup lang="ts">
import WatchButton from "../atoms/WatchButton.vue";
import HeroImages from "../molecules/HeroImages.vue";
import HeroButtons from "../molecules/HeroButtons.vue";
</script>

<template>
  <section id="hero" data-aos="fade-in"
    class="flex items-center justify-center flex-col h-[800px] bg-center bg-cover background-image gap-y-4 relative pb-24">
    <img src="/icon.png" />
    <h1 class="text-white text-4xl">My plants</h1>
    <h5 class="text-white text-xl">
      Free and open source mobile app to track watering of your plants
    </h5>
    <HeroButtons />
    <WatchButton />
    <HeroImages />
  </section>
</template>

<style scoped>
.background-image {
  background-image: url("/hero/background.png");
}
</style>
