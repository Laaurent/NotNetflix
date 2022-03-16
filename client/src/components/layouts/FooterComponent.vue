<template>
   <div class="footer text-xs text-neutral-500 flex justify-center pt-6 max-h-ful">
      <div class="flex flex-col">
         <div class="footer__networks flex py-2 gap-2">
            <div class="footer__networks_item"><IconsComponent icon="facebook" color="white"></IconsComponent></div>
            <div class="footer__networks_item"><IconsComponent icon="instagram" color="white"></IconsComponent></div>
            <div class="footer__networks_item"><IconsComponent icon="twitter" color="white"></IconsComponent></div>
            <div class="footer__networks_item"><IconsComponent icon="youtube" color="white"></IconsComponent></div>
         </div>
         <div class="footer__links flex gap-24 py-2 w-11/12">
            <div class="footer__links_item">
               <ul class="links__items py-2_col">
                  <li class="items py-2"><a href="#">Audio et sous-titres</a></li>
                  <li class="items py-2"><a href="#">Presse</a></li>
                  <li class="items py-2"><a href="#">Confidentialité</a></li>
                  <li class="items py-2"><a href="#">Nous contacter</a></li>
               </ul>
            </div>
            <div class="footer__links_item">
               <ul class="links__items py-2_col">
                  <li class="items py-2"><a href="#">Audiodescription</a></li>
                  <li class="items py-2"><a href="#">Relation invertisseurs</a></li>
                  <li class="items py-2"><a href="#">Informations légales</a></li>
               </ul>
            </div>
            <div class="footer__links_item">
               <ul class="links__items py-2_col">
                  <li class="items py-2"><a href="#">Centre d'aide</a></li>
                  <li class="items py-2"><a href="#">Recrutement</a></li>
                  <li class="items py-2"><a href="#">Préférence des cookies</a></li>
               </ul>
            </div>
            <div class="footer__links_item">
               <ul class="links__items py-2_col">
                  <li class="items py-2"><a href="#">Carte cadeaux</a></li>
                  <li class="items py-2"><a href="#">Conditions d'utilisation</a></li>
                  <li class="items py-2"><a href="#">Mentions légales</a></li>
               </ul>
            </div>
         </div>
         <div class="footer__links_button py-2">
            <button class="btn border-solid border-2 p-2 border-neutral-500">Code de service</button>
         </div>
         <div class="footer__links_copyright py-2">
            <p>© 1997-2022 Netflix, Inc.{b0908601-6207-4061-8edc-e4d36e5c0dd9}</p>
         </div>
      </div>
   </div>
</template>

<script>
import IconsComponent from "@/components/IconsComponent.vue";
export default {
   name: "FooterComponent",
   components: {
      IconsComponent,
   },
};
</script>

<style></style>
