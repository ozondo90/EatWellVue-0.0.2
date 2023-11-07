<template>
  <SignUpForm formTitle="Creation de compte" @send:formDatas="submitDatas"/>
</template>

<script setup lang="ts">
import SignUpForm from '@/components/connexionsComponents/SignUpForm.vue';
import type { RegistFormDatas } from "@/types/registFormDatas";
import  {useAxios} from '@/lib/composables/useAxios';
import { useRouter } from "vue-router";

const Router = useRouter()

async function submitDatas(formDatas : RegistFormDatas){
  try{
    
    const resp  = await useAxios.post("signup" , {
    email : formDatas.email,
    password : formDatas.password,
    userName : formDatas.userName,
    accountType : formDatas.accountType
  })
  console.log(resp);
  Router.replace("/signin")
  }catch(err : any){
    console.log(err.response);
  }
};

</script>

<style scoped>

</style>