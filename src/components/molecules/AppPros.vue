<script setup lang="ts">
import PreviewItem from "../atoms/PreviewItem.vue";
</script>
    
<template>
    <div class="flex items-center py-10 ">
        <PreviewItem header="hej" description="Friendly and simple user interface ..." img-src="/about/time.png" />
        <PreviewItem header="Set reminders" description="Something that app can remind you of"
            img-src="/about/time.png" />
        <PreviewItem header="Completely free" description="Free and open source" img-src="/about/time.png" />
    </div>
</template>