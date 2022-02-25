<script setup>
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
</script>

<template>
  <div>
    <header>
      <NavbarComponent></NavbarComponent>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
