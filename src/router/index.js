import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
import NewsView from '../views/NewsView.vue'
import ContactView from '../views/ContactView.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/people',
    name: 'people',
    component: PeopleView,
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
},
],
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  const storeString = localStorage.getItem("vuex") || "{}";
  const store = JSON.parse(storeString);
  if (to.matched.some((record) => record.meta.auth)) {
    if (store && !store.auth.token) {
      next("/contact");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
