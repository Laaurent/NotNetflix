<template>
  <div class="slider-container mb-12">
    <h3 class="text-lg">{{ array_title[title] }}</h3>
    <div
      class="slider-container__items overflow-x-show flex h-80 w-full flex-nowrap items-center gap-2 overflow-x-auto rounded py-4 px-4"
    >
      <CardComponent
        v-for="(item, index) in data"
        :key="'item-' + title + '_' + index"
        :item="item"
      ></CardComponent>
    </div>
  </div>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "SliderComponent",
  props: ["title"],
  components: { CardComponent },
  setup() {
    let array_title = {
      success: "Les plus gros succès sur Netflix",
      trends: "Tendances actuelles",
      news: "Nouveautés",
      top: "Top 10 en France aujourd'hui",
      documentary: "Documentaires",
    };
    let data = Array(20).fill(0);
    return { array_title, data };
  },
};
</script>

<style></style>
