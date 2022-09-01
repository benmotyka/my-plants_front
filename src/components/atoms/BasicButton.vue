<script setup lang="ts">
defineProps<{ type: "info" | "success"; text: string }>();
</script>

<template>
  <div
    class="flex items-center justify-center rounded-full py-3 w-52 bg-gradient-to-r text-xl text-red cursor-pointer text-white shadow-lg transition duration-150 ease-out hover:opacity-80"
    :class="
      type === 'success'
        ? 'from-[#7ED321] to-[#5FA315]'
        : 'from-[#2170D3] to-[#2955BA]'
    "
  >
    {{ text }}
  </div>
</template>
