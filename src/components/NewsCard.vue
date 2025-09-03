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
    <div id="item" class="min-w-70 max-w-70 h-130 bg-white shadow-lg rounded-xl duration-300">
        <img 
            class="w-full h-70 object-cover rounded-t-xl"
            :src="photo" 
            :alt="title"
        >

        <div class="p-3 flex flex-col gap-2">
            <div>
                <h3 class="font-bold text-lg text-center mb-3">{{ title }}</h3>
                <p class="text-sm">{{ description }}</p>
            </div>
            <div>
                <p class="text-sm text-end">{{ date }}</p>
            </div>
        </div>
    </div>
</template>
