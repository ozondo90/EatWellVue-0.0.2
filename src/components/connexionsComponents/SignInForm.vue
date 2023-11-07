<template>
  <div class="flex flex-col items-center justify-center p-1">
    <RouterLink to="/" class="flex items-center justify-center">
      <IconSecondaryEatWell class="mr-2 h-6 sm:h-9" alt="EatWell Logo" />
      <span
        class="self-center text-xl font-bold whitespace-nowrap dark:text-white"
        >EatWell
      </span>
    </RouterLink>

    <div class="w-full space-y-2 md:space-y-4 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        {{ formTitle }}
      </h1>
      <form
        class="space-y-2 md:space-y-4"
        action="#"
        @submit.prevent="sendDatas"
      >
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Votre email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="name@company.com"
            required
            v-model="formDatas.email"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Mot de passe</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            required
            v-model="formDatas.password"
          />
        </div>
        <button
          type="submit"
          class="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Se connecter
        </button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Pas encore inscris?
          <RouterLink
            to="/signup"
            href="#"
            class="font-medium text-purple-600 hover:underline dark:text-purple-500"
            >Creer un compte ici</RouterLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconSecondaryEatWell from "../icons/IconSecondaryEatWell .vue";
import type { RegistFormDatas } from "@/types/registFormDatas";
const formDatas = ref<RegistFormDatas>({
  email: "",
  password: "",
});

const props = defineProps<{
  formTitle?: string;
}>();

const emits = defineEmits(["send:formDatas"]);
function sendDatas() {
  emits("send:formDatas", formDatas.value);
  formDatas.value = {
    email: "",
    password: "",
  };
}
</script>

<style scoped></style>
