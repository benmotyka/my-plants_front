<script setup lang="ts">
import BasicButton from "../atoms/BasicButton.vue";
</script>

<template>
    <div class="flex items-center justify-center mt-8 gap-6 flex-col sm:flex-row">
        <a href="#about">
            <BasicButton type="success" :text="$t('discover')" />
        </a>
        <a href="#download">
            <BasicButton type="info" :text="$t('downloadNow')" />
        </a>
    </div>
</template>