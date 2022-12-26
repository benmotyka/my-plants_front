<template>
    <section id="coming-soon"
        class="flex w-full items-center justify-center bg-center bg-cover background-image min-h-[800px] relative lg:mt-20">
        <div class="absolute -bottom-10 flex flex-col-reverse lg:flex-row items-center justify-center px-3 sm:px-10">
            <img src="/coming-soon/watch.png" class="w-[400px] lg:w-[700px]" data-aos="fade-in" />
            <main class="flex flex-col gap-y-2 pb-14 text-center max-w-[500px] lg:-ml-[150px] ml-0 " data-aos="fade-in">
                <h2 class="text-4xl text-slate-500 ">{{ $t('appleWatch.header') }}</h2>
                <p class="mt-4 text-slate-500 text-sm">{{ $t('appleWatch.description') }}</p>
            </main>
        </div>

    </section>
</template>

<style scoped>
.background-image {
    background-image: url("/coming-soon/background.png");
}
</style>