<script setup lang="ts">
import { computed } from 'vue';
import { SlideItem } from '../../interfaces/AppFeatures';
import AppFeatureItem from "../atoms/AppFeatureItem.vue"

type alignType = 'left' | 'right'

const props = defineProps<{ items?: SlideItem[], align: alignType  }>();

const itemsAnimationDelay = 600
const itemsAnimationAlignOffset = 300

const animationOffset = computed(() => (props.align === 'left' ? itemsAnimationAlignOffset : 0))
</script>

<template>
    <div class="hidden md:grid grid-rows-3 h-4/5 pt-14" :class="align === 'right' ? 'text-right' : 'text-left'">
        <AppFeatureItem v-for="item, key in items" :header="item.header" :description="item.description"
            :key="item.header" data-aos="fade" :data-aos-delay="key * itemsAnimationDelay +  animationOffset" />
    </div>
</template>