<template>
   <article class="cursor-pointer w-full flex py-5 px-10 gap-7 items-center hover:bg-neutral-800" style="border-bottom: 0.5px solid #303030">
      <h2 class="text-2xl">{{ index }}</h2>
      <img
         class="flex-none w-40 rounded"
         :src="
            episode.image
               ? episode.image.medium
               : 'https://imgs.search.brave.com/yWbQu1VePa-7D1bVsJDYPoX6KC8gp06SWvZLmqO6q_A/rs:fit:981:982:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18zODQ4MjgucG5n'
         "
         :alt="'episode' + index"
      />
      <div class="w-full">
         <div class="flex w-full justify-between pb-2">
            <h6 class="text-sm">Episode {{ index }}</h6>
            <h6 class="text-sm">{{ episode.airtime.slice(0, 2) }}min</h6>
         </div>

         <p class="text-xs line-clamp-3">
            {{ episode.summary?.slice(3).slice(0, -4) }}
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
