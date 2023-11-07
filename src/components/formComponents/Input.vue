<template>
  <input
    class="w-full h-[45px] border-0 pl-3 rounded-md bg-neutral-200 text-black font-medium shadow-neutral-400 drop-shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-300 focus:bg-white placeholder:font-light placeholder:text-black-300"
    :placeholder="placeholder"

  />
  <p>{{ data }}</p>
</template>

<script setup lang="ts">

const props = defineProps<{
  placeholder? : string,
  data: string
}>();

</script>

<style scoped></style>
