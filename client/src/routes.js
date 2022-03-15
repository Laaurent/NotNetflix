import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Search from "./views/Search.vue";
import NotFound from "./views/NotFound.vue";

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: "/", component: Home, meta: { title: "Home" }, name: "Home" },
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
    redirect: to => {
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
