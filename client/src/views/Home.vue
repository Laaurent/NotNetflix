<script>
import HeaderComponent from "@/components/layouts/HeaderComponent.vue";
import SliderComponent from "@/components/layouts/SliderComponent.vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { ref } from "vue";
export default {
  name: "Home",
  components: {
    HeaderComponent,
    SliderComponent,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  },
  setup() {
    let isOpen = ref(false);
    const setIsOpen = val => {
      isOpen.value = val;
    };

    return { setIsOpen, isOpen };
  },
};
</script>

<template>
  <article>
    <header>
      <HeaderComponent></HeaderComponent>
    </header>
    <div class="px-12">
      <Dialog
        :open="isOpen"
        @close="setIsOpen"
        as="div"
        class="fixed inset-0 z-10 overflow-y-auto"
      >
        <DialogOverlay />
        <div
          class="absolute my-auto mx-auto max-w-sm rounded bg-white text-center"
        >
          <DialogDescription>
            This will permanently deactivate your account
          </DialogDescription>
        </div>
      </Dialog>
      <SliderComponent
        @set:displayInfo="setIsOpen(true)"
        title="success"
      ></SliderComponent>
      <SliderComponent
        @set:displayInfo="setIsOpen(true)"
        title="trends"
      ></SliderComponent>
      <SliderComponent
        @set:displayInfo="setIsOpen(true)"
        title="news"
      ></SliderComponent>
      <SliderComponent
        @set:displayInfo="setIsOpen(true)"
        title="top"
      ></SliderComponent>
      <SliderComponent
        @set:displayInfo="setIsOpen(true)"
        title="documentary"
      ></SliderComponent>
    </div>
  </article>
</template>
