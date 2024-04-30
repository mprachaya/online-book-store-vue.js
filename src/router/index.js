import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, FavoritesPage, CartPage, BookDetailsPage, BackOfficePage } from '../pages'

const routes = [
  {
    path: '/',
    name: '',
    component: HomePage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',
    component: FavoritesPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/bookdetails',
    name: 'BookDetailsPage',
    component: BookDetailsPage
  },
  {
    path: '/backoffice',
    name: 'BackOfficePage',
    component: BackOfficePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
