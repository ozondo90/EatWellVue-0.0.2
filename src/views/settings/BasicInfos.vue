<template>
  <div class="w-full">
    <form
      class="flex flex-col gap-y-5 py-8"
      action=""
      enctype="multipart/form-data"
      @submit.prevent="submitBasicInfos"
    >
      <div class="relative">
        <img
          class="rounded-full w-24 h-24 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          :src="filePath ? filePath : '../../../public/150x150.png'"
          alt="picture"
        />
        <input
          type="file"
          name="profilPicture"
          id="profilPicture"
          class="hidden"
          ref="fileInput"
          @change="handleFileChange"
        />
        <span
          class="rounded-full w-24 h-24 absolute tp-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-400 opacity-10 cursor-pointer"
          @click="openFileInput"
        >
          <IconAdd class="" />
        </span>
      </div>

      <div class="mt-8">
        <label
          for="firstName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nom</label
        >
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="votre prenom"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="firstName"
        />
      </div>

      <div class="">
        <label
          for="lastName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nom</label
        >
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Votre nom"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="lastName"
        />
      </div>

      <div class="">
        <label
          for="phoneNumber"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Votre numero de telephone</label
        >
        <input
          type="phone"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="62 18 00 03"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="phone"
        />
      </div>

      <div class="">
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
import IconAdd from "@/components/icons/IconAdd.vue";
import type { Consumers } from "@/types/Consumers";
import { useAxios } from "@/lib/composables/useAxios";
import { useRouter } from "vue-router";

const fileInput = ref<any>(null);
const filePath = ref<any>("");
const firstName = ref<string>("");
const lastName = ref<string>("");
const phone = ref<string>("");
const Router = useRouter();

function openFileInput() {
  // Click the hidden file input
  fileInput.value.click();
}

function handleFileChange() {
  if (fileInput.value.files[0])
    localStorage.setItem(
      "consumerProfilPic",
      URL.createObjectURL(fileInput.value.files[0])
    );
  return (filePath.value = localStorage.getItem("consumerProfilPic"));
}

async function submitBasicInfos() {
  try {
    useAxios.cliHttp.interceptors.request.use( (config : any) => { 
      config.headers["Content-Type"] = "multipart/form-data";
      return config
    })

    const formData = new FormData();
    formData.append("file" , fileInput.value.files[0])
    formData.append("firstName", firstName.value);
    formData.append("lastName", lastName.value);
    formData.append("phone", phone.value);

    const resp = await useAxios.patch("consumers", formData);

    fileInput.value = null;
    firstName.value =  "";
    lastName.value = "";
    phone.value =  "";

    return Router.push("/location")

  } catch (err) {
    console.log(err);
  }
}
</script>

<style scoped></style>
