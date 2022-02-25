<template>
   <div class="slider-container px-12 mb-12">
      <h3 class="text-lg">{{ array_title[title] }}</h3>
      <div class="slider-container__items flex gap-2 flex-nowrap w-full overflow-x-auto py-4">
         <div class="item w-40 h-24 flex-none" v-for="(item, index) in data" :key="'item-' + title + '_' + index">
            {{ item }}
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["title"],
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
