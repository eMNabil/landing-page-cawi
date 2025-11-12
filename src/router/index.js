// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/LoginPage.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false, showNavbar: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardPage.vue'),
    meta: { requiresAuth: true, showNavbar: false },
  },
  {
    path: '/token-management',
    name: 'TokenManagement',
    component: () => import('@/views/TokenManagement.vue'),
    meta: { requiresAuth: true, showNavbar: true },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Simple guard using localStorage token (accessToken or token)
router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem('accessToken') || localStorage.getItem('token')
  const requiresAuth = to.meta.requiresAuth ?? true

  if (requiresAuth && !accessToken) {
    return next('/login')
  }

  // Do NOT auto-redirect authenticated users away from /login.
  // This allows visits to the login page even when already authenticated.
  // If you want to prevent access, uncomment the redirect below.
  // if (to.path === '/login' && accessToken) {
  //   return next('/dashboard')
  // }

  next()
})

export default router
