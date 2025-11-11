// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginPage.vue';
import TheQuestionnaire from '@/components/Kuisioner.vue';
import RespondentPage from '@/views/RespondentPage.vue';
import TokenManagement from '@/views/TokenManagement.vue';

const routes = [
  {
    path: '/login',
    name: 'Home',
    component: Login,
    meta: { showNavbar: true },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: TheQuestionnaire,
    meta: { showNavbar: false },
  },
  {
    path: '/token',
    name: 'Token Management',
    component: RespondentPage,
    meta: { showNavbar: true },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/dashboard',
    meta: { showNavbar: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
