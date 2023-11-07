<template>
  <div>
    <button
      class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 bg-white focus:bg-gray-800 focus:ring-3 lg:px-4  lg:py-2.5  text-md cursor-pointer hover:drop-shadow-md"
      @click="clickAction"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  buttonText?: string;
  clickAction?: any;
}>();
</script>

<style scoped></style>
