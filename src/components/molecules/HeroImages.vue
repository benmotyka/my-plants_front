<script setup lang="ts">
import HeroPhone from "../atoms/HeroPhone.vue";
</script>
    
<template>
    <img src="/hero/leaf_1.png" class="absolute top-0 left-1/4" data-aos="fade-down-right" />
    <img src="/hero/leaf_2.png" class="absolute bottom-1/2 right-1/4" data-aos="fade-down-left" data-aos-delay="400" />
    <img src="/hero/leaf_3.png" class=" absolute bottom-0 z-[4]" data-aos="fade-down" data-aos-delay="600"
        data-aos-offset="0" />
    <HeroPhone data-aos="fade-up" data-aos-delay="600" data-aos-offset="-100"/>
</template>