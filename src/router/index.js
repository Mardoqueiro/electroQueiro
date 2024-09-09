import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import AdminView from '../views/AdminView.vue'
import AboutView from '../views/AboutView.vue'
import SignUp from '../views/SignUp.vue'
import ContactUs from '@/views/ContactUs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp 
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
