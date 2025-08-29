<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="bg-white border-b border-gray-200">
        <div class="flex justify-between items-center p-2">
            <img class="w-1/2" src="@/assets/logo.png" alt="logo">
            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>
    </header>

    <div id="menu" class="fixed hidden z-50 top-0 left-0 w-full h-full bg-black opacity-93  text-white">
        <div class="p-4">
            <button class="flex justify-end w-full"><svg xmlns="http://www.w3.org/2000/svg" fill="white"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            <div class="flex flex-col items-center">
                <RouterLink class="p-2 w-full text-center" to="/">Головна</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/afisha">Афіши</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/afisha">Новини</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/actors">Репертуар</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/about">Про театр</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/afisha">Адміністрація</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/afisha">Трупа</RouterLink>
                <RouterLink class="p-2 w-full text-center" to="/contacts">Контакти</RouterLink>
            </div>
        </div>
    </div>
</template>