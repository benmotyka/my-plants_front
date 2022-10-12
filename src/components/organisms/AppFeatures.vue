<script setup lang="ts">
import { ref } from 'vue'
import { FeatureSlide } from '../../interfaces/AppFeatures';
import AppFeaturesList from "../molecules/AppFeaturesList.vue";
import AppFeaturesCounter from "../molecules/AppFeaturesCounter.vue";

const itemsData: FeatureSlide[] = [
  {
    imgSrc: '/app-features/screenshot_1.png',
    itemsLeft: [
        {
            header: 'Tap plant to see its watering and images history',
            description: 'To see its watering and images history'
        },
        {
            header: 'Swipe',
            description: 'to mark plant as watered'
        }
    ],
    itemsRight: [
        {
            header: 'Hold plant',
            description: 'To edit it'
        },
        {
            header: 'Dashboard management 5',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management 6',
            description: 'Lorem ipsum'
        }
    ]
  },
  {
    imgSrc: '/app-features/screenshot_2.png',
    itemsLeft: [
        {
            header: 'Dashboard management 7',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management8',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management 9',
            description: 'Lorem ipsum'
        }
    ],
    itemsRight: [
        {
            header: 'Dashboard management 10',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management 11',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management 12',
            description: 'Lorem ipsum'
        }
    ]
  },
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
