<script setup lang="ts">
import { FooterItem } from "../../interfaces/Footer"

export type ColorCategories = "green" | "blue" | "pink"

defineProps<{ color: ColorCategories, header: string, items: FooterItem[] }>();

</script>

<template>
    <article class="flex flex-col items-start gap-y-3 ">
        <div class="w-full h-1 bg-gradient-to-r "
            :class="color === 'green' ? 'from-[#B5EB45] to-[#7ED321]' : color === 'blue' ? 'from-[#80C3F3] to-[#4A90E2]' : color === 'pink' ? 'from-[#FB499C] to-[#F52362]' : 'from-[#fff] to-[#fff]' ">
        </div>
        <h5 class="text-white font-medium uppercase my-3 text-xl lg:text-lg">{{header}}</h5>
        <a :href="item.link" v-for="item in items"
            class=" text-slate-400 hover:text-slate-200 text-lg lg:text-base py-2 lg:py-0">{{item.text}}</a>
    </article>
</template>