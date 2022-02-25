<template>
  <!-- <div
    style="
      background-image: url('https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg');
    "
    class="item transition-100 h-56 w-36 flex-none cursor-pointer rounded bg-cover bg-center delay-100"
    @mouseover="displayInfo"
  ></div> -->
  <div
    v-if="a"
    style="
      background-image: url('https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg');
    "
    class="item transition-100 h-56 w-36 flex-none cursor-pointer rounded bg-cover bg-center delay-100"
    @mouseover="a = false"
  ></div>
  <div
    v-else
    class="item transition-100 h-56 w-36 flex-none cursor-pointer rounded bg-cover bg-center delay-100"
  >
    <div class="scale-150">
      <img
        src="https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
        @mouseleave="a = true"
        class="absolute -translate-y-1/4"
      />
      <button class="absolute z-20">o</button>
      <button class="absolute z-20">x</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["item"],
  emit: ["set:displayInfo"],
  setup(props, { emit }) {
    let a = ref(true);
    const displayInfo = () => {
      emit("set:displayInfo");
    };

    return { displayInfo, a };
  },
};
</script>

<style></style>
