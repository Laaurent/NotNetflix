<template>
   <section>
      <div
         :style="'background-image: url(' + image + ');'"
         class="item h-56 w-36 flex-none scale-100 cursor-pointer overflow-hidden rounded bg-cover bg-center transition delay-100 duration-150 hover:mx-2 hover:flex-auto hover:scale-125"
         @mouseenter="isHovered = true"
         @mouseleave="isHovered = false"
      >
         <div v-show="isHovered" class="absolute bottom-0 w-full bg-neutral-800 p-2 opacity-90">
            <!-- BUTTON -->
            <div class="flex justify-center pb-1">
               <button class="hover:opacity-80">
                  <IconsComponent icon="play" color="white" />
               </button>
               <button class="hover:opacity-80">
                  <IconsComponent icon="plus" color="white" />
               </button>
               <button class="hover:opacity-80" @click="getInfos">
                  <IconsComponent icon="downChevron" color="white" />
               </button>
            </div>

            <!-- INFOS -->
            <div class="text-left text-xs">
               <span>{{ seasons }} season{{ seasons > 1 ? "s" : "" }}</span>
            </div>

            <!-- GENRES -->
            <div class="text-left text-xs">{{ genres }}</div>
         </div>
      </div>
   </section>
</template>

<script>
import { ref, toRefs } from "vue";
import IconsComponent from "../IconsComponent.vue";

export default {
   props: ["item"],
   components: { IconsComponent },
   setup(props) {
      //  ITEM DATA
      const { item } = toRefs(props);
      let { genres, image } = item.value;
      genres = genres.join(" • ");
      if (image) {
         image = image.medium ? image.medium : image.original;
      } else {
         image =
            "https://imgs.search.brave.com/yWbQu1VePa-7D1bVsJDYPoX6KC8gp06SWvZLmqO6q_A/rs:fit:981:982:1/g:ce/aHR0cDovL2Nkbi5v/bmxpbmV3ZWJmb250/cy5jb20vc3ZnL2lt/Z18zODQ4MjgucG5n";
      }

      let isHovered = ref(false);
      let seasons = ref(5);

      return { isHovered, genres, image, seasons };
   },
};
</script>

<style></style>
