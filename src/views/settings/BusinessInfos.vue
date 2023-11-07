<template>
  <div class="w-full">
    <form
      class="flex flex-col gap-y-5 pt-8 pb-1"
      action="#"
      enctype="multipart/form-data"
      @submit.prevent="submitBusinessData"
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
          for="restaurantName"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Nom du restaurant</label
        >
        <input
          type="text"
          name="restaurantName"
          id="restaurantName"
          placeholder="nom du restaurant"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="restaurantName"
        />
      </div>

      <div class="">
        <label
          for="emailContact"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email de contact</label
        >
        <input
          type="email"
          name="emailContact"
          id="emailContact"
          placeholder="email de contact"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
          required
          v-model="emailContact"
        />
      </div>

      <div class="">
        <label
          for="phoneNumber"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Numero de telephone du restaurant</label
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

      <div class="flex justify-between items-center flex-wrap">
        <div class="min-w-[45%]">
          <label
            for="openingTime"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Heure d'ouverture</label
          >
          <input
            type="time"
            name="openingTime"
            id="openingTime"
            placeholder="08:00"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            required
            v-model="openingTime"
          />
        </div>
        <div class="min-w-[45%]">
          <label
            for="closingTime"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Heure de fermeture</label
          >
          <input
            type="time"
            name="closingTime"
            id="closingTime"
            placeholder="18:00"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            required
            v-model="closingTime"
          />
        </div>
      </div>

      <div class="w-full">
        <label
          for="openingDays"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Les jours d'ouverture</label
        >
        <select
          multiple
          id="openingDays"
          placeholder="Choisir les jours d'ouverture..."
          autocomplete="off"
          class="form-multiselect block w-full rounded-sm cursor-pointer focus:outline-none"
          v-model="openingDays"
        >
          <option value="dimanche">Dimanche</option>
          <option value="lundi">Lundi</option>
          <option value="mardi">Mardi</option>
          <option value="mercredi">Mercredi</option>
          <option value="jeudi">Jeudi</option>
          <option value="vendredi">Vendredi</option>
          <option value="samedi">Samedi</option>
        </select>
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
import IconAdd from "@/components/icons/IconAdd.vue";
import { useAxios } from "@/lib/composables/useAxios";
import { useRouter } from "vue-router";

const fileInput = ref<any>("");
const filePath = ref<any>("");
const Router = useRouter();

const restaurantName = ref<string>("");
const emailContact = ref<string>("");
const phone = ref<string>("");
const openingTime = ref<string>("");
const closingTime = ref<string>("");
const openingDays = ref<[]>([]);

function openFileInput() {
  // Click the hidden file input
  fileInput.value.click();
}

function handleFileChange() {
  if (fileInput.value.files[0])
    localStorage.setItem(
      "restaurantProfilPic",
      URL.createObjectURL(fileInput.value.files[0])
    );
  return (filePath.value = localStorage.getItem("restaurantProfilPic"));
}

async function submitBusinessData() {
  try {
    useAxios.cliHttp.interceptors.request.use((config: any) => {
      config.headers["Content-Type"] = "multipart/form-data";
      return config;
    });

    const formData = new FormData();
    formData.append("file", fileInput.value.files[0]);
    formData.append("restaurantName", restaurantName.value);
    formData.append("emailContact", emailContact.value);
    formData.append("phone", phone.value);
    formData.append("openingTime", openingTime.value);
    formData.append("closingTime", closingTime.value);
    formData.append("openingDays", JSON.stringify(openingDays.value));


    const resp = await useAxios.patch("restaurants", formData);

    fileInput.value = null;
    restaurantName.value = "";
    emailContact.value = "";
    phone.value = "";
    openingTime.value = "";
    closingTime.value = "";
    openingDays.value = [];

    return Router.push("/location");
  } catch (err) {
    console.log(err);
  }
}
</script>

<style scoped></style>
