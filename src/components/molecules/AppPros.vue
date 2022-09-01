<script setup lang="ts">
import PreviewItem from "../atoms/PreviewItem.vue";

const itemsData = [
    {
        header: 'heja',
        description: 'Friendly and simple user interface ...',
        imgSrc: '/about/time.png'
    },
    {
        header: 'Set reminders',
        description: 'Something that app can remind you of',
        imgSrc: '/about/time.png'
    },
    {
        header: 'Completely free',
        description: 'Free and open source',
        imgSrc: '/about/time.png'
    },
]

</script>
    
<template>
    <div class="flex items-center py-10">
        <PreviewItem v-for="item in itemsData" :header="item.header" :description="item.description"
            :img-src="item.imgSrc" data-aos="zoom-in"/>
    </div>
</template>