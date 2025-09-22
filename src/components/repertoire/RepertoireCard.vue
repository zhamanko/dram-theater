<script>
export default {
    props: {
        title: String,
        photo: String,
        description: String,
        status: String,
        date: String,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="border border-gray-200 lg:w-full rounded-lg shadow-lg lg:flex">
        <div>
            <img :src="photo" alt="" class="w-full object-cover lg:w-120 rounded-t-lg lg:rounded-none lg:rounded-l-lg">
        </div>
        <div class="px-4 py-4 lg:py-12 gap-4 flex flex-col justify-between w-full">
            <h1 class="font-bold text-3xl">{{ title }}</h1>
            <p class="text-xl">{{ description }}</p>
            <button class="bg-red-800 py-2 px-4 w-full rounded-lg hover:bg-red-700 transition text-white">
                Про виставу
            </button>
            <div class="flex justify-between">
                <p
                :class="status === 'Діюча' ? 'text-green-500' : 'text-red-700' ">{{ status }}</p>
                <p>Дата премєри: <span>{{ date }}</span></p>
            </div>
        </div>
    </div>
</template>