<template>
  <div class="bg-neutral-900 text-sm text-white">
    <header>
      <NavbarComponent></NavbarComponent>
    </header>
    <div class="px-12 py-20" v-if="shows">
      <SliderComponent :shows="shows" :title="'Search: ' + query">
        <pulse-loader
          class="w-full flex justify-center"
          v-if="!shows"
          :loading="true"
          color="#262626"
          size="16px"
        ></pulse-loader>
        <CardComponent
          v-else
          v-for="show in shows"
          :key="'item-' + show.show.id"
          :item="show.show"
          @click="
            show_tmp = show.show;
            is_open = true;
            getShowEpisodes(show_tmp.id);
          "
        ></CardComponent>
      </SliderComponent>
    </div>
    <PreviewComponent
      :show="show_tmp"
      :is_open="is_open"
      :show_episodes="show_episodes"
      @update:is_open="is_open = $event"
    ></PreviewComponent>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import CardComponent from "@/components/layouts/CardComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import PreviewComponent from "@/components/layouts/PreviewComponent.vue";
import { onMounted, ref, toRefs, watch } from "vue";
import { useShows } from "@/store/useShows";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
  name: "Search",
  components: {
    NavbarComponent,
    FooterComponent,
    CardComponent,
    PreviewComponent,
    SliderComponent,
    PulseLoader,
  },
  props: ["query"],
  setup(props) {
    const { query } = toRefs(props);
    const store = useShows();
    let shows = ref(null);
    let show_tmp = ref(null);
    let is_open = ref(false);
    let show_episodes = ref(null);

    watch(
      () => query.value,
      async () => {
        await store.getSearch(query.value);
        shows.value = store.search;
      }
    );

    onMounted(async () => {
      await store.getSearch(query.value);
      shows.value = store.search;
    });

    async function getShowEpisodes(id = 0) {
      try {
        show_episodes.value = await axios.get(
          `https://api.tvmaze.com/shows/${id}/episodes`
        );
      } catch (error) {
        console.error(error);
      }
    }

    return { query, shows, show_tmp, is_open, show_episodes, getShowEpisodes };
  },
};
</script>

<style></style>
