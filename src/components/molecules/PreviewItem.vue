<script setup lang="ts">
defineProps<{ imgSrc: string; header: string; description: string }>();
</script>

<template>
    <article class="flex items-center justify-center flex-col gap-y-8 p-4 sm:p-10 max-w-[300px] sm:max-w-[380px] text-center text-gray-600 mb-auto">
        <img :src="imgSrc" class=" h-16" />
        <h5 class="text-xl font-semibold ">{{ header }}</h5>
        <p class="leading-8 ">{{ description }}</p>
    </article>
</template>
