<script>
export default {
    props: {
        title: String,
        photo: String,
        description: String,
        date: String,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="border w-full rounded-lg shadow-lg">
        <div>
            <img :src="photo" alt="">
        </div>
        <div class="p-2">
            <h1 class="font-bold text-lg">{{ title }}</h1>
            <p>{{ description }}</p>
            <p>Дата премєри: <span>{{ date }}</span></p>
        </div>
    </div>
</template>