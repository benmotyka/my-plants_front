<script setup lang="ts">
import BasicButton from "../atoms/BasicButton.vue";
import WatchButton from "../atoms/WatchButton.vue";
</script>

<template>
  <header
    class="flex items-center justify-center flex-col h-[600px] bg-fixed bg-center bg-cover background-image gap-y-4 relative pb-24"
  >
    <img src="/icon.png" />
    <h1 class="text-white text-4xl">My plants</h1>

    <h5 class="text-white text-xl">
      Free and open source mobile app to track watering of your plants
    </h5>
    <div class="flex items-center justify-center mt-8 gap-x-6">
      <BasicButton type="success" text="Discover" />
      <BasicButton type="info" text="Download now" />
    </div>
    <WatchButton/>
    <img src="/hero/phone.png" class="absolute -bottom-40 w-[1000px] z-[10]" />
  </header>
</template>

<style scoped>
.background-image {
  background-image: url("/hero/background.png");
}
</style>
