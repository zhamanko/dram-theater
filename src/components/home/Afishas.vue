<script>
import AfishaCard from './AfishaCard.vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

export default {
    name: "Afishas",
    components: { AfishaCard, Swiper, SwiperSlide },
    data() {
        return {
            afisha: [
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', date: '25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', date: '27 липня', photo: './img/afisha/emigrantu.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', date: '30 липня', photo: './img/afisha/prirecheni-m.jpg' },
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', date: '25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', date: '27 липня', photo: './img/afisha/emigrantu.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', date: '30 липня', photo: './img/afisha/prirecheni-m.jpg' },
            ],
            currentIndex: 0,
            progress: 0, // %
        };
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation, EffectCoverflow],
        };
    },
    methods: {
        onSlideChange(swiper) {
            this.currentIndex = swiper.realIndex;
            this.progress = 0;
        },
        onAutoplayTimeLeft(_swiper, time, progress) {
            this.progress = (1 - progress) * 100; // 0 → 100
        }
    }
};
</script>

<template>
    <h2 class="text-center font-bold p-2 text-2xl">Афіша</h2>
    <Swiper :effect="'coverflow'" :spaceBetween="10" :grabCursor="true" :centeredSlides="true" :slidesPerView="2"
        :breakpoints="{
            320: { slidesPerView: 1 },
            670: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
        }" :coverflowEffect="{
            rotate: 50,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
        }" :speed="800" :autoplay="{ delay: 5000, disableOnInteraction: false }" :loop="true" :modules="modules"
        @slideChange="onSlideChange" @autoplayTimeLeft="onAutoplayTimeLeft" class="afisha-swiper">
        <SwiperSlide v-for="(item, i) in afisha" :key="i">
            <AfishaCard v-bind="item" class="transition-all duration-500" />
        </SwiperSlide>
    </Swiper>
            <!-- кастомна пагінація -->
        <div class="pb-5 w-full flex justify-center items-center gap-2 px-2 mb-2">
            <div v-for="(item, i) in afisha" :key="i"
                class="transition-all duration-500 rounded bg-gray-300 overflow-hidden"
                :class="i === currentIndex ? 'h-2 w-16' : 'h-1 w-6'">
                <div class="h-full bg-red-700 transition-all duration-100"
                    :style="{ width: i < currentIndex ? '100%' : i === currentIndex ? progress + '%' : '0%' }"></div>
            </div>
        </div>
</template>

<style scoped>
.afisha-swiper {
    padding-top: 15px;
    padding-bottom: 15px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
