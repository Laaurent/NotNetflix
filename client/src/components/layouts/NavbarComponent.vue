<template>
  <nav class="flex items-center px-8 py-4">
    <ul class="flex flex-auto flex-row items-center">
      <!-- a changer debut -->
      <li class="px-4 text-lg">
        <span class="text-white-0">NOT</span>
        <span class="text-red-600">NETFLIX</span>
      </li>
      <!-- a changer fin -->
      <li class="px-2">Accueil</li>
      <li class="px-2">Séries</li>
      <li class="px-2">Nouveautés</li>
      <li class="px-2">Ma liste</li>
    </ul>

    <ul class="flex flex-none flex-row items-center">
      <li>
        <label
          @click="displaySearchbar = true"
          class="flex flex-row items-center"
        >
          <IconsComponent icon="magnifyingGlass"></IconsComponent>
          <input
            @blur="displaySearchbar = false"
            class="text-white-100 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:outline-none"
            :class="displaySearchbar ? searchbarMaxWidth : searchbarMinWidth"
            v-model="textSearch"
            type="text"
          />
        </label>
      </li>
      <li @click="displayProfileDropdown = !displayProfileDropdown">
        1
        <ul v-if="displayProfileDropdown">
          <li>1.1</li>
          <li>1.2</li>
          <li>1.3</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import IconsComponent from "@/components/IconsComponent.vue";
import { ref } from "vue";
export default {
  name: "NavbarComponent",
  components: {
    IconsComponent,
  },
  setup() {
    let displaySearchbar = ref(false);
    let displayProfileDropdown = ref(false);
    let textSearch = ref("");
    let searchbarMinWidth = ref("searchbarMinWidth");
    let searchbarMaxWidth = ref("searchbarMaxWidth");
    return {
      displaySearchbar,
      displayProfileDropdown,
      textSearch,
      searchbarMinWidth,
      searchbarMaxWidth,
    };
  },
};
</script>

<style>
.searchbarMinWidth {
  width: 0;
  transition: 0.5s;
}
.searchbarMaxWidth {
  width: 100%;
  transition: 0.5s;
}
</style>
