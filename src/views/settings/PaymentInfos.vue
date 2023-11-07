<template>

  <div class="w-full">
    <form
      class="flex flex-col gap-y-5 pt-8 pb-1"
      action="#"
      enctype="multipart/form-data"
      @submit.prevent="submitFormData"
    >
      <div class="">
        <p class="bg-orange-100">
          Le seul mode de payement disponible à ce jour le reglement via
          <span class="text-purple-500 text-md font-bold"> Carte Bancaire</span>
        </p>
        <div class="flex justify-center items-center gap-10">
          <!-- <button
            type="submit"
            class="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Retour
          </button> -->
          <button
            type="submit"
            class="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Suivant
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const Router = useRouter();

function submitFormData(){
  Router.push("/notifications")
}

</script>

<style scoped></style>
