<script>
import AfishaCard from '../AfishaCard.vue';

export default{
    name: 'Afishas',
    components: { AfishaCard },
    data() {
        return {
            afisha: [
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', scene: 'Велика сцена', date: 'Пт, 25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', scene: 'Велика сцена', date: 'Нд, 27 липня', photo: './img/afisha/emigrantu.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Мала сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg' },
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', scene: 'Велика сцена', date: 'Пт, 25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', scene: 'Мала сцена', date: 'Нд, 27 липня', photo: './img/afisha/emigrantu.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Велика сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Велика сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg' },
            ],
            currentIndex: 0,
            progress: 0, // %
        };
    },
}
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-15">
    <AfishaCard
      v-for="(item, index) in afisha"
      :key="index"
      v-bind="item"
      class="transition-all duration-500 hover:scale-105"
    />
  </div>
</template>
