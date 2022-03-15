import { defineStore } from "pinia";
import axios from "axios";

export const useAuth = defineStore("auth", {
   state: () => ({
      isConnected: null,
      tokenConnected: null
   }),

   getters: {
      getTokenConnected(state){
         return state.tokenConnected
      }
   },

   actions: {
      

      async signup(payload) {
         try{
            const log = await axios.post("http://localhost:4000/signup", {...payload}, {
               withCredentials: true
             });
            if (log) {
               console.log('Le compte a été créée')
            }
         }catch(err){
            console.log(err)
         }
         
      },
      
     
   },
});
