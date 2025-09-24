<script>
import Employees from '@/components/employee/Employees.vue';

export default {
    components: { Employees },
    data() {
        return {
            troupe: [
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Народна артистка України, артистка драми, провідний майстер сцени'},
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Заслужений артист України, артист драми, провідний майстер сцени'},
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Заслужений артист України, артист драми, провідний майстер сцени'},
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Заслужений артист України, артист драми, провідний майстер сцени'},
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Заслужена артистка України, артистка драми, провідний майстер сцени'},
            ]
        }
    }
}
</script>

<template>
    <main class="relative overflow-hidden px-4 mb-12">
        <div class="border-b border-gray-200 pb-8 mb-5">
            <h1 class="text-2xl my-8 text-center">Трупа</h1>
            <nav>
                <ul class="flex justify-center gap-5 text-lg">
                    <li class="hover:scale-105 hover:text-red-700 cursor-pointer transition">Артисти драми</li>
                    <li class="hover:scale-105 hover:text-red-700 cursor-pointer transition">Артисти балету</li>
                    <li class="hover:scale-105 hover:text-red-700 cursor-pointer transition">Оркестри</li>
                    <li class="hover:scale-105 hover:text-red-700 cursor-pointer transition">Вокалісти</li>
                </ul>
            </nav>
        </div>

        <Employees :employees="troupe"/>
    </main>
</template>