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
  <div id="item" 
       class="group min-w-70 max-w-80 h-130 bg-white shadow-lg rounded-xl duration-300 flex flex-col overflow-hidden">
    <img class="w-full h-65 object-cover rounded-t-xl" :src="photo" :alt="title" />
    <div class="p-3 pt-2 flex flex-col flex-1">
      <p class="text-sm text-center opacity-70 mb-1">{{ date }}</p>
      <div>
        <h3 class="font-bold text-lg text-center mb-3">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
      </div>
      <div class="text-center mt-auto">
        <button
          class="bg-red-800 py-2 px-4 my-2 w-40 rounded-lg hover:bg-red-700 text-white transition 
                 opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
          Деталі
        </button>
      </div>
    </div>
  </div>
</template>