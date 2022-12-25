<template>
    <div class="flex flex-col gap-y-6 max-w-[90%]">
        <div class="flex items-center gap-x-6">
            <img src="/icon.png" class="w-12 h-12" />
            <h4 class="text-white text-3xl lg:text-2xl font-medium">{{ $t('applicationName') }}</h4>
        </div>
        <p class="text-lg lg:text-base text-slate-400 font-medium"> {{ $t('footer.description') }}</p>
    </div>
</template>