import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[{
      path: '/notFound',
      name: 'notFound', 
      component: () => import('../components/NoFilms.vue'),
    },]
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    // route level code-splitting 
    // this generates a separate chunk (about.[hash].js) for this route 
    // which is lazy-loaded when the route is visited. 
    component: () => import('../components/MovieDetail.vue'),
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
