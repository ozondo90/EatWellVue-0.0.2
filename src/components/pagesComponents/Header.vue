<template>
  <div class="header bg-purple-700 sticky top-0 left-0 right-0 bottom-auto dark:bg-gray-800">
    <div class="header-content container mx-auto p-3">
      <AppNavBar/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import AppNavBar from "./AppNavBar.vue";
</script>

<style scoped>
.header{
  @apply sticky top-0 bg-purple-600
}

</style>
