<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="block p-5 max-h-screen lg:w-[33%] sm:w-[90%]">
      <RouterView/>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from "../../components/pagesComponents/Card.vue";
import { RouterView } from "vue-router";

</script>

<style scoped>

</style>