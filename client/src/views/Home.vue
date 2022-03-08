<script>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import { useShows } from "@/store/useShows";

import { onMounted, ref } from "@vue/runtime-core";
import PreviewComponent from "@/components/layouts/PreviewComponent.vue";
import CardComponent from "@/components/layouts/CardComponent.vue";
import axios from "axios";
export default {
   name: "Home",
   components: {
      HeaderComponent,
      SliderComponent,
      PreviewComponent,
      CardComponent,
   },
   setup() {
      let is_open = ref(false);
      let show_episodes = ref(null);
      let show_cast = ref(null);
      let show_tmp = null;
      const categories = ["success", "trends", "news", "top", "documentary"];
      const store = useShows();

      onMounted(() => {
         categories.forEach((cat, idx) => store.getShows(idx));
      });
      let shows = ref(store.shows);

      async function getShowEpisodes(id = 0) {
         try {
            show_episodes.value = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
         } catch (error) {
            console.error(error);
         }
      }

      return { show_tmp, is_open, store, categories, shows, show_episodes, getShowEpisodes };
   },
};
</script>

<template>
   <article>
      <header>
         <HeaderComponent></HeaderComponent>
      </header>
      <div class="px-12">
         <SliderComponent v-for="(category, idx) in categories" :key="category" :shows="shows[idx]" :title="category">
            <CardComponent
               v-for="(show, index) in shows[idx]"
               :key="'item-' + category + '_' + index"
               :item="show"
               @click="
                  is_open = true;
                  show_tmp = show;
                  getShowEpisodes(show_tmp.id);
               "
            ></CardComponent>
         </SliderComponent>
      </div>
      <PreviewComponent :show="show_tmp" :show_episodes="show_episodes" :is_open="is_open" @update:is_open="is_open = $event"></PreviewComponent>
   </article>
</template>
