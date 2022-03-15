<script>
import HeroComponent from "@/components/layouts/HeroComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import { useShows } from "@/store/useShows";

import { onMounted, computed, ref } from "@vue/runtime-core";
import PreviewComponent from "@/components/layouts/PreviewComponent.vue";
import CardComponent from "@/components/layouts/CardComponent.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
   name: "Home",
   components: {
      HeroComponent,
      SliderComponent,
      PreviewComponent,
      CardComponent,
      NavbarComponent,
      FooterComponent,
      PulseLoader,
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

      const random_show = computed(() => {
         let random = Math.floor(Math.random() * shows.value.length == 0 ? 0 : shows.value.length - 1);
         return shows.value.length > 0 ? shows.value[random][Math.floor(Math.random() * shows.value[random]?.length - 1)] : null;
      });

      async function getShowEpisodes(id = 0) {
         try {
            show_episodes.value = await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`);
         } catch (error) {
            console.error(error);
         }
      }
      return {
         show_tmp,
         is_open,
         store,
         categories,
         shows,
         show_episodes,
         random_show,
         getShowEpisodes,
      };
   },
};
</script>

<template>
   <div class="bg-neutral-900 text-sm text-white">
      <header>
         <NavbarComponent></NavbarComponent>
      </header>
      <article>
         <section>
            <HeroComponent
               :show="random_show"
               @click:getInfos="
                  is_open = true;
                  show_tmp = random_show;
                  getShowEpisodes(show_tmp.id);
               "
            ></HeroComponent>
         </section>
         <div class="px-12">
            <SliderComponent v-for="(category, idx) in categories" :key="category" :shows="shows[idx]" :title="category">
               <pulse-loader class="w-full flex justify-center" v-if="!shows[idx]" :loading="true" color="#262626" size="16px"></pulse-loader>
               <CardComponent
                  v-else
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
      <footer>
         <FooterComponent></FooterComponent>
      </footer>
   </div>
</template>
