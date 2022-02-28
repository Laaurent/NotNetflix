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
      <Dialog :open="is_open" @close="setIsOpen" class="fixed inset-0 z-30 overflow-y-auto">
         <div class="flex items-center justify-center min-h-screen">
            <DialogOverlay class="fixed inset-0 bg-black opacity-70" />

            <div class="relative mx-auto bg-neutral-900 rounded text-white w-mysize rounded-xl overflow-hidden">
               <DialogTitle>
                  <div class="header">
                     <div class="px-12 header__text z-10 h-mysize w-full flex absolute flex-col justify-between py-8">
                        <div class="header__text_close flex flex-row-reverse">
                           <button @click="setIsOpen(false)"><IconsComponent icon="close" color="white"></IconsComponent></button>
                        </div>
                        <div class="header__text_content flex flex-col gap-2 py-8">
                           <h2 class="text-3xl font-semibold">Breaking Bad</h2>
                           <div class="header__text_content_buttons flex gap-2 items-center">
                              <button class="btn flex items-center gap-2 px-5 py-1 text-xl rounded bg-white text-black">
                                 <IconsComponent icon="play" color="black"></IconsComponent>
                                 Lecture
                              </button>
                              <IconsComponent icon="plus" color="white"></IconsComponent>
                              <IconsComponent icon="like" color="white"></IconsComponent>
                           </div>
                        </div>
                     </div>
                     <div class="header__gradient bg-gradient-to-t w-full absolute h-5/6 h-mysize w-full from-neutral-900"></div>
                     <div
                        class="header__bg h-mysize bg-center bg-cover"
                        style="background-image: url('https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg')"
                     ></div>
                  </div>
               </DialogTitle>
               <div class="px-12 flex flex-col gap-8">
                  <DialogDescription>
                     <div class="description flex gap-10">
                        <div class="description__left flex-auto flex flex-col gap-6">
                           <div class="description__left_header flex items-center gap-2">
                              <span>
                                 <RatingComponent rate="8"></RatingComponent>
                              </span>
                              <span class="font-light">2008</span>
                              <span class="font-semibold">5 saisons</span>
                           </div>
                           <div class="description__left_resume">
                              <p class="text-sm">
                                 <b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son
                                 who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new
                                 sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to
                                 enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such
                                 as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from
                                 mild family man to a kingpin of the drug trade.
                              </p>
                           </div>
                        </div>
                        <div class="description__right flex-none w-60 flex flex-col gap-4 text-sm">
                           <p><span class="text-neutral-500">Network :</span> AMC</p>
                           <p><span class="text-neutral-500">Genres :</span> Drama, Crime, Thriller</p>
                        </div>
                     </div>
                  </DialogDescription>

                  <div class="episode-header flex justify-between">
                     <h3 class="font-semibold text-xl">Épisodes</h3>
                     <Menu>
                        <MenuButton>More</MenuButton>
                        <MenuItems>
                           <MenuItem v-slot="{ active }">
                              <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Account settings </a>
                           </MenuItem>
                           <MenuItem v-slot="{ active }">
                              <a :class="{ 'bg-blue-500': active }" href="/account-settings"> Documentation </a>
                           </MenuItem>
                           <MenuItem disabled>
                              <span class="opacity-75">Invite a friend (coming soon!)</span>
                           </MenuItem>
                        </MenuItems>
                     </Menu>
                  </div>
                  <div>
                     <button @click="setIsOpen(false)">Deactivate</button>
                     <button @click="setIsOpen(false)">Cancel</button>
                  </div>
               </div>
            </div>
         </div>
      </Dialog>
   </TransitionRoot>
</template>

<script>
import { ref, toRefs } from "vue";
import { TransitionRoot, Dialog, DialogOverlay, DialogTitle, DialogDescription, Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import IconsComponent from "../IconsComponent.vue";
import RatingComponent from "./RatingComponent.vue";

export default {
   props: ["is_open"],
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
   },
   setup(props, { emit }) {
      return {
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
</style>
