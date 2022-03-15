<script>
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import IconsComponent from "@/components/IconsComponent.vue";
import { useAuth } from "@/store/useAuth";
import { useRouter } from "vue-router";

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
    const router = useRouter();
    const store = useAuth();
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
        });
    }
    return { form, store, submitForm };
  },
};
</script>

<template>
  <div class="bg-neutral-900 text-sm text-white">
    <div
      class="bg-[url('/img/bg-large-login.jpg')] h-screen flex items-center justify-center"
    >
      <div class="bg-gradient-to-tr h-full w-full from-neutral-900"></div>
      <header class="absolute top-0 left-0">
        <IconsComponent icon="logo"></IconsComponent>
      </header>
      <div class="absolute bg-black p-24 rounded">
        <form
          class="flex flex-col gap-y-8 items-center justify-center"
          @submit.prevent="submitForm"
        >
          <input
            class="w-full h-50 text-black"
            type="email"
            name="email"
            placeholder="Email ou numéro de téléphone"
            v-model="form.email"
          />
          <input
            class="w-full h-50 text-black"
            type="password"
            name="password"
            placeholder="Mot de passe"
            v-model="form.password"
          />
          <button type="submit" class="bg-red-600 w-full p-4 rounded">
            S'identifier
          </button>
        </form>
      </div>
    </div>

    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>
