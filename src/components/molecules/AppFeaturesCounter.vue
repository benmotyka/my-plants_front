
<script setup lang="ts">
import { defineEmits } from 'vue'
import AppFeatureCounterButton from "../atoms/AppFeatureCounterButton.vue";

defineProps<{ counter: number }>();
const emit = defineEmits(['changeCounter'])
</script>

<template>
    <div class="flex items-center gap-x-4">
        <AppFeatureCounterButton content="&lt;" @click="emit('changeCounter', counter-1)" />
        <div
            class="flex items-center justify-center text-white text-xl font-semibold rounded-full bg-gradient-to-b from-[#adf065] to-[#7ED321] w-14 h-14"
            >
            {{counter + 1}}</div>
        <AppFeatureCounterButton content="&gt;" @click="emit('changeCounter', counter+1)" />
    </div>
</template>