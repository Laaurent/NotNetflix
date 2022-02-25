<template>
  <nav class="flex flex-row">
    <ul class="flex-auto flex-col">
      <li>Accueil</li>
      <li>Séries</li>
      <li>Nouveautés</li>
      <li>Ma liste</li>
    </ul>

    <ul class="flex-none flex-col">
      <li>
        <label
          ><IconsComponent icon="magnifyingGlass"></IconsComponent
          ><input type="text"
        /></label>
      </li>
      <li>dropdown profile</li>
    </ul>
  </nav>
</template>

<script>
import IconsComponent from "@/components/IconsComponent.vue";
export default {
  name: "NavbarComponent",
  components: {
    IconsComponent,
  },
};
</script>

<style></style>
