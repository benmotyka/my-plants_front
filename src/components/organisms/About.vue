<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import PreviewItem from "../molecules/PreviewItem.vue";

const { t } = useI18n();

interface AboutItem {
  header: string;
  description: string;
  imgSrc: string;
}

const itemsAnimationDelay = 300
const itemsData: AboutItem[] = [
  {
    header: t('summary.item1.header'),
    description: t('summary.item1.description'),
    imgSrc: '/about/mobile-app.png'
  },
  {
    header: t('summary.item2.header'),
    description: t('summary.item2.description'),
    imgSrc: '/about/reminder.png'
  },
  {
    header: t('summary.item3.header'),
    description: t('summary.item3.description'),
    imgSrc: '/about/price-tag.png'
  },
]
</script>

<template>
  <section id="about" class="flex items-center justify-center flex-col w-full sm:pt-60 pt-20 -mb-20
  bg-gradient-to-b from-[#E8EDFA] via-[#E8EDFA] to-[#fff]
  ">
    <h2 class="text-4xl text-gray-600 text-center px-4" data-aos="fade">{{ $t('summary.header') }}</h2>
    <div class="flex justify-center flex-wrap  items-center py-10">
      <PreviewItem v-for="item, key in itemsData" :header="item.header" :description="item.description"
        :img-src="item.imgSrc" data-aos="zoom-in" :data-aos-delay="key * itemsAnimationDelay" />
    </div>
    <footer class="text-gray-600 text-lg text-center" data-aos="fade" data-aos-delay="1000">{{ $t('summary.seeMore') }}
      <a class="text-cyan-700 cursor-pointer" href="#app-features">{{ $t('summary.viewFeatures') }}</a>
    </footer>
    <img src="/about/waves.png" class="w-full min-h-[400px] object-cover">
  </section>
</template>
