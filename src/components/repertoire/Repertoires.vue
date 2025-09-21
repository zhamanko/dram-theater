<script>
import RepertoireCard from './RepertoireCard.vue';

export default {
    components: { RepertoireCard },
    data() {
        return {
            repertoire: [
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', scene: 'Велика сцена', date: 'Пт, 25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', scene: 'Велика сцена', date: 'Нд, 27 липня', photo: './img/afisha/emigrantu.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Мала сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg' },
                { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', scene: 'Велика сцена', date: 'Пт, 25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
                { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', scene: 'Мала сцена', date: 'Нд, 27 липня', photo: './img/afisha/emigrantu.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Велика сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg' },
                { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', scene: 'Велика сцена', date: 'Ср, 30 липня', photo: './img/afisha/prirecheni-m.jpg' },
            ],
        }
    }
}
</script>

<template>
    <div class="w-full flex flex-col gap-5">
        <RepertoireCard v-for="(item, index) in repertoire" :key="index" v-bind="item" />
    </div>
</template>