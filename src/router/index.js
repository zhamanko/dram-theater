import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AfishaView from '@/views/AfishaView.vue'
import NewsView from '@/views/NewsView.vue'
import RepertoireView from '@/views/RepertoireView.vue'
import AboutView from '@/views/AboutView.vue'
import LeadershipView from '@/views/LeadershipView.vue'

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
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/repertoire',
      name: 'repertoire',
      component: RepertoireView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/leadership',
      name: 'leadership',
      component: LeadershipView,
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
