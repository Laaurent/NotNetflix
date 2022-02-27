<template>
   <div class="flex">
      <IconsComponent v-for="(i, index) in full" icon="full-star" color="white" :key="'full_' + index"></IconsComponent>
      <IconsComponent v-for="(i, index) in half" icon="half-star" color="white" :key="'full_' + index"></IconsComponent>
      <IconsComponent v-for="(i, index) in left" icon="no-star" color="white" :key="'full_' + index"></IconsComponent>
   </div>
</template>

<script>
import { toRefs } from "vue";
import IconsComponent from "../IconsComponent.vue";
export default {
   props: ["rate"],
   setup(props) {
      const { rate } = toRefs(props);
      let note = Math.round(rate.value) / 2;
      let half = note % 1 ? 1 : 0;
      let full = note / 1 - (note % 1);
      let left = 5 - full - half;
      return { note, half, full, left };
   },
   components: { IconsComponent },
};
</script>

<style></style>
