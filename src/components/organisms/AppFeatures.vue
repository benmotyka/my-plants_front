<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import { FeatureSlide } from '../../interfaces/AppFeatures';
import AppFeaturesList from "../molecules/AppFeaturesList.vue";
import AppFeaturesCounter from "../molecules/AppFeaturesCounter.vue";

const { t } = useI18n();

const itemsData: FeatureSlide[] = [
    {
        imgSrc: '/app-features/screenshot_1.png',
        itemsLeft: [
            {
                header: t('features.item1.header'),
                description: t('features.item1.description')
            },
            {
                header: t('features.item2.header'),
                description: t('features.item2.description')
            }
        ],
        itemsRight: [
            {
                header: t('features.item3.header'),
                description: t('features.item3.description')
            },
        ]
    }
]
let slideIndex = ref(0)

const handleCounter = (newCounter: number) => {
    if (newCounter < 0 || newCounter > itemsData.length - 1) return
    slideIndex.value = newCounter
}

</script>

<template>
    <section id="app-features" class="flex flex-col items-center pb-64 pt-20" data-aos="fade">
        <h2 class="text-4xl text-gray-600 mb-6" data-aos="fade">App features</h2>
        <AppFeaturesCounter :counter="slideIndex" @changeCounter="(newCounter) => handleCounter(newCounter)" />
        <main class="grid grid-cols-1 sm:grid-cols-[1fr_max-content_1fr] relative w-full mt-12 lg:gap-x-20 gap-x-6 ">
            <AppFeaturesList :items="itemsData[slideIndex].itemsLeft" align="right" />
            <img :src="itemsData[slideIndex].imgSrc" class="z-[2] mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
            <AppFeaturesList :items="itemsData[slideIndex].itemsRight" align="left" />
            <img src="/app-features/screenshot_effect.png"
                class="absolute -bottom-64 w-full min-h-[250px] object-cover" />
        </main>
    </section>
</template>
