import { defineStore } from "pinia";
import axios from "axios";

export const useShows = defineStore("shows", {
   state: () => ({
      shows: [],
      filteredShows: [],
      show: {},
      search: [],
      genres: [],
   }),

   getters: {},

   actions: {
      async getShows() {
         await axios.get("https://api.tvmaze.com/shows").then((data) => (this.shows = data.data));
         this.genres = [...new Set(this.shows.map((s) => s.genres).flat())];
      },
      getFilteredShows() {
         this.filteredShows = this.genres.map((g) => {
            return this.shows.filter((s) => s.genres.includes(g));
         });
      },
      async getLastEpisodes() {
         const shows = await axios.get("https://api.tvmaze.com/shows");
         this.shows = shows.data;
      },
      async getShow(id = 0) {
         const show = await axios.get("https://api.tvmaze.com/shows" + id);
         this.show = show.data;
      },
      async getSearch(query) {
         const shows = await axios.get("https://api.tvmaze.com/search/shows?q=" + query);
         this.search = shows.data;
      },
   },
});
