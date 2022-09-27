<script setup lang="ts">
import Subfooter from "../molecules/Subfooter.vue"
import FooterCategory, { ColorCategories } from "../molecules/FooterCategory.vue"
import FooterSummary from "../molecules/FooterSummary.vue";
import links from "../../config/links"
import { FooterItem } from "../../interfaces/Footer"



interface FooterCategory {
    header: string;
    color: ColorCategories;
    items: FooterItem[];
}

const footerCategories: FooterCategory[] = [
    {
        header: 'About us',
        color: 'green',
        items: [{
            text: 'Mobile app',
            link: links.github.app
        }, {
            text: 'Front page',
            link: links.github.front
        }, {
            text: 'Server',
            link: links.github.server
        }]
    },
    {
        header: 'Help center',
        color: 'blue',
        items: [{
            text: 'Mobile app',
            link: links.github.app
        }, {
            text: 'Front page',
            link: links.github.front
        }, {
            text: 'Server',
            link: links.github.server
        }]
    },
    {
        header: 'Source code',
        color: 'pink',
        items: [{
            text: 'Mobile app',
            link: links.github.app
        }, {
            text: 'Front page',
            link: links.github.front
        }, {
            text: 'Server',
            link: links.github.server
        }]
    },
]
</script>

<template>
    <section class="flex flex-col background-image w-full bg-cover bg-center bg-fixed">
        <div class="py-20 px-10 sm:px-20 xl:px-60 h-full grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14">
            <FooterSummary />
            <FooterCategory v-for="category in footerCategories" :color="category.color" :header="category.header"
                :items="category.items" />
        </div>
        <Subfooter />
    </section>
</template>

<style scoped>
.background-image {
    background-image: url("/footer/background.png");
}
</style>
    