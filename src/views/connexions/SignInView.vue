<template>
  <div>
    <SignInForm formTitle="Connexion" @send:formDatas="submitDatas" />
  </div>
</template>

<script setup lang="ts">
import SignInForm from "@/components/connexionsComponents/SignInForm.vue";
import type { RegistFormDatas } from "@/types/registFormDatas";
import { useAxios } from "@/lib/composables/useAxios";
import { useRouter } from "vue-router";


const Router = useRouter();
async function submitDatas(formDatas : RegistFormDatas) {
  try {
    useAxios.post("signin", formDatas).then((result: any) =>{
      localStorage.setItem("jwtToken", result.data);
      Router.push("/profil");
    });
  } catch (err) {
    console.log(err);
  }


}
</script>

<style scoped></style>
