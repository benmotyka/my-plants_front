<script setup lang="ts">
import links from "../../config/links"

</script>
<template>
    <section id="download" class="flex w-full min-h-[800px] grid sm:grid-cols-2 py-24">
        <main class="flex flex-col items-center justify-center gap-y-2 px-3 sm:px-10 text-center">
            <h2 class="text-4xl text-slate-500">{{ $t('download.header') }}</h2>
            <p class="mt-4 text-slate-500 text-sm sm:max-w-md px-4">{{ $t('download.description') }}</p>
            <div class="flex w-full gap-8 flex-wrap items-center justify-center py-10">
                <a :href="links.googlePlay">
                    <img class="h-[50px]" src="/download/google-play.png" />
                </a>
                <a :href="links.appStore">
                    <img class="h-[50px]" src="/download/app-store.png" />
                </a>
            </div>
        </main>
        <div class="flex items-center justify-center">
            he
        </div>
    </section>
</template>