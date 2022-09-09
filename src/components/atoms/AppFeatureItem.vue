<script setup lang="ts">
defineProps<{ header: string, description?: string  }>();
</script>
    
<template>
    <div class="z-[2]">
        <h5 class="text-slate-600 font-medium text-lg md:mb-3">{{header}}</h5>
        <p class="text-slate-500 font-normal text-sm">{{description}}</p>
    </div>
</template>