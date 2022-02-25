<script>
import FooterComponent from "./components/layouts/FooterComponent.vue";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
export default {
   name: "App",
   components: { FooterComponent, NavbarComponent },
};
</script>

<template>
   <div class="bg-neutral-900 text-sm text-white">
      <header>
         <NavbarComponent></NavbarComponent>
      </header>
      <main>
         <router-view />
      </main>
      <footer>
         <FooterComponent></FooterComponent>
      </footer>
   </div>
</template>
