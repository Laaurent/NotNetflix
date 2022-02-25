<script setup>
import ButtonRepo from "@/components/ButtonRepo.vue";
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
</script>

<template>
   <header>
      <HeaderComponent></HeaderComponent>
   </header>
   <div class="px-12">
      <SliderComponent title="success"></SliderComponent>
      <SliderComponent title="trends"></SliderComponent>
      <SliderComponent title="news"></SliderComponent>
      <SliderComponent title="top"></SliderComponent>
      <SliderComponent title="documentary"></SliderComponent>
   </div>
</template>
