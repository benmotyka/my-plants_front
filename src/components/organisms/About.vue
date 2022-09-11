<script setup lang="ts">
import PreviewItem from "../molecules/PreviewItem.vue";

interface AboutItem {
  header: string;
  description: string;
  imgSrc: string;
}

const itemsAnimationDelay = 300
const itemsData: AboutItem[] = [
  {
    header: 'One place to keep them all',
    description: 'Friendly and simple user interface. Create account and add your plants. Verification is not needed',
    imgSrc: '/about/mobile-app.png'
  },
  {
    header: 'Set reminders',
    description: 'Something that app can remind you of',
    imgSrc: '/about/reminder.png'
  },
  {
    header: 'Completely free',
    description: 'No subscription. No ads. Free and open-source. Forever.',
    imgSrc: '/about/price-tag.png'
  },
]
</script>

<template>
  <section id="about" class="flex items-center justify-center flex-col w-full sm:pt-60 pt-20 -mb-20
  bg-gradient-to-b from-[#E8EDFA] via-[#E8EDFA] to-[#fff]
  ">
    <h2 class="text-4xl text-gray-600 text-center px-4" data-aos="fade">Best tool for your plants</h2>
    <div class="flex justify-center flex-wrap  items-center py-10">
      <PreviewItem v-for="item, key in itemsData" :header="item.header" :description="item.description"
        :img-src="item.imgSrc" data-aos="zoom-in" :data-aos-delay="key * itemsAnimationDelay" />
    </div>
    <footer class="text-gray-600 text-lg text-center" data-aos="fade" data-aos-delay="1000">Interested in more?
      <a class="text-cyan-700 cursor-pointer" href="#app-features">View all features</a>
    </footer>
    <img src="/about/waves.png" class="w-full min-h-[400px] object-cover">
  </section>
</template>
