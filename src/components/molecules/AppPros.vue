<script setup lang="ts">
import PreviewItem from "../atoms/PreviewItem.vue";

const itemsData = [
    {
        header: 'One place to keep them all',
        description: 'Friendly and simple user interface ...',
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
    <div class="flex justify-center flex-wrap  items-center py-10">
        <PreviewItem v-for="item, key in itemsData" :header="item.header" :description="item.description"
            :img-src="item.imgSrc" data-aos="zoom-in" :data-aos-delay="key * 200"/>
    </div>
</template>