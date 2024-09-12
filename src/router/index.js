import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import AuthOptions from '../views/LoginView.vue';
import AdminView from '@/views/AdminView.vue';

const routes = [
  {
    path: '/',
    name: 'auth-options',
    component: AuthOptions,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/ProductsView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('@/views/ProductView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('@/views/CheckoutView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactUs.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/UserProfile.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  // {
  //   path: '/logout',
  //   name: 'logout',
  //   beforeEnter: (to, from, next) => {
  //     store.dispatch('logout').then(() => {
  //       next('/');
  //     }).catch(() => {
  //       next('/');
  //     });
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  const isAdmin = store.getters.userRole === 'Admin';

  console.log(`Navigating to ${to.path}`);
  console.log('isAuthenticated:', isAuthenticated);
  console.log('isAdmin:', isAdmin);

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    console.log('Redirecting to auth-options');
    next({ name: 'auth-options' });
  } else if (to.matched.some(record => record.meta.requiresAdmin) && !isAdmin) {
    console.log('Redirecting to home');
    next({ name: 'home' });
  } else {
    next();
  }
});


export default router;



// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ProductsView from '../views/ProductsView.vue'
// import CheckoutView from '../views/CheckoutView.vue'
// import AdminView from '../views/AdminView.vue'
// import AboutView from '../views/AboutView.vue'
// // import SignUp from '../views/SignUp.vue'
// import ContactUs from '@/views/ContactUs.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/products',
//     name: 'products',
//     component: ProductsView
//   },
//   {
//     path: '/checkout',
//     name: 'Checkout',
//     component: CheckoutView
//   },
//   {
//     path: '/admin',
//     name: 'admin',
//     component: AdminView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     component: AboutView
//   },
//   {
//     path: '/contact',
//     name: 'contact',
//     component: ContactUs
//   },
//   // {
//   //   path: '/signup',
//   //   name: 'signup',
//   //   component: SignUp 
//   // },
//   // {
//   //   path: '/login',
//   //   name: 'login',
//   //   component: () => import('../views/LoginView.vue')
//   // },
//   {
//     path: '/profile',
//     name: 'profile',
//     component: () => import('../views/UserProfile.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
