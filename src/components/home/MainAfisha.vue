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
  }" :navigation="true" :speed="800" :autoplay="{ delay: 3000, disableOnInteraction: false }" class="h-180 w-auto sm:h-196 lg:h-198">
    <SwiperSlide v-for="(item, index) in afishaItems" :key="index" class="relative h-full w-full">
      <!-- Фото завжди на фоні, розтягнуте -->
      <div class="relative w-full h-full overflow-hidden">
        <!-- Фон -->
        <img :src="item.imageUrl" alt="" class="absolute inset-0 w-full h-full object-cover blur-2xl scale-110" />

        <!-- Основне фото -->
        <img :src="item.imageUrl" alt="" class="relative w-full h-full object-contain 
         xl:object-right xl:px-20 xl:shadow-2xl" />
      </div>

      <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-between 
      bg-gradient-to-b from-black/60 via-white/0 to-black pt-2 pb-8 px-5
      xl:bg-none xl:w-2/5 xl:top-30 xl:translate-x-1/6 xl:h-1/2 xl:justify-around
      2xl:w-2/4 2xl:translate-x-1/5">
        <div>
          <h1 class="text-center font-bold text-xl xl:text-2xl">Найближчим часом</h1>
        </div>
        <div class="xl:flex xl:flex-col xl:justify-center xl:items-center">
          <h2 class="text-3xl font-bold xl:text-4xl xl:py-20">{{ item.title }}</h2>
          <p class="pt-2 pb-5 xl:text-xl">{{ item.description }}</p>
          <div class="flex flex-row justify-between items-center w-full
          xl:flex-col xl:gap-2 xl:text-lg xl:mt-15">
            <p>{{ item.date }}</p>
            <button class="bg-red-800 py-2 px-4 rounded-lg hover:bg-red-700 transition text-white 
            xl:w-full xl:mt-5">
              Квитки
            </button>
          </div>
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