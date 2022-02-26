<template>
  <section>
    <div
      style="
        background-image: url('https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg');
      "
      class="item h-56 w-36 flex-none scale-100 cursor-pointer overflow-hidden rounded bg-cover bg-center transition delay-100 duration-150 hover:mx-2 hover:flex-auto hover:scale-125"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div
        v-show="isHovered"
        class="absolute bottom-0 bg-neutral-800 p-2 opacity-90"
      >
        <!-- BUTTON -->
        <div class="flex justify-center pb-1">
          <button class="hover:opacity-80">
            <IconsComponent icon="play" color="white" />
          </button>
          <button class="hover:opacity-80">
            <IconsComponent icon="plus" color="white" />
          </button>
          <button class="hover:opacity-80" @click="getInfos">
            <IconsComponent icon="downChevron" color="white" />
          </button>
        </div>

        <!-- INFOS -->
        <div class="text-left text-xs">
          <span>{{ seasons }} season{{ seasons > 1 ? "s" : "" }}</span>
        </div>

        <!-- GENRES -->
        <div class="text-left text-xs">{{ genres }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import IconsComponent from "../IconsComponent.vue";

export default {
  props: ["item"],
  components: { IconsComponent },
  setup() {
    // get info via api
    let isHovered = ref(false);
    let genres = ref(["Drama", "Crime", "Thriller"]);
    genres = genres.value.join(" • ");
    let seasons = ref(5);

    // Open modale with show informations
    const getInfo = () => {
      console.log("here");
    };
    return { isHovered, genres, seasons, getInfo };
  },
};
</script>

<style></style>
