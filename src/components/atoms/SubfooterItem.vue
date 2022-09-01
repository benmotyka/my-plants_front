<script setup lang="ts">
defineProps<{ text: string; }>();
</script>
    
<template>
    <p class="flex items-center text-slate-200">
        {{ text }}
    </p>
</template>