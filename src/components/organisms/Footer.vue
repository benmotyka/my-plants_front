<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Subfooter from "../molecules/Subfooter.vue"
import FooterCategory, { ColorCategories } from "../molecules/FooterCategory.vue"
import FooterSummary from "../molecules/FooterSummary.vue";
import links from "../../config/links"
import { FooterItem } from "../../interfaces/Footer"

const { t } = useI18n();


interface FooterCategory {
    header: string;
    color: ColorCategories;
    items: FooterItem[];
}

const footerCategories: FooterCategory[] = [
    {
        header: t('footer.section1.header'),
        color: 'green',
        items: [{
            text: t('footer.section1.item1'),
            link: links.github.app
        }, {
            text: t('footer.section1.item2'),
            link: links.github.front
        }, {
            text: t('footer.section1.item3'),
            link: links.github.server
        }]
    },
    {
        header: t('footer.section2.header'),
        color: 'blue',
        items: [{
            text: t('footer.section2.item1'),
            link: links.github.app
        }, {
            text: t('footer.section2.item2'),
            link: links.github.front
        }, {
            text: t('footer.section2.item3'),
            link: links.github.server
        }]
    },
    {
        header: t('footer.section3.header'),
        color: 'pink',
        items: [{
            text: t('footer.section3.item1'),
            link: links.github.app
        }, {
            text: t('footer.section3.item2'),
            link: links.github.front
        }, {
            text: t('footer.section3.item3'),
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
    