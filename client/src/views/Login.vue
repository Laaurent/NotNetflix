<script>
import { useShows } from "@/store/useShows";
import IconsComponent from "@/components/IconsComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
export default {
  name: "LogIn",
  components: {
    IconsComponent,
    FooterComponent
  },
  setup() {
    const store = useShows();

    return { store };
  },
};
</script>

<template>
  <div class="bg-neutral-900 text-sm text-white">
    <header>
      <IconsComponent icon="logo"></IconsComponent>
    </header>
    <article></article>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>
