<template>
  <div class="w-full">
    <form class=" space-y-2 py-2 overflow-hidden" action="#" @submit.prevent="submitFormData">
      <h2 class="text-center text-md font-semibold uppercase text-gray-600 py-2">
          Les preferences gastonomique
        </h2>
      <div class="grid grid-cols-6 grid-flow-row gap-3 py-8">
        
        <div
          class="col-span-3 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="cusine-africaine"
            id="choixgastronimique1"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-orange-600 peer-checked:bg-orange-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique1"
          >
          </label>
          <span class="pointer-events-none z-10">Cusine Africaine</span>
        </div>

        <div
          class=" col-span-3 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="cusine-occidentale"
            id="choixgastronimique2"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-sky-500 peer-checked:bg-sky-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique2"
          >
          </label>
          <span class="pointer-events-none z-10">Cusine Occidentale</span>
        </div>

        <div
          class=" col-span-2 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="sans-gluten"
            id="choixgastronimique3"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-red-500 peer-checked:bg-red-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique3"
          >
          </label>
          <span class="pointer-events-none z-10">Sans gluten</span>
        </div>

        <div
          class=" col-span-2 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="Vegetalien"
            id="choixgastronimique4"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-primary-500 peer-checked:bg-primary-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique4"
          >
          </label>
          <span class="pointer-events-none z-10">Vegetalien</span>
        </div>

        <div
          class=" col-span-2 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="pLat-sain"
            id="choixgastronimique5"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-teal-500 peer-checked:bg-teal-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique5"
          >
          </label>
          <span class="pointer-events-none z-10">PLat sain</span>
        </div>

        <div
          class=" col-span-3 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="cuisine-de-rue"
            id="choixgastronimique6"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-rose-500 peer-checked:bg-rose-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique6"
          >
          </label>
          <span class="pointer-events-none z-10">Cuisine de rue</span>
        </div>

        <div
          class=" col-span-2 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="fastFood"
            id="choixgastronimique7"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-purple-500 peer-checked:bg-purple-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique7"
          >
          </label>
          <span class="pointer-events-none z-10"> FastFood </span>
        </div>

        <div
          class=" col-span-3 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            value="cuisine-japonaise"
            id="choixgastronimique8"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-amber-500 peer-checked:bg-amber-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique8"
          >
          </label>
          <span class="pointer-events-none z-10">Cuisine Japonaise</span>
        </div>

        <div
          class=" col-span-3 relative flex items-center justify-center rounded-full bg-gray-50 px-4 py-3 font-medium text-gray-700"
        >
          <input
            class="peer hidden"
            type="checkbox"
            name="cuisine-chinoise"
            id="choixgastronimique9"
            v-model="choixgastronimique"
          />
          <label
            class="peer-checked:border-emerald-500 peer-checked:bg-emerald-200 absolute top-0 h-full w-full cursor-pointer rounded-full border"
            for="choixgastronimique9"
          >
          </label>
          <span class="pointer-events-none z-10">Cuisine Chinoise</span>
        </div>
      
      </div>

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
import { useAxios } from "@/lib/composables/useAxios";
import { useRouter } from "vue-router";

const accountType = ref<string>(
  JSON.parse(`${localStorage.getItem("authUser")}`).userId["accountType"]
);
const choixgastronimique = ref<[]>([]);
const Router = useRouter();

async function submitFormData(){
  if(accountType.value == "consumer")  await useAxios.patch("consumers" , {foodPreferences : choixgastronimique.value} )
  if(accountType.value == "restaurant")  await useAxios.patch("restaurants" , {carteGastro : choixgastronimique.value} )
  return Router.push("/payment-infos")
}

</script>

<style scoped></style>
