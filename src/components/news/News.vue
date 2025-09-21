<script>
import NewsCard from '../NewsCard.vue';

export default{
    name: 'News',
    components: { NewsCard },
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
                    photo: "./img/news/pidgotovka-vustavi-neapol.jpg",
                    date: "Пт, 14 липня 2025",
                },
                {
                    title: "Театр просто неба: «Жменяки» в Ужгородському скансені",
                    description: "У День Міста Ужгород, 13.09.2025р., в Ужгородському скансені просто неба відбудеться легендарна вистава «Жменяки» — візитівка Закарпатського облмуздрамтеатру...",
                    photo: "./img/news/zhmenjaki-skansen-uzhgorod.jpg",
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
                    photo: "./img/news/pidgotovka-vustavi-neapol.jpg",
                    date: "Пт, 14 липня 2025",
                },
                {
                    title: "Театр просто неба: «Жменяки» в Ужгородському скансені",
                    description: "У День Міста Ужгород, 13.09.2025р., в Ужгородському скансені просто неба відбудеться легендарна вистава «Жменяки» — візитівка Закарпатського облмуздрамтеатру...",
                    photo: "./img/news/zhmenjaki-skansen-uzhgorod.jpg",
                    date: "Вт, 10 липня 2025",
                },
            ],
        };
    },
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-12 gap-8 mb-15">
    <NewsCard
      v-for="(item, index) in news"
      :key="index"
      v-bind="item"
      class="transition-all duration-500 hover:scale-105"
    />
  </div>
</template>
