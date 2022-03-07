<template>
   <article class="w-full flex py-5 gap-7 items-center" style="border-bottom: 0.5px solid #303030">
      <h2 class="text-2xl">{{ index }}</h2>
      <img class="flex-none w-40 rounded" :src="episode.image.medium" :alt="'episode' + index" />
      <div class="">
         <div class="flex justify-between pb-2">
            <h6 class="text-sm">Episode {{ index }}</h6>
            <h6 class="text-sm">{{ episode.airtime.slice(0, 2) }}min</h6>
         </div>

         <p class="text-xs line-clamp-3">
            {{ episode.summary.slice(3).slice(0, -4) }}
         </p>
      </div>
   </article>
</template>

<script>
export default {
   props: ["episode", "index"],
};
</script>

<style></style>
