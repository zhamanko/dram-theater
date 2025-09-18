<script>
export default {
    name: 'NewsCard',
    props: {
        title: String,
        photo: String,
        description: String,
        date: String,
        scene: String,
    }
}
</script>

<template>
    <div id="item" class="relative w-80 bg-white shadow-lg rounded-xl overflow-hidden duration-300 group">
        <!-- Фото -->
        <img class="w-full object-cover rounded-xl" :src="photo" :alt="title">

        <!-- Фон (залишається на місці) -->
        <div class="absolute bottom-0 pt-25 p-3 lg:pt-3 rounded-b-xl bg-gradient-to-t from-black to-transparent 
                   flex flex-col justify-start gap-2 text-white">
            <!-- Анімований тільки текст -->
            <div class="lg:translate-y-12 transition-transform duration-300 group-hover:-translate-y-3">
                <h3 class="font-bold mb-3 text-lg">{{ title }}</h3>
                <p class="text-sm">{{ description }}</p>
            </div>
            <div class="lg:translate-y-13 transition-transform duration-300 group-hover:-translate-y-3
            flex justify-between">
                <p class="text-sm text-center opacity-85">{{ scene }}</p>
                <p class="text-sm text-center opacity-85">{{ date }}</p>
            </div>
            <div class="lg:translate-y-13 transition-transform duration-300 group-hover:-translate-y-1 flex justify-between gap-2">
                <button class="bg-red-800 py-2 px-4 w-full rounded-lg hover:bg-red-700 transition text-white">
                    Деталі
                </button>
                <button class="bg-red-800 py-2 px-4 w-full rounded-lg hover:bg-red-700 transition text-white">
                    Квитки
                </button>
            </div>
        </div>
    </div>
</template>
