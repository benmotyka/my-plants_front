<script setup lang="ts">
import SubfooterItem from "../atoms/SubfooterItem.vue";
</script>

<template>
    <footer class="w-full h-20 bg-[#0007] mt-auto flex justify-between">
        <div class="flex px-60">
            <SubfooterItem text="copyright costam" />
        </div>
        <div class="flex px-60">
            <SubfooterItem text="facebook" />
            <SubfooterItem text="twitter" />
        </div>
    </footer>
</template>