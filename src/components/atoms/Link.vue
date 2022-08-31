<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
    <a class="text-cyan-700 cursor-pointer">{{ text }}</a>
</template>