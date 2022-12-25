<script setup lang="ts">
defineProps<{ patch: number; changes: string[]; date: string; }>();
</script>

<template>
    <h5 class="text-2xl pb-2 font-semibold border-b-2 border-[#FFFA]">{{ $t('patchNotes.patch', { number: patch }) }}
    </h5>
    <ul class="list-disc flex flex-col gap-2 pl-5">
        <li v-for="item in changes" class="text-lg" :key="item">{{ item }}</li>
    </ul>
    <p class="text-sm font-normal text-white opacity-70">{{ date}}</p>
</template>