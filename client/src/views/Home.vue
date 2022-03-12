<script>
import HeroComponent from "@/components/layouts/HeroComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import { useShows } from "@/store/useShows";

import { onMounted, ref } from "@vue/runtime-core";
import PreviewComponent from "@/components/layouts/PreviewComponent.vue";
import CardComponent from "@/components/layouts/CardComponent.vue";
export default {
  name: "Home",
  components: {
    HeroComponent,
    SliderComponent,
    PreviewComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
  },
  setup() {
    let is_open = ref(false);
    const categories = ["success", "trends", "news", "top", "documentary"];
    const store = useShows();
    onMounted(() => {
      categories.forEach((cat, idx) => store.getShows(idx));
    });
    let shows = ref(store.shows);
    /* let shows = ref([]); */
    return { is_open, store, categories, shows };
  },
};
</script>

<template>
  <div  class="bg-neutral-900 text-sm text-white">
    <header>
      <NavbarComponent></NavbarComponent>
    </header>
    <article>
      <section>
        <HeroComponent></HeroComponent>
      </section>
      <div class="px-12">
        <SliderComponent
          v-for="(category, idx) in categories"
          :key="category"
          :shows="shows[idx]"
          :title="category"
        >
          <CardComponent
            v-for="(show, index) in shows[idx]"
            :key="'item-' + category + '_' + index"
            :item="show"
            @click="is_open = true"
          ></CardComponent>
        </SliderComponent>
      </div>
      <PreviewComponent
        :is_open="is_open"
        @update:is_open="is_open = $event"
      ></PreviewComponent>
    </article>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>
