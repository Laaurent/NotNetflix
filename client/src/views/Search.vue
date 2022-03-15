<template>
  <div class="bg-neutral-900 text-sm text-white">
    <header>
      <NavbarComponent></NavbarComponent>
    </header>
    <div class="px-12" v-if="shows">
      <ul v-for="show in shows" :key="show.score">
        <li v-if="show.show.name">{{ show.show.name }}</li>
        <li v-if="show.show.summary">
          <span v-html="show.show.summary"></span>
        </li>
        <li v-if="show.show.image">
          <img v-if="show.show.image.medium" :src="show.show.image.medium" />
          <img
            v-else-if="show.show.image.original"
            :src="show.show.image.original"
          />
        </li>
      </ul>
    </div>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import FooterComponent from "@/components/layouts/FooterComponent.vue";
import { onMounted, ref, toRefs, watch } from "vue";
import { useShows } from "@/store/useShows";
export default {
  name: "Search",
  components: { NavbarComponent, FooterComponent },
  props: ["query"],
  setup(props) {
    const { query } = toRefs(props);
    const store = useShows();
    let shows = ref(null);

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

    return { query, shows };
  },
};
</script>

<style></style>
