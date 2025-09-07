<script>
import kajdashevaSimja from '@/assets/img/afisha/kajdasheva-simja.jpg';
import prirecheniM from '@/assets/img/afisha/prirecheni-m.jpg';
import emigrantu from '@/assets/img/afisha/emigrantu.jpg';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default {
  name: 'MainAfisha',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay]
    }
  },
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
  }
};
</script>

<template>
  <Swiper :modules="modules" :pagination="{
    clickable: true,
    dynamicBullets: true,
  }" :navigation="true" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="h-180 w-auto sm:h-200">
    <SwiperSlide v-for="(item, index) in afishaItems" :key="index" class="relative h-full w-full">
      <!-- Фото завжди на фоні, розтягнуте -->
      <div class="relative w-full h-full overflow-hidden">
        <!-- Фон -->
        <img :src="item.imageUrl" alt="" class="absolute inset-0 w-full h-full object-cover blur-2xl scale-110" />

        <!-- Основне фото -->
        <img :src="item.imageUrl" alt="" class="relative w-full h-full object-contain 
         xl:object-right xl:px-20" />
      </div>

      <!-- Верхній заголовок -->
      <div class="absolute top-0 left-0 w-full z-10 text-center pt-2 pb-7 bg-gradient-to-b from-black/70 to-transparent
      xl:top-20 xl:left-10 xl:bg-none xl:w-1/2">
        <h1 class="text-xl font-bold text-white
        xl:text-3xl">Найближчим часом</h1>
      </div>

      <!-- Нижній блок з текстом -->
      <div class="absolute bottom-0 left-0 z-10 w-full bg-gradient-to-t from-black to-transparent p-4
      xl:top-50 xl:left-40 xl:w-1/3 xl:bg-none xl:flex xl:flex-col xl:gap-8">
        <h2 class="text-3xl lg:text-5xl font-semibold text-white">{{ item.title }}</h2>
        <p class="text-base lg:text-xl text-white">{{ item.description }}</p>
        <div class="flex justify-between items-center mt-4
        xl:flex-col xl:w-full xl:gap-5">
          <p class="text-sm text-gray-200 
          xl:text-base">{{ item.date }}</p>
          <button class="bg-red-800 py-2 px-4 rounded-lg hover:bg-red-700 transition
          xl:w-full">
            Квитки
          </button>
        </div>
      </div>
    </SwiperSlide>

  </Swiper>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #7f1d1d !important;
  transform: scale(0.5);
  padding: 2px 2px;
  border-radius: 50%;
  /* круглі кнопки */
  transition: transform 0.3s, background-color 0.3s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  color: #892020;
  transform: scale(0.6);
}
</style>