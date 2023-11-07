<template>
  <div class="py-3 my-3 px-1 flex flex-col gap-3">
    <label :for="blockLabel">{{ blockLabel }}</label>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  blockLabel? : string,
}>();

</script>

<style scoped>

</style>