<script setup lang="ts">
defineProps<{ text: string; link: string; }>();
</script>

<template>
    <p class="text-slate-800 text-sm">{{ text }}</p>
</template>