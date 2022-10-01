<script setup lang="ts">
import links from "../../config/links"

</script>
<template>
    <section id="download" class="flex w-full min-h-[800px] grid sm:grid-cols-2">
        <main class="flex flex-col items-center justify-center gap-y-2 px-3 sm:px-10 text-center">
            <h2 class="text-4xl text-slate-500">Download now</h2>
            <h5 class="text-slate-500 text-lg font-normal">Short description</h5>
            <p class="mt-4 text-slate-500 text-sm sm:max-w-md px-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis, lacus sed viverra interdum,
                nulla mi interdum eros, ac hendrerit urna lectus sit amet massa. Phasellus eget nisi</p>
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