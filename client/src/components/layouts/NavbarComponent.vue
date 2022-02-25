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
          class="flex cursor-pointer flex-row items-center"
        >
          <SearchIcon class="ml-2 h-5 w-5 text-white" />
          <input
            @blur="displaySearchbar = false"
            class="text-white-100 mr-3 w-full appearance-none border-none bg-transparent py-1 px-2 leading-tight focus:outline-none"
            :class="displaySearchbar ? searchbarMaxWidth : searchbarMinWidth"
            v-model="textSearch"
            type="text"
          />
        </label>
      </li>
      <li>
        <Popover class="relative">
          <PopoverButton class="flex flex-row items-center">
            <div
              class="border-1 h-10 w-10 rounded-full border-white bg-center"
              :style="{
                backgroundImage: 'url(' + user.profilePic + ')',
              }"
            ></div>
            <ChevronDownIcon
              class="ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-90"
            />
          </PopoverButton>

          <PopoverPanel
            class="w-128 absolute left-1/2 z-10 -translate-x-1/2 transform bg-neutral-900 px-2 py-2 text-sm text-white opacity-90"
          >
            <ul class="flex flex-auto flex-col">
              <li class="hover:opacity:100 px-4 hover:bg-slate-700">
                <router-link to="/about">Gérer les profils</router-link>
              </li>
              <li class="py-4"><hr /></li>
              <li class="hover:opacity:100 px-4 hover:bg-slate-700">
                <router-link to="/about">Compte</router-link>
              </li>
              <li class="hover:opacity:100 px-4 hover:bg-slate-700">
                <router-link to="/about">Centre d'aide</router-link>
              </li>
              <li class="hover:opacity:100 px-4 hover:bg-slate-700">
                <router-link to="/about">Se déconnecter</router-link>
              </li>
            </ul>
          </PopoverPanel>
        </Popover>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ChevronDownIcon, SearchIcon } from "@heroicons/vue/solid";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ref } from "vue";
export default {
  name: "NavbarComponent",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
    SearchIcon,
  },
  setup() {
    let displaySearchbar = ref(false);
    let displayProfileDropdown = ref(false);
    let textSearch = ref("");
    let searchbarMinWidth = ref("searchbarMinWidth");
    let searchbarMaxWidth = ref("searchbarMaxWidth");

    const user = {
      profilePic: "https://via.placeholder.com/150",
    };
    return {
      displaySearchbar,
      displayProfileDropdown,
      textSearch,
      searchbarMinWidth,
      searchbarMaxWidth,
      user,
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
