<script>
import Employees from '@/components/employee/Employees.vue';

export default {
    components: { Employees },
    data() {
        return {
            leaders: [
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Директор-художній керівник, артист драми, провідний майстер сцени' },
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Директор-художній керівник, артист драми, провідний майстер сцени' },
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Директор-художній керівник, артист драми, провідний майстер сцени' },
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Директор-художній керівник, артист драми, провідний майстер сцени' },
                { img: 'https://picsum.photos/210/314', name: 'Іван Іванович Іванов', position: 'Директор-художній керівник, артист драми, провідний майстер сцени' },
            ]
        }
    }
}
</script>

<template>
    <main class="relative overflow-hidden px-4 mb-12">
        <h1 class="text-2xl my-8 text-center">Керівництво театру</h1>
        <Employees :employees="leaders"/>
    </main>
</template>