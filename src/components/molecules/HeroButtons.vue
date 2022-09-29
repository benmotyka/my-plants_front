<script setup lang="ts">
import BasicButton from "../atoms/BasicButton.vue";
</script>

<template>
    <div class="flex items-center justify-center mt-8 gap-6 flex-col sm:flex-row">
        <a href="#about">
            <BasicButton type="success" text="Discover" />
        </a>
        <a href="#download">
            <BasicButton type="info" text="Download now" />
        </a>
    </div>
</template>