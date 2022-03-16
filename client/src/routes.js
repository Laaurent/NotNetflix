import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Search from "./views/Search.vue";
import LogIn from "./views/LogIn.vue";
import SignUp from "./views/SignUp.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
   { path: "/", component: Home, meta: { title: "Home" }, name: "Home",
    beforeEnter: (to, from)=>{
      console.log(document.cookie)
      let cookie = document.cookie.split('=')
      if(cookie[1]) return true
      else return false
    }
  },
   { path: "/login", component: LogIn, meta: { title: "LogIn" } },
   { path: "/signup", component: SignUp, meta: { title: "SignUp" } },
   {
      path: "/about",
      meta: { title: "About" },
      component: About,
   },
   {
      path: "/search/:query",
      meta: { title: "Search" },
      name: "search",
      props: true,
      component: Search,
   },
   {
      path: "/search",
      redirect: (to) => {
         return {
            path: "/",
            component: Home,
            meta: { title: "Home" },
            name: "Home",
         };
      },
   },
   { path: "/:path(.*)", component: NotFound },
];
