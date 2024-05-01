import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, FavoritesPage, CartPage, BookDetailsPage, BackOfficePage } from '../pages'
import { getCookie } from '@/authen'

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
    component: CartPage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/bookdetails/:bookId',
    name: 'BookDetailsPage',
    component: BookDetailsPage
  },
  {
    path: '/backoffice',
    name: 'BackOfficePage',
    component: BackOfficePage,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = getCookie('token')
  if (to.meta.requiresAuth && !token) {
    next('/')
  } else {
    next()
  }
})

export default router
