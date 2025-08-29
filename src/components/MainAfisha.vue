<script>
import kajdashevaSimja from '@/assets/img/afisha/kajdasheva-simja.jpg';
import prirecheniM from '@/assets/img/afisha/prirecheni-m.jpg';
import emigrantu from '@/assets/img/afisha/emigrantu.jpg';

export default {
  name: 'MainAfisha',
  data() {
    return {
      currentIndex: 0,
      interval: null,
      startX: 0,
      isDragging: false,
      afishaItems: [
        {
          title: "Кайдашева сім'я",
          description: "Класика української літератури оживає на сцені...",
          date: "14 липня",
          imageUrl: kajdashevaSimja
        },
        {
          title: "Приречені",
          description: "«Приречені» — це трагічна історія про жінок...",
          date: "20 липня",
          imageUrl: prirecheniM
        },
        {
          title: "Емігранти",
          description: "В основі – п’єса одного з найвідоміших польських письменників...",
          date: "25 липня",
          imageUrl: emigrantu
        }
      ]
    };
  },
  mounted() {
    this.startAutoplay();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    startAutoplay() {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 8000); // 8 секунд
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.resetAutoplay();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.afishaItems.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.afishaItems.length) % this.afishaItems.length;
    },
    resetAutoplay() {
      clearInterval(this.interval);
      this.startAutoplay();
    },

    // 👇 Swipe логіка
    onTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.isDragging = true;
      clearInterval(this.interval);
    },
    onTouchEnd(e) {
      if (!this.isDragging) return;
      const endX = e.changedTouches[0].clientX;
      const diff = this.startX - endX;

      if (diff > 50) this.nextSlide(); // свайп вліво
      if (diff < -50) this.prevSlide(); // свайп вправо

      this.isDragging = false;
      this.startAutoplay();
    },
    onMouseDown(e) {
      this.startX = e.clientX;
      this.isDragging = true;
      clearInterval(this.interval);
    },
    onMouseUp(e) {
      if (!this.isDragging) return;
      const diff = this.startX - e.clientX;

      if (diff > 50) this.nextSlide();
      if (diff < -50) this.prevSlide();

      this.isDragging = false;
      this.startAutoplay();
    }
  }
};
</script>

<template>
  <div
    class="relative overflow-hidden select-none"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <!-- Слайдер -->
    <div
      class="flex transition-transform sm:h-200 duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div
        v-for="(item, index) in afishaItems"
        :key="index"
        class="min-w-full relative">
        <img class="w-full" :src="item.imageUrl" :alt="item.title" />

        <!-- Заголовок зверху -->
        <div
          class="absolute top-0 left-0 w-full text-center pt-2 pb-7 bg-gradient-to-b from-black/70 to-transparent">
          <h1 class="text-xl font-bold">Найближчим часом</h1>
        </div>

        <!-- Опис знизу -->
        <div
          class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
          <h2 class="text-3xl font-semibold">{{ item.title }}</h2>
          <p class="text-sm">{{ item.description }}</p>
          <div class="flex justify-between items-center mt-4">
            <p class="text-sm">{{ item.date }}</p>
            <button
              class="bg-red-800 py-2 px-4 rounded-lg hover:bg-red-700 transition">
              Квитки
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Навігація (крапки) -->
    <div class="absolute bottom-2 left-0 w-full">
      <nav class="flex justify-center gap-3">
        <span
          v-for="(item, index) in afishaItems"
          :key="index"
          class="w-3 h-3 rounded-full border-2 border-white cursor-pointer"
          :class="currentIndex === index ? 'bg-white' : ''"
          @click="goToSlide(index)"
        ></span>
      </nav>
    </div>

    <!-- Кнопки керування -->
    <button
      class="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      @click="prevSlide"
    >
      ‹
    </button>
    <button
      class="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      @click="nextSlide"
    >
      ›
    </button>
  </div>
</template>
