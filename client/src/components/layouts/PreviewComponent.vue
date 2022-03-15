<template>
   <TransitionRoot
      appear
      :show="is_open"
      enter="duration-300 ease-out"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="duration-200 ease-in"
      leave-from="opacity-100"
      leave-to="opacity-0"
   >
      <Dialog
         :open="is_open"
         @close="
            setIsOpen(false);
            season = 1;
         "
         class="fixed inset-0 z-30 overflow-y-auto"
      >
         <div class="flex items-center justify-center min-h-screen">
            <DialogOverlay class="fixed inset-0 bg-black opacity-70" />

            <div class="relative mx-auto bg-neutral-900 pb-6 rounded text-white w-mysize rounded-xl overflow-hidden my-10">
               <DialogTitle>
                  <div class="header">
                     <div class="px-12 header__text z-10 h-mysize w-full flex absolute flex-col justify-between py-8">
                        <div class="header__text_close flex flex-row-reverse">
                           <button
                              @click="
                                 setIsOpen(false);
                                 season = 1;
                              "
                           >
                              <IconsComponent icon="close" color="white"></IconsComponent>
                           </button>
                        </div>
                        <div class="header__text_content flex flex-col gap-2 py-4">
                           <h2 class="text-3xl font-semibold" v-html="show.name"></h2>
                           <div class="header__text_content_buttons flex gap-2 items-center">
                              <button class="btn flex items-center gap-2 px-5 py-1 text-xl rounded bg-white text-black" @click="goToUrl()">
                                 <IconsComponent icon="play" color="black"></IconsComponent>
                                 Lecture
                              </button>
                              <IconsComponent icon="comment" :color="comment ? 'black' : 'white'" @click="comment = !comment"></IconsComponent>
                              <IconsComponent icon="like" color="white"></IconsComponent>
                           </div>
                        </div>
                     </div>
                     <div class="header__gradient bg-gradient-to-t w-full absolute h-5/6 h-mysize w-full from-neutral-900"></div>
                     <div class="header__bg h-mysize bg-center bg-cover" :style="'background-image: url(\'' + show.image.original + '\')'"></div>
                  </div>
               </DialogTitle>

               <div class="px-12 flex flex-col gap-8">
                  <DialogDescription>
                     <div class="mb-6" v-if="comment">
                        <label for="comment text-sm">Ajouter un commentaire</label>
                        <textarea
                           class="focus:outline-none focus:border-sky-500 w-full h-24 rounded resize-none bg-neutral-800 border-none"
                           id="comment"
                           cols="30"
                           rows="10"
                           placeholder="laissez un commentaire ..."
                        ></textarea>
                        <button class="btn bg-neutral-800 px-4 py-1 rounded hover:bg-neutral-700">Envoyer</button>
                     </div>

                     <div class="description flex gap-10">
                        <div class="description__left flex-auto flex flex-col gap-6">
                           <div class="description__left_header flex items-center gap-2">
                              <span>
                                 <RatingComponent :rate="show.rating.average"></RatingComponent>
                              </span>
                              <span class="font-light">{{ show.premiered.slice(0, 4) }}</span>
                              <span class="font-semibold">5 saisons</span>
                           </div>
                           <div class="description__left_resume">
                              <p class="text-sm" v-html="show.summary.slice(3).slice(0, -4)"></p>
                           </div>
                        </div>
                        <div class="description__right flex-none w-60 flex flex-col gap-4 text-sm">
                           <p><span class="text-neutral-500">Network :</span> {{ show.network.name }}</p>
                           <p class="break-normal"><span class="text-neutral-500">Genres :</span> {{ show.genres.join(", ") }}</p>
                        </div>
                     </div>
                  </DialogDescription>

                  <div>
                     <div class="episode-header flex justify-between py-4 relative">
                        <h3 class="font-semibold text-2xl">Épisodes</h3>
                        <Menu>
                           <MenuButton
                              class="font-semibold bg-neutral-800 border-2 border-neutral-700 py-2 px-4 text-lg flex items-center gap-2"
                              @click="menu_season = !menu_season"
                              >Season {{ season }} <IconsComponent v-if="!menu_season" icon="caret_down" color="white"></IconsComponent
                              ><IconsComponent v-else icon="caret_up" color="white"></IconsComponent
                           ></MenuButton>
                           <MenuItems class="my-1 flex flex-col absolute bg-neutral-800 border-2 border-neutral-700 py-4 right-0 top-16">
                              <MenuItem class="px-6 py-1" v-slot="{ active }" v-for="i in show_episodes.data[show_episodes.data.length - 1].season" :key="i">
                                 <button :class="{ 'bg-neutral-700': active }" class="text-sm" @click="season = i">
                                    <span class="text-lg font-semibold"> Season {{ i }}</span> ({{
                                       show_episodes.data.filter((element) => element.season == i).length
                                    }}
                                    épisodes)
                                 </button>
                              </MenuItem>
                           </MenuItems>
                        </Menu>
                     </div>
                     <section class="flex flex-col" v-if="show_episodes">
                        <hr style="border: 0.5px solid #303030" />

                        <pulse-loader
                           class="w-full my-10 flex justify-center"
                           v-if="!show_episodes.data"
                           :loading="true"
                           color="#262626"
                           size="16px"
                        ></pulse-loader>
                        <EpisodeCardComponent
                           v-else
                           v-for="(episode, index) in show_episodes.data.filter((element) => element.season == season)"
                           :key="'episode_' + index"
                           :episode="episode"
                           :index="index + 1"
                           @click="goToUrl()"
                        ></EpisodeCardComponent>
                     </section>
                  </div>
                  <div>
                     <h2 class="text-xl">
                        À propos de <strong>{{ show.name }}</strong>
                     </h2>
                  </div>
                  <div class="description__right flex-none w-full flex flex-col gap-1 text-sm">
                     <p><span class="text-neutral-500">Creator :</span> {{ show.network.name }}</p>
                     <p class="break-normal"><span class="text-neutral-500">Distributions :</span> {{ cast }}</p>
                     <p><span class="text-neutral-500">Genres :</span> {{ show.genres.join(", ") }}</p>
                  </div>
               </div>
            </div>
         </div>
      </Dialog>
   </TransitionRoot>
