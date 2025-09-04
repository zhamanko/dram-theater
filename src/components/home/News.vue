<script>
import NewsCard from '@/components/home/NewsCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';

export default {
    name: 'News',
    components: { NewsCard, Swiper, SwiperSlide },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data() {
        return {
            news: [
                {
                    title: "Нова прем’єра вже зовсім близько!",
                    description: "Сьогодні в театрі відбулася технічна рада, присвячена підготовці до вересневої прем’єри «Тихе вушко» від режисерки-постановниці...",
                    photo: "./img/news/pro-premjeru-tihe-vushko-3.jpg",
                    date: "Пн, 18 липня 2025",
                },
                {
                    title: "Вистава «Неаполь – місто мільйонерів»",
                    description: "Театральна магія в дії! Тексти драматурга Едуардо де Філіппо оживають на сцені Закарпатського музично-драматичного театру...",
                    photo: "./img/news/pro-premjeru-tihe-vushko-3.jpg",
                    date: "Пт, 14 липня 2025",
                },
                {
                    title: "Театр просто неба: «Жменяки» в Ужгородському скансені",
                    description: "У День Міста Ужгород, 13.09.2025р., в Ужгородському скансені просто неба відбудеться легендарна вистава «Жменяки» — візитівка Закарпатського облмуздрамтеатру...",
                    photo: "./img/news/pro-premjeru-tihe-vushko-3.jpg",
                    date: "Вт, 10 липня 2025",
                },

                {
                    title: "Нова прем’єра вже зовсім близько!",
                    description: "Сьогодні в театрі відбулася технічна рада, присвячена підготовці до вересневої прем’єри «Тихе вушко» від режисерки-постановниці...",
                    photo: "./img/news/pro-premjeru-tihe-vushko-3.jpg",
                    date: "Пн, 18 липня 2025",
                },
                {
                    title: "Вистава «Неаполь – місто мільйонерів»",
                    description: "Театральна магія в дії! Тексти драматурга Едуардо де Філіппо оживають на сцені Закарпатського музично-драматичного театру...",
                    photo: "./img/news/pro-premjeru-tihe-vushko-3.jpg",
                    date: "Пт, 14 липня 2025",
                },
                {
                    title: "Театр просто неба: «Жменяки» в Ужгородському скансені",
                    description: "У День Міста Ужгород, 13.09.2025р., в Ужгородському скансені просто неба відбудеться легендарна вистава «Жменяки» — візитівка Закарпатського облмуздрамтеатру...",
                    photo: "./img/news/pro-premjeru-tihe-vushko-3.jpg",
                    date: "Вт, 10 липня 2025",
                },
            ],
        };
    },
}
</script>

<template>
    <div class="bg-white pt-3">
        <h2 class="text-center font-bold p-2 text-2xl">Останні новини</h2>
        <Swiper :loop="true" :slidesPerView="3" :centeredSlides="true" :pagination="{
            clickable: true,
        }" :modules="modules" :navigation="false" :breakpoints="{
            320: { slidesPerView: 1 },
            670: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
        }" class="news-swiper">
            <SwiperSlide v-for="(item, index) in news" :key="index" class="pt-3 pb-10">
                <div class="slide-inner">
                    <NewsCard :title="item.title" :description="item.description" :photo="item.photo" :date="item.date" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
    color: #f12626;
    transition: 0.3s;
    font-size: 10px;
}

.swiper-pagination-bullet-active{
    background: #7f1d1d;
}

/* додай у свій <style> */
.news-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible; /* щоб збільшений слайд не обрізався */
  pointer-events: auto;
}

/* Масштаб робимо на внутрішньому елементі, бо Swiper додає translate3d inline */
.slide-inner {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(0.90);              /* базовий, трохи менший */
  transition: transform 450ms cubic-bezier(.22,.9,.38,1);
  transform-origin: center center;
  will-change: transform;
}

/* Центровий (активний) слайд */
.news-swiper .swiper-slide-active .slide-inner,
.news-swiper .swiper-slide-duplicate-active .slide-inner {
  transform: scale(1);    /* наприклад 1 або 1.05-1.15 */
  z-index: 30;
}

/* Сусідні слайди трохи більші */
.news-swiper .swiper-slide-next .slide-inner,
.news-swiper .swiper-slide-prev .slide-inner,
.news-swiper .swiper-slide-duplicate-next .slide-inner,
.news-swiper .swiper-slide-duplicate-prev .slide-inner {
  transform: scale(0.90);
  z-index: 20;
}

/* При потребі — зроби сильніший ефект, але обережно з 1.5 */



.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: #7f1d1d;
    transform: scale(1.2);
}
</style>