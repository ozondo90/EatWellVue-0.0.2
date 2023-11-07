<template>
  <div class="flex flex-col items-center justify-center p-1">
    <RouterLink to="/" class="flex items-center justify-center">
      <IconSecondaryEatWell class="mr-2 h-6 sm:h-9" alt="EatWell Logo" />
      <span
        class="self-center text-xl font-bold whitespace-nowrap dark:text-white"
        >EatWell
      </span>
    </RouterLink>

    <div class="w-full space-y-2 md:space-y-4 sm:p-6">
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
        <div
          class="flex flex-between flex-nowrap border border-gray-300 rounded-lg dark:border-gray-700 px-3 py-1"
        >
          <div class="flex justify-start items-center w-6/12">
            <input
              checked
              id="consumerAccount"
              type="radio"
              value="consumer"
              name="accounttype"
              class="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300"
              v-model="formDatas.accountType"
            />
            <label
              for="consumerAccount"
              class="w-fill py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Particulier</label
            >
          </div>
          <div class="flex justify-end items-center w-6/12">
            <input
              id="restaurantAccount"
              type="radio"
              value="restaurant"
              name="accounttype"
              class="w-5 h-5 text-purple-600 bg-gray-100 border-gray-300"
              v-model="formDatas.accountType"
            />
            <label
              for="restaurantAccount"
              class="w-fill py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >Restaurant</label
            >
          </div>
        </div>

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
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Nom d'utilisateur</label
          >
          <input
            type="text"
            name="username"
            id="username"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="nomUti78"
            required
            v-model="formDatas.userName"
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
        <div>
          <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Confirmation mot de passe</label
          >
          <input
            type="confirm-password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            required
            v-model="formDatas.confirmPassword"
          />
        </div>

        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
              required
              v-model="formDatas.isAgreedToTerms"
            />
          </div>

          <div class="ml-3 text-sm">
            <label
              for="terms"
              class="font-light text-gray-500 dark:text-gray-300"
              >Accepter les
              <RouterLink
                to="/terms_conditions"
                class="font-medium text-purple-600 hover:underline dark:text-purple-500"
                href="#"
                >Terms and Conditions</RouterLink
              ></label
            >
          </div>
        </div>

        <button
          type="submit"
          class="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Creer un compte
        </button>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Deja inscris?
          <RouterLink
            to="/signin"
            href="#"
            class="font-medium text-purple-600 hover:underline dark:text-purple-500"
            >Connectez-vous ici</RouterLink
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegistFormDatas from "@/types/registFormDatas";
import IconSecondaryEatWell from "../icons/IconSecondaryEatWell .vue";
import { ref } from "vue";

const props = defineProps<{
  formTitle?: string,
}>();

const formDatas = ref<RegistFormDatas>({
  email: "",
  userName: "",
  password: "",
  accountType: "consumer",
  confirmPassword: "",
  isAgreedToTerms: false,
});

const emits = defineEmits(["send:formDatas"]);
const sendDatas = () => {
  emits("send:formDatas", formDatas.value);
  formDatas.value = {
    email: "",
    userName: "",
    password: "",
    accountType: "consumer",
    confirmPassword: "",
    isAgreedToTerms: false,
  };
};
</script>

<style scoped></style>
