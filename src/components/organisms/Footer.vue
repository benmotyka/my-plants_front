<script setup lang="ts">
import Subfooter from "../molecules/Subfooter.vue"
import FooterCategory, { ColorCategories } from "../molecules/FooterCategory.vue"
import FooterSummary from "../molecules/FooterSummary.vue";

interface FooterCategory {
    header: string;
    color: ColorCategories;
    items: string[];
}

const footerCategories: FooterCategory[] = [
    {
        header: 'About us',
        color: 'green',
        items: ['Our team', 'Company', 'Newsletter', 'Jobs']
    },
    {
        header: 'Help center',
        color: 'blue',
        items: ['Documentations', 'Tutorials', 'Terms of use']
    },
    {
        header: 'Get in touch',
        color: 'pink',
        items: ['Github', 'Google Store', 'App Store']
    },
]
</script>

<template>
    <section class="flex flex-col background-image w-full bg-cover bg-center ">
        <div class="py-20 px-10 sm:px-20 xl:px-60 h-full grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14">
            <FooterSummary />
            <FooterCategory v-for="category in footerCategories" :color="category.color" header="About us"
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
    