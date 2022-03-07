import { defineStore } from "pinia";
import axios from "axios";

export const useShows = defineStore("shows", {
   state: () => ({
      shows: [],
      show: {},
   }),

   getters: {},

   actions: {
      async getShows(page) {
         const shows = await axios.get("https://api.tvmaze.com/shows?page=" + page);
         this.shows.push(shows.data);
      },
      async getLastEpisodes() {
         const shows = await axios.get("https://api.tvmaze.com/shows");
         this.shows = shows.data;
      },

      async getShow(id = 0) {
         const show = await axios.get("https://api.tvmaze.com/shows" + id);
         this.show = show.data;
      },
     
   },
});
