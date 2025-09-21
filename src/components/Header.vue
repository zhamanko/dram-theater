<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'Header',
    data() {
        return {
            menuOpen: false
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
                // повертаємо на ту саму позицію
                window.scrollTo(0, parseInt(scrollY || "0") * -1)
            }
        }
    },
    methods: {
        preventScroll(e) {
            e.preventDefault()
        },
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
            <img class="h-full " src="@/assets/logo.png" alt="logo">
            <div class="hidden xl:flex flex-row items-center justify-center gap-6 xl:text-lg 2xl:text-xl">
                <RouterLink @click="closeMenu" to="/" class="hover:scale-105 transition">Головна</RouterLink>
                <RouterLink @click="closeMenu" to="/afisha" class="hover:scale-105 transition">Афіши</RouterLink>
                <RouterLink @click="closeMenu" to="/news" class="hover:scale-105 transition">Новини</RouterLink>
                <RouterLink @click="closeMenu" to="/repertoire" class="hover:scale-105 transition">Репертуар</RouterLink>
                <RouterLink @click="closeMenu" to="/about" class="hover:scale-105 transition">Про театр</RouterLink>
                <RouterLink @click="closeMenu" to="/admin" class="hover:scale-105 transition">Адміністрація</RouterLink>
                <RouterLink @click="closeMenu" to="/troupe" class="hover:scale-105 transition">Трупа</RouterLink>
                <RouterLink @click="closeMenu" to="/contacts" class="hover:scale-105 transition">Контакти</RouterLink>
            </div>
            <button class="xl:hidden" @click="toggleMenu" v-if="!menuOpen">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-7">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </header>

    <!-- Анімація відкриття -->
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
                    <RouterLink @click="closeMenu" to="/">Головна</RouterLink>
                    <RouterLink @click="closeMenu" to="/afisha">Афіши</RouterLink>
                    <RouterLink @click="closeMenu" to="/news">Новини</RouterLink>
                    <RouterLink @click="closeMenu" to="/repertoire">Репертуар</RouterLink>
                    <RouterLink @click="closeMenu" to="/about">Про театр</RouterLink>
                    <RouterLink @click="closeMenu" to="/admin">Адміністрація</RouterLink>
                    <RouterLink @click="closeMenu" to="/troupe">Трупа</RouterLink>
                    <RouterLink @click="closeMenu" to="/contacts">Контакти</RouterLink>
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
