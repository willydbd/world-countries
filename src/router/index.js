import { createRouter, createWebHistory } from '@ionic/vue-router';
import AllCountries from '../pages/AllCountries.vue';

const routes = [
  {
    path: '/',
    redirect: '/countries'
  },
  {
    path: '/countries',
    component: AllCountries
  },
  {
    path: '/country/:id',
    component: () => import('../pages/CountryDetails.vue')
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
