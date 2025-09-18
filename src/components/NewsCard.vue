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
  <div id="item" class="min-w-80 max-w-80 h-130 bg-white shadow-lg rounded-xl duration-300 flex flex-col">
    <img class="w-full h-65 object-cover rounded-t-xl" :src="photo" :alt="title" />

    <!-- Контентна частина розтягнута -->
    <div class="p-3 pt-2 flex flex-col flex-1">
      <p class="text-sm text-center opacity-70 mb-1">{{ date }}</p>
      <div>
        <h3 class="font-bold text-lg text-center mb-3">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
      </div>
      <div class="text-center">
        <button class="bg-red-800 py-2 px-4 my-2 w-40 rounded-lg hover:bg-red-700 transition text-white">
          Деталі
        </button>
      </div>
    </div>
  </div>
</template>
