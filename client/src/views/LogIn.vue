<script>
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import IconsComponent from "@/components/IconsComponent.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

import axios from "axios";
import { reactive } from "@vue/runtime-core";
export default {
   name: "LogIn",
   components: {
      FooterComponent,
      IconsComponent,
   },
   setup() {
      let form = reactive({
         email: null,
         password: null,
      });
      let error = ref(null);
      const router = useRouter();
      function submitForm() {
         axios
            .post(
               "http://localhost:4000/signin",
               { ...form },
               {
                  withCredentials: true,
               }
            )
            .then((res) => {
               console.log(res);
               router.push("/");
               this.tokenConnected = res.token;
            })
            .catch((err) => {
               console.log(err);
               error.value = "Une erreur est survenue merci de réessayer.";
            });
      }
      return { error, form, submitForm };
   },
};
</script>

<template>
   <div class="bg-neutral-900 text-sm text-white">
      <div class="bg-[url('/img/bg-large-login.jpg')] h-screen flex items-center justify-center">
         <div class="bg-gradient-to-tr h-full w-full from-neutral-900"></div>
         <header class="absolute top-0 left-0">
            <router-link to="/"> <IconsComponent icon="logo"></IconsComponent> </router-link>
         </header>
         <div class="absolute bg-opacity w-[500px] py-12 px-24 rounded">
            <h1 class="text-3xl pb-8 font-bold">S'identifier</h1>
            <form class="flex flex-col gap-y-4 items-center justify-center" @submit.prevent="submitForm">
               <input class="w-full rounded h-50 text-black" type="email" name="email" placeholder="Email ou numéro de téléphone" v-model="form.email" />
               <input class="w-full mb-8 rounded h-50 text-black" type="password" name="password" placeholder="Mot de passe" v-model="form.password" />
               <button type="submit" class="bg-red-600 w-full px-2 py-4 rounded">S'identifier</button>
               <router-link to="/signup">S'inscrire</router-link>

               <p class="text-red-800 italic text-sm" v-if="error">{{ error }}</p>
            </form>
         </div>
      </div>

      <footer>
         <FooterComponent></FooterComponent>
      </footer>
   </div>
</template>

<style>
.bg-opacity {
   background-color: rgba(23, 23, 23, 0.8);
}
</style>