</template>

<script>
import { ref, toRefs, computed, watch } from "vue";
import { TransitionRoot, Dialog, DialogOverlay, DialogTitle, DialogDescription, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import IconsComponent from "../IconsComponent.vue";
import RatingComponent from "./RatingComponent.vue";
import EpisodeCardComponent from "./EpisodeCardComponent.vue";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
export default {
   props: ["is_open", "show", "show_episodes"],
   components: {
      TransitionRoot,
      Dialog,
      DialogOverlay,
      DialogTitle,
      DialogDescription,
      IconsComponent,
      RatingComponent,
      Menu,
      MenuButton,
      MenuItems,
      MenuItem,
      EpisodeCardComponent,
      PulseLoader,
   },
   setup(props, { emit }) {
      let season = ref(1);
      let menu_season = ref(false);
      let cast = ref(null);
      const { show } = toRefs(props);
      let show_cast = ref(null);
      let comment = ref(false);

      async function getShowCast(id = 0) {
         try {
            show_cast.value = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
            cast.value = formatShowCast(show_cast.value.data);
            /*  console.log(cast); */
         } catch (error) {
            console.error(error);
         }
      }
      function formatShowCast(array_cast) {
         let array = [];
         if (array_cast)
            array_cast.forEach((element) => {
               array.push(element.person.name);
            });

         return array.join(", ");
      }

      function goToUrl() {
         window.open(`https://www.youtube.com/results?search_query=${show.value.name}+season+${season.value}`, "_blank");
      }

      watch(show, (newV) => {
         if (newV) {
            getShowCast(show.value.id);
         }
      });

      return {
         comment,
         season,
         menu_season,
         cast,
         show_cast,
         getShowCast,
         formatShowCast,
         goToUrl,
         setIsOpen(value) {
            emit("update:is_open", value);
         },
      };
   },
};
</script>

<style scoped>
.w-mysize {
   width: 50rem;
}
.h-mysize {
   height: 30rem;
}
textarea:focus {
   outline: none !important;
   border: none !important;
   --tw-ring-color: none;
}
</style>
