<script>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import { useShows } from "@/store/useShows";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { onMounted, ref } from "@vue/runtime-core";
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
  setup() {
    const categories = ["success", "trends", "news", "top", "documentary"];
    const store = useShows();
    onMounted(() => {
      categories.forEach((cat, idx) => store.getShows(idx));
    });
    let shows = ref(store.shows);
    return { store, categories, shows };
  },
};
</script>

<template>
  <article>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <div class="px-12">
      <SliderComponent
        v-for="(category, idx) in categories"
        :key="category"
        :shows="shows[idx]"
        :title="category"
      />
    </div>
  </article>
</template>
