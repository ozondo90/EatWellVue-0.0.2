<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div>
      <PrimaryFilter />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
      <RestaurantCard
        v-for="(restaurant, index) in restaurants"
        :key="index"
        :profilPicture="restaurant.profilPicture"
        :restaurantName="restaurant.element.restaurantName"
        :professionnalAddress="restaurant.element.professionnalAddress"
        :openingTime="restaurant.element.openingTime"
        :closingTime="restaurant.element.closingTime"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrimaryFilter from "@/components/formComponents/PrimaryFilter.vue";
import RestaurantCard from "@/components/pagesComponents/RestaurantCard.vue";
import { onMounted, ref } from "vue";
import { useAxios } from "@/lib/composables/useAxios";
import type { Restaurants } from "@/types/Restaurants";

const restaurants = ref<[]>([]);



onMounted(async () => {
  try {
    const {data} = await useAxios.get("restaurants");

    const modifyData = data.map((element : Restaurants)=>{
      element.profilPicture = element.profilPicture.replace("upload" , "uploads")
      const pictureUrl =`http://localhost:3000/${element.profilPicture}`
      return {
        element,
        profilPicture : pictureUrl
      }
    })

    restaurants.value = modifyData;
    console.log( restaurants.value);
  }
  catch(err){
    console.log(err);
  }
});

</script>

<style scoped>

</style>
