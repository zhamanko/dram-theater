<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Header',
  components: { RouterLink },
  data() {
    return {
      menuOpen: false,
      links: [
        { name: 'Головна', to: '/' },
        { name: 'Афіши', to: '/afisha' },
        { name: 'Новини', to: '/news' },
        { name: 'Репертуар', to: '/repertoire' },
        { name: 'Історія', to: '/about' },
        { name: 'Керівництво', to: '/leadership' },
        { name: 'Трупа', to: '/troupe' },
        { name: 'Контакти', to: '/contacts' },
      ]
    }
  },
  watch: {
    menuOpen(val) {
      if (val) {
        const scrollY = window.scrollY
        document.body.style.position = "fixed"
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = "0"
        document.body.style.right = "0"
      } else {
        const scrollY = document.body.style.top
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.left = ""
        document.body.style.right = ""
        window.scrollTo(0, parseInt(scrollY || "0") * -1)
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    }
  }
}
</script>

<template>
  <header class="bg-white border-b w-full h-16 lg:h-22 fixed top-0 z-10 shadow-lg border-gray-200">
    <div class="flex justify-between xl:justify-around h-full items-center p-2">
      <img class="h-full" src="@/assets/logo.png" alt="logo">

      <!-- Десктоп-меню -->
      <div class="hidden xl:flex flex-row items-center justify-center gap-6 xl:text-lg 2xl:text-xl">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          @click="closeMenu"
          class="hover:scale-105 hover:text-red-700 transition"
          exact-active-class="text-red-800"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <!-- Кнопка бургера -->
      <button class="xl:hidden" @click="toggleMenu" v-if="!menuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="size-7">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
  </header>

  <!-- Мобільне меню -->
  <transition name="slide-fade">
    <div v-if="menuOpen" class="fixed z-50 top-0 left-0 w-screen h-screen bg-black opacity-95 text-white">
      <div class="p-4">
        <button @click="closeMenu" class="flex justify-end w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="flex flex-col items-center mt-5 space-y-4 text-lg md:text-2xl">
          <RouterLink
            v-for="link in links"
            :key="link.to + '-mobile'"
            :to="link.to"
            @click="closeMenu"
            class="hover:text-red-400 transition"
            exact-active-class="text-red-800"
          >
            {{ link.name }}
          </RouterLink>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Анімація появи */
.slide-fade-enter-active {
  transition: all 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
