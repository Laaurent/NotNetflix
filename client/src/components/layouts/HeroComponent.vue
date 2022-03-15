<template>
   <div>
      <div class="z-10 h-mysize flex absolute">
         <div class="item px-12 w-3/5 self-center flex flex-col gap-4">
            <div class="item__title">
               <h1 class="text-4xl">{{ show?.name }}</h1>
            </div>
            <div class="item__resume">
               <p class="line-clamp-3" v-html="show?.summary.slice(3).slice(0, -4)"></p>
            </div>
            <div class="item_actions flex gap-2">
               <button class="btn flex items-center gap-2 px-5 py-2 text-xl rounded bg-white text-black" @click="goToUrl()">
                  <IconsComponent icon="play" color="black"></IconsComponent>
                  Lecture
               </button>
               <button class="btn flex items-center gap-2 px-5 py-2 text-xl rounded bg-neutral-500" @click="$emit('click:getInfos')">
                  <IconsComponent icon="info" color="white"></IconsComponent>
                  Plus d'infos
               </button>
            </div>
         </div>
      </div>
      <div class="bg-gradient-to-t absolute h-5/6 h-mysize w-full from-neutral-900"></div>

      <div class="h-mysize bg-center bg-cover" :style="'background-image: url(\'' + show?.image.original + '\')'"></div>
   </div>
</template>

<script>
import { toRefs } from "vue";
import IconsComponent from "../IconsComponent.vue";
export default {
   props: ["show"],
   components: { IconsComponent },
   setup(props) {
      const { show } = toRefs(props);

      function goToUrl() {
         window.open(`https://www.youtube.com/results?search_query=${show.value.name}+serie`, "_blank");
      }

      return { goToUrl };
   },
};
</script>

<style scoped>
.h-mysize {
   height: 65vh;
}
</style>
