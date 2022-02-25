<template>
   <div>
      <div class="z-10 h-mysize flex absolute">
         <div class="item px-12 w-3/5 self-center flex flex-col gap-4">
            <div class="item__title">
               <h1 class="text-4xl">Breaking Bad</h1>
            </div>
            <div class="item__resume">
               <p class="line-clamp-3">
                  <b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has
                  cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness
                  based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and
                  crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily
                  concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.
               </p>
            </div>
            <div class="item_actions flex gap-2">
               <button class="btn flex items-center gap-2 px-5 py-2 text-xl rounded bg-white text-black">
                  <IconsComponent icon="play" color="black"></IconsComponent>
                  Lecture
               </button>
               <button class="btn flex items-center gap-2 px-5 py-2 text-xl rounded bg-neutral-500">
                  <IconsComponent icon="info" color="white"></IconsComponent>
                  Plus d'infos
               </button>
            </div>
         </div>
      </div>
      <div class="bg-gradient-to-t absolute h-5/6 h-mysize w-screen from-neutral-900"></div>

      <div class="h-mysize bg-center bg-cover" style="background-image: url('https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg')"></div>
   </div>
</template>

<script>
import IconsComponent from "../IconsComponent.vue";
export default { components: { IconsComponent } };
</script>

<style>
.h-mysize {
   height: 65vh;
}
</style>
