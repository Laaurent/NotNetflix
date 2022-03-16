<template>
  <nav
    :class="
      windowTop > 0 ? 'bg-neutral-900' : ' bg-gradient-to-b from-neutral-900'
    "
    class="flex w-full items-center fixed px-8 py-4 z-20"
  >
    <ul class="flex flex-auto flex-row items-center">
      <!-- a changer debut -->
      <li class="px-4 text-lg">
        <router-link :to="{ name: 'Home' }">
          <IconsComponent icon="logo"></IconsComponent>
        </router-link>
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
            @keyup.enter="onEnter"
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
                <router-link to="/about" @click="disconnect">Se déconnecter</router-link>
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
import { ref, onMounted } from "vue";
import { onBeforeUnmount } from "@vue/runtime-core";
import IconsComponent from "../IconsComponent.vue";
import { useRouter, useRoute } from "vue-router";
import { useCookies } from "vue3-cookies";
export default {
  name: "NavbarComponent",
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
    SearchIcon,
    IconsComponent,
  },
  
  setup() {
    const router = useRouter();
    let displaySearchbar = ref(false);
    let displayProfileDropdown = ref(false);
    let textSearch = ref("");
    let searchbarMinWidth = ref("searchbarMinWidth");
    let searchbarMaxWidth = ref("searchbarMaxWidth");
    let windowTop = ref(0);
    const { cookies } = useCookies();

   const disconnect = ()=>{
      cookies.remove('authCookie')
   }
    const user = {
      profilePic: "https://via.placeholder.com/150",
    };

    const onScroll = () => {
      windowTop.value =
        window.top.scrollY; /* or: e.target.documentElement.scrollTop */
    };

    const onEnter = () => {
      if (!textSearch.value) return;
      router.push({
        name: "search",
        params: { query: textSearch.value },
      });
    };

    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return {
       cookies,
       disconnect,
      windowTop,
      displaySearchbar,
      displayProfileDropdown,
      textSearch,
      searchbarMinWidth,
      searchbarMaxWidth,
      user,
      onScroll,
      onEnter,
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
