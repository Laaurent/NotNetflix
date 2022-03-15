import Home from './views/Home.vue'
import About from './views/About.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/login', component: LogIn, meta: { title: 'LogIn' } },
  { path: '/signup', component: SignUp, meta: { title: 'SignUp' } },
  {
    path: '/about',
    meta: { title: 'About' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]
