<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

import PatchNotes from "../molecules/PatchNotes.vue";
import { PatchNote } from "../../interfaces/PatchNote";
import { getLastPatchNotes } from "../../api/plants";

const patchNotes = ref<PatchNote[]>()

onBeforeMount(async () => {
    const result = await getLastPatchNotes()
    patchNotes.value = result
})
</script>

<template>
    <section id="changelog" class="w-full md:h-[400px] background-image bg-fixed bg-center bg-cover">
        <main class="px-6 sm:px-10 xl:px-28 py-12 xl:pt-24 grid md:grid-cols-4 w-full gap-8 md:gap-4 xl:gap-12">
            <div class="flex flex-col gap-8">
                <h2 class="font-bold text-white text-4xl">{{ $t('patchNotes.header') }}</h2>
                <p class="font-normal text-white text-xl"> {{ $t('patchNotes.description') }}</p>
            </div>
            <div v-for="item in patchNotes" class="flex flex-col gap-4 md:pl-4 xl:pl-18 text-white text-large"
                :key="item.patch">
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