<script setup lang="ts">
defineProps<{ content: string }>();
</script>

<template>
    <span
        class="w-8 h-8 bg-slate-200 rounded-full cursor-pointer flex items-center justify-center font-normal text-slate-600">
        {{content}}</span>
</template>