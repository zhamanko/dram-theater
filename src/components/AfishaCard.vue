<script>
export default {
    name: 'NewsCard',
    props: {
        title: String,
        photo: String,
        description: String,
        date: String,
    }
}
</script>

<template>
    <div 
        id="item" 
        class="relative w-70 bg-white shadow-lg rounded-xl overflow-hidden 
               hover:scale-105 duration-300 group"
    >
        <!-- Фото -->
        <img 
            class="w-full object-cover rounded-xl"
            :src="photo" 
            :alt="title"
        >

        <!-- Фон (залишається на місці) -->
        <div 
            class="absolute bottom-0 p-3 rounded-b-xl bg-gradient-to-t from-black to-transparent 
                   flex flex-col justify-start gap-2 text-white"
        >
            <!-- Анімований тільки текст -->
            <div class="transition-transform duration-300 group-hover:-translate-y-4">
                <h3 class="font-bold mb-3">{{ title }}</h3>
                <p class="text-sm">{{ description }}</p>
            </div>
            <div class="transition-transform duration-300 group-hover:-translate-y-4">
                <p class="text-sm text-center">{{ date }}</p>
            </div>
        </div>
    </div>
</template>
