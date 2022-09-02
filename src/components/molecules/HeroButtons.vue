<script setup lang="ts">
import BasicButton from "../atoms/BasicButton.vue";
</script>

<template>
    <div class="flex items-center justify-center mt-8 gap-6 flex-col md:flex-row">
        <a href="#about">
            <BasicButton type="success" text="Discover" />
        </a>
        <BasicButton type="info" text="Download now" />
    </div>
</template>