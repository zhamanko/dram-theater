import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AfishaView from '@/views/AfishaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/afisha',
      name: 'afisha',
      component: AfishaView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Якщо є збережена позиція (наприклад, після кнопки "Назад") — відновлюємо її
    if (savedPosition) {
      return savedPosition;
    } else {
      // Інакше завжди скролимо на верх
      return { top: 0 };
    }
  }
})

export default router
