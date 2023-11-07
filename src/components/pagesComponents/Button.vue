<template>
  <div>
    <button
      class="p-3 text-purple-600 bg-white rounded-lg font-semibold text-md cursor-pointer hover:bg-neutral-800 hover:text-white hover:drop-shadow-md"
      @click="clickAction"
    >{{buttonText}}</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  buttonText?: string,
  clickAction? : any,
}>();
</script>

<style scoped></style>
