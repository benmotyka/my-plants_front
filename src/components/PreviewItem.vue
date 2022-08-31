<script setup lang="ts">
defineProps<{ imgSrc: string; header: string; description: string }>();
</script>

<template>
    <article class="flex items-center justify-center flex-col gap-y-8 p-10 w-96 text-center text-gray-600">
        <img :src="imgSrc" />
        <h5 class="text-xl font-medium ">{{ header }}</h5>
        <p class="leading-8 ">{{ description }}</p>
    </article>
</template>
