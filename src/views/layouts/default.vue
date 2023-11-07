<template>
  <div>
    <HeaderView/>
    <RouterView class=""/>
    <FooterView/>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderView from '@/components/pagesComponents/Header.vue';
import FooterView from "@/components/pagesComponents/Footer.vue";
</script>

<style scoped>

</style>