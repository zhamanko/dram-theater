<script>
import RepertoireCard from './RepertoireCard.vue';

export default {
    components: { RepertoireCard },
    data() {
        return {
            repertoire: [
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', scene: 'Велика сцена', date: 'Пт, 25 липня', photo: './img/afisha/kajdasheva-simja.jpg', status: 'Діюча' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', scene: 'Велика сцена', date: 'Нд, 27 липня', photo: './img/afisha/emigrantu.jpg', status: 'Діюча' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Мала сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg', status: 'Архів' },
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', scene: 'Велика сцена', date: 'Пт, 25 липня', photo: './img/afisha/kajdasheva-simja.jpg', status: 'Діюча' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', scene: 'Мала сцена', date: 'Нд, 27 липня', photo: './img/afisha/emigrantu.jpg', status: 'Архів' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Велика сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg', status: 'Архів' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Велика сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg', status: 'Діюча' },
            ],
        }
    }
}
</script>

<template>
    <div class="w-full grid md:grid-cols-2 justify-center lg:grid-cols-1 gap-5">
        <RepertoireCard v-for="(item, index) in repertoire" :key="index" v-bind="item" />
    </div>
</template>