<script setup lang="ts">
import PatchNotes from "../molecules/PatchNotes.vue";

interface PatchNote {
    patch: number;
    changes: string[];
    createdAt: string;
}

// @TODO: add req to api and slice(0,3)
const patchNotes: PatchNote[] = [
    {
        patch: 1.03,
        changes: ['added watering plants', 'changed something'],
        createdAt: '2022-07-12'
    },
    {
        patch: 1.02,
        changes: ['added watering plants', 'changed something'],
        createdAt: '2022-07-12'
    },
    {
        patch: 1.01,
        changes: ['added watering plants', 'changed something'],
        createdAt: '2022-07-12'
    },
] 
</script>

<template>
    <section id="changelog" class="w-full h-[500px] background-image bg-fixed bg-center bg-cover">
        <main class="px-28 grid grid-cols-4 w-full h-full gap-12">
            <div class="flex flex-col gap-8 justify-center">
                <h2 class="font-bold text-white text-4xl">Latest changes</h2>
                <p class="font-normal text-white text-xl">See what changed in the recent app patches.</p>
            </div>
            <div v-for="item in patchNotes" class="flex flex-col gap-4 justify-center pl-20 text-white text-large" :key="item.patch">
                <PatchNotes :patch="item.patch" :changes="item.changes" :date="item.createdAt" />
            </div>
        </main>
    </section>
</template>

<style scoped>
.background-image {
    background-image: url("/changelog/background.png");
}
</style>