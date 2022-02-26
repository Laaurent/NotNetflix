<script>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
export default {
  name: "Home",
  components: {
    HeaderComponent,
    SliderComponent,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  },
};
</script>

<template>
  <article>
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
  </article>
</template>
