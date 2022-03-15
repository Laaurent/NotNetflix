<template>
   <section>
      <div class="item h-56 w-36 flex-none scale-100 cursor-pointer overflow-hidden rounded bg-cover bg-center bg-neutral-900"></div>
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
      }

      let isHovered = ref(false);
      let seasons = ref(5);

      // Open modale with show informations
      const getInfo = () => {
         console.log("here");
      };
      return { isHovered, genres, image, seasons, getInfo };
   },
};
</script>

<style></style>
