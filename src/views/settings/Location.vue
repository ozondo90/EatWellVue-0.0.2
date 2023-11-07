<template>
  <div class="w-full">
    <form class="flex flex-col gap-y-5 pt-8 pb-1" action="#" enctype="multipart/form-data" @submit.prevent="submitFormData">
      <div class="flex lg:justify-between items-center sm:flex-wrap">
        <div class="lg:w-5/12">
          <label
            for="country"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Pays</label
          >
          <select
            id="country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            v-model="country"
          >
            <option selected>Chosiez votre pays</option>
            <option value="benin">Benin</option>
            <option value="togo">Togo</option>
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="ivory-coast">Cote-D'ivoir</option>
          </select>
        </div>
        <div class="lg:w-5/12">
          <label
            for="town"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Ville</label
          >
          <select
            id="town"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            v-model="town"
          >
            <option selected>Choisir la ville</option>
            <option value="cotonou">Cotonou</option>
            <option value="porto-novo">Porto-Novo</option>
            <option value="lome">Lomé</option>
            <option value="accra">Accra</option>
            <option value="lagos">Lagos</option>
            <option value="Abuja">Abuja</option>
          </select>
        </div>
      </div>

      <div class="" v-if="consumerAccount">
        <label
          for="addressResidence"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Adresse residence</label
        >
        <input
          type="address"
          name="addressResidence"
          id="addressResidence"
          placeholder="votre adresse de residence"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="residentialAddress"
        />
      </div>

      <div class="">
        <label
          for="officeAddress"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Addresse professionne / Adresse du restaurant</label
        >
        <input
          type="address"
          name="officeAddress"
          id="officeAddress"
          placeholder="Votre adresse professionnelle"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="professionnalAddress"
        />
      </div>

      <fieldset
        class="flex lg:justify-between items-center sm:flex-wrap border-2 p-4 rounded-md"
        v-if="restaurantAccount"
      >
        <legend class="text-md font-medium text-gray-900 dark:text-white">
          Cordonnées geographiques
        </legend>
        <div class="lg:w-5/12">
          <label
            for="longitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Longitude</label
          >
          <input
            type="number"
            name="longitude"
            id="longitude"
            placeholder="00.00"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            v-model="longitude"
          />
        </div>

        <div class="lg:w-5/12">
          <label
            for="latitude"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Latitude</label
          >
          <input
            type="number"
            name="latitude"
            id="latitude"
            placeholder="00.00"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            v-model="latitude"
          />
        </div>
      </fieldset>

      <div class="flex justify-center items-center gap-10">
        <button
          type="button"
          class="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Retour
        </button>
        <button
          type="submit"
          class="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Suivant
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Consumers } from "@/types/Consumers";
import type { Restaurants } from "@/types/Restaurants";
import { useAxios } from "@/lib/composables/useAxios";
import { useRouter } from "vue-router";

const accountType = ref<string>(
  JSON.parse(`${localStorage.getItem("authUser")}`).userId["accountType"]
);
const restaurantAccount = ref<boolean>(false);
const consumerAccount = ref<boolean>(false);
const Router = useRouter();

const country = ref<string>("");
const town = ref<string>("");
const residentialAddress = ref<string>("");
const professionnalAddress = ref<string>("");
const longitude = ref<string>("");
const latitude = ref<string>("");


switch(accountType.value){
  case "consumer" : consumerAccount.value = true;
  break;
  case "restaurant" : restaurantAccount.value = true;
  default: break;
}

async function submitFormData() {
  try {

    useAxios.cliHttp.interceptors.request.use( (config : any) => { 
      config.headers["Content-Type"] = "multipart/form-data";
      return config
    })

    const formData = new FormData();
    formData.append("country" , country.value)
    formData.append("town", town.value);
    formData.append("professionnalAddress", professionnalAddress.value);

    if(accountType.value == "consumer" || residentialAddress.value != ""){
      formData.append("residentialAddress", residentialAddress.value);
    }

    if( latitude.value !== "" ){
      formData.append("latitude" , latitude.value)
    }

    if( longitude.value !== ""){
      formData.append("longitude", longitude.value);
    }

    const resp = await useAxios.patch(`${accountType.value}s`, formData);

    country.value = "";
    town.value =  "";
    residentialAddress.value = "";
    professionnalAddress.value =  "";
    latitude.value = "";
    longitude.value =  "";

    Router.push("/preferences")

  } catch (err) {
    console.log(err);
  }
}

</script>

<style scoped></style>
