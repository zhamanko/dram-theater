<script>
export default {
    props: {
        img: String,
        name: String,
        position: String
    }
}
</script>

<template>
    <div class="flex flex-col justify-center gap-2 max-w-80 border border-gray-200 rounded-lg shadow">
        <img :src="img" :alt="name" class="rounded-t-lg">
        <div class="text-center px-2 pb-3">
            <h1 class="font-bold text-lg">{{ name }}</h1>
            <p>{{ position }}</p>
        </div>
    </div>
</template>