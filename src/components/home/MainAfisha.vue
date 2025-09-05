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
  <div>

  </div>
  <Swiper :modules="modules"  :pagination="{
    clickable: true,
    dynamicBullets: true,
  }"
  :navigation="true"
  :autoplay="{ delay: 3000, disableOnInteraction: false }"
  class="h-180 w-auto sm:h-200">
    <SwiperSlide v-for="(item, index) in afishaItems" :key="index" class="relative h-full w-full">
      <!-- Фото завжди на фоні, розтягнуте -->
      <img :src="item.imageUrl" alt="" class="absolute inset-0 w-full h-full object-cover object-bottom" />

      <!-- Верхній заголовок -->
      <div class="absolute top-0 left-0 w-full text-center pt-2 pb-7 bg-gradient-to-b from-black/70 to-transparent">
        <h1 class="text-xl font-bold text-white">Найближчим часом</h1>
      </div>

      <!-- Нижній блок з текстом -->
      <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h2 class="text-3xl font-semibold text-white">{{ item.title }}</h2>
        <p class="text-base text-white">{{ item.description }}</p>
        <div class="flex justify-between items-center mt-4">
          <p class="text-sm text-gray-200">{{ item.date }}</p>
          <button class="bg-red-800 py-2 px-4 rounded-lg hover:bg-red-700 transition">
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
    border-radius: 50%; /* круглі кнопки */
    transition: transform 0.3s, background-color 0.3s;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: #892020;
    transform: scale(0.6);
}

</style>