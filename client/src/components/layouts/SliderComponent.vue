<template>
   <div class="slider-container px-12 mb-12">
      <h3 class="text-lg">{{ array_title[title] }}</h3>
      <div class="slider-container__items flex gap-2 flex-nowrap w-full overflow-x-auto py-4">
         <div
            style="background-image: url('https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg')"
            class="item w-36 h-56 flex-none bg-center bg-cover rounded"
            v-for="(item, index) in data"
            :key="'item-' + title + '_' + index"
         ></div>
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
