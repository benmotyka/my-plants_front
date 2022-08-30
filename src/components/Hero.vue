<script setup lang="ts">
import Button from "./Button.vue";
</script>

<template>
  <header
    class="flex items-center justify-center flex-col h-[600px] bg-fixed bg-center bg-cover background-image gap-y-4"
  >
    <img src="/icon.png" />
    <h1 class="text-white text-4xl">My plants</h1>

    <h5 class="text-white">
      Free and open source mobile app to track watering of your plants
    </h5>
    <div class="flex items-center justify-center mt-8 gap-x-6" >
      <Button type="success" text="Discover"/>
      <Button type="info" text="Download now"/>
    </div>
  </header>
</template>

<style scoped>
.background-image {
  background-image: url("/hero/background.png");
}
</style>
