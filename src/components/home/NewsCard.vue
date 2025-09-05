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
    class="min-w-80 max-w-80 h-130 bg-white shadow-lg rounded-xl duration-300 flex flex-col"
  >
    <img
      class="w-full h-65 object-cover rounded-t-xl"
      :src="photo"
      :alt="title"
    />

    <!-- Контентна частина розтягнута -->
    <div class="p-3 flex flex-col flex-1">
      <div>
        <h3 class="font-bold text-lg text-center mb-3">{{ title }}</h3>
        <p class="text-sm">{{ description }}</p>
      </div>

      <!-- Дата завжди знизу -->
      <p class="text-sm text-end mt-auto">{{ date }}</p>
    </div>
  </div>
</template>
