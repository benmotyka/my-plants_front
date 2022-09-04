<script setup lang="ts">
import { FeatureSlide } from '../../interfaces/AppFeatures';
import AppFeaturesList from "../molecules/AppFeaturesList.vue";

const itemsData: FeatureSlide[] = [
  {
    imgSrc: '/appFeatures/screenshot_1.png',
    itemsLeft: [
        {
            header: 'Dashboard management 1',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management 2',
            description: 'Lorem ipsum'
        },
        {
            header: 'Dashboard management 3',
            description: 'Lorem ipsum'
        }
    ],
    itemsRight: [
        {
            header: 'Dashboard management 4',
            description: 'Lorem ipsum'
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
]
let slideIndex = 0;
</script>

<template>
    <section id="app-features" class="flex flex-col items-center pb-60 pt-20" data-aos="fade">
        <h2 class="text-4xl text-gray-600" data-aos="fade">App features</h2>
        <main class="grid grid-cols-[1fr_max-content_1fr]  relative w-full mt-12 gap-x-20 ">
            <AppFeaturesList :items="itemsData[slideIndex].itemsLeft" align="right" />
            <img src="/appFeatures/screenshot_1.png" class="z-[2] mx-auto" />
            <AppFeaturesList :items="itemsData[slideIndex].itemsRight" align="left" />
            <img src="/appFeatures/screenshot_effect.png"
                class="absolute -bottom-44 w-full min-h-[200px] object-cover" />
        </main>
    </section>
</template>
