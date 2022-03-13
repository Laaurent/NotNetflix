<template>
   <div class="slider-container mb-12">
      <h3 class="text-lg">{{ array_title[title] }}</h3>
      <div class="slider-container__items overflow-x-show flex h-80 w-full flex-nowrap items-center gap-2 overflow-x-auto rounded py-4 px-4">
         <!-- <CardComponent
        v-for="(show, index) in shows"
        :key="'item-' + title + '_' + index"
        :item="show"
      ></CardComponent> -->
         <slot></slot>
      </div>
   </div>
</template>

<script>
import { toRefs } from "vue";
import CardComponent from "./CardComponent.vue";

export default {
   name: "SliderComponent",
   props: ["title", "shows"],
   components: { CardComponent },
   setup(props) {
      const { shows, title } = toRefs(props);
      let array_title = {
         success: "Les plus gros succès sur Netflix",
         trends: "Tendances actuelles",
         news: "Nouveautés",
         top: "Top 10 en France aujourd'hui",
         documentary: "Documentaires",
      };
      return { array_title, shows, title };
   },
};
</script>

<style scoped>
* {
   scrollbar-width: thin;
   scrollbar-color: black rgb(23 23 23);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
   width: 12px;
}

*::-webkit-scrollbar-track {
   background: rgb(23 23 23);
}

*::-webkit-scrollbar-thumb {
   background-color: black;
   border-radius: 20px;
   border: 3px solid rgb(23 23 23);
}
</style>
