<template>
  <div>
    <PageBanner />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref } from "vue";
import PageBanner from "../components/pagesComponents/PageBanner.vue";
const Route = useRoute();
</script>

<style scoped></style>
