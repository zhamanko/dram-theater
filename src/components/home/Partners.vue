<template>
  <div class="bg-red-900 py-10 text-center">
    <h2 class="text-2xl font-bold text-white mb-5">Наші партнери</h2>

    <Swiper :slidesPerView="5" :centeredSlides="true" :spaceBetween="30" :loop="true" :speed="3000" :autoplay="{
      delay: 1,
      disableOnInteraction: false,
    }" :breakpoints="{
        320: { slidesPerView: 2 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }" :modules="modules" class="partners-swiper">
      <SwiperSlide v-for="(partner, i) in partners" :key="i">
        <img :src="partner.logo" :alt="partner.name" class=" rounded shadow-lg" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

export default {
  name: 'Partners',
  components: { Swiper, SwiperSlide },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  data() {
    return {
      partners: [
        { name: 'Dastor', logo: './img/partners/dastor.jpg' },
        { name: 'Nemiroff', logo: './img/partners/nemiroff.jpg' },
        { name: 'Cafe-dram', logo: './img/partners/cafe-dram.jpg' },
        { name: 'Chizay', logo: './img/partners/chizay.jpg' },
        { name: 'Defenivska-kupil', logo: './img/partners/defenivska-kupil.jpg' },
        { name: 'Hotel-butique', logo: './img/partners/hotel-butique.jpg' },
        { name: 'Krayna', logo: './img/partners/krayna.jpg' },
        { name: 'Ofalmologichnuj-centr', logo: './img/partners/ofalmologichnuj-centr.jpg' },
        { name: 'Osama', logo: './img/partners/osama.jpg' },
        { name: 'Pago', logo: './img/partners/pago.jpg' },
        { name: 'Parada', logo: './img/partners/parada.jpg' },
        { name: 'Pronto-pizza', logo: './img/partners/pronto-pizza.jpg' },
        { name: 'Shtefanyo', logo: './img/partners/shtefanyo.jpg' },
        { name: 'Svoi', logo: './img/partners/svoi.jpg' },
        { name: 'Yeah-not', logo: './img/partners/yeah-not.jpg' },
      ],
    };
  },
};
</script>

<style scoped>
.partners-swiper {
  width: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
