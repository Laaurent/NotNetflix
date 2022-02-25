<script setup>
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import FooterComponent from "./components/layouts/FooterComponent.vue";
</script>

<template>
   <div class="bg-neutral-900 text-white text-sm">
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
