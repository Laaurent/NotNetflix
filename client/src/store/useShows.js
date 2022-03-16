import { defineStore } from "pinia";
import axios from "axios";
import { data } from "autoprefixer";

export const useShows = defineStore("shows", {
   state: () => ({
      shows: [],
      filteredShows: [],
      show: {},
      search: [],
      genres: [],
      comments: []
   }),

   getters: {
      getterComments(state){
         return state.comments
      }
   },

   actions: {
      async getShows() {
         await axios.get("https://api.tvmaze.com/shows").then((data) => (this.shows = data.data));
         this.genres = [...new Set(this.shows.map((s) => s.genres).flat())];
      },
      async getComments(id=0) {
         await axios.get("http://localhost:4000/comments/"+id, {
            withCredentials: true,
          }).then((res) =>{ 
          this.comments = [...res.data]
          }
          ).catch(err=>{
             console.log(err)
          })
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
