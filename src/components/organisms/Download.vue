<script setup lang="ts">
import links from "../../config/links"

</script>
<template>
    <section id="download" class="flex w-full min-h-[800px] grid grid-cols-2">
        <main class="flex flex-col items-center justify-center gap-y-2 px-3 sm:px-10 text-center">
            <h2 class="text-4xl text-slate-500">Download now</h2>
            <h5 class="text-slate-500 text-lg font-normal">Short description</h5>
            <p class="mt-4 text-slate-500 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                iaculis, lacus sed viverra interdum,
                nulla mi interdum eros, ac hendrerit urna lectus sit amet massa. Phasellus eget nisi</p>
            <div class="flex gap-4">
                <a :href="links.googlePlay">
                    <img class="h-40" src="/download/google-play.svg" />
                </a>
                <a :href="links.appStore">
                    <img class="h-40" src="/download/app-store.svg" />
                </a>
            </div>
        </main>
        <div class="flex items-center justify-center">
            he
        </div>
    </section>
</template>