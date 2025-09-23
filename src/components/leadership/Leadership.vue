<script>
import LeadershipCard from './LeadershipCard.vue';

export default {
    components: { LeadershipCard },
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
    <div class="grid justify-center gap-8 sm:px-5 md:px-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <LeadershipCard v-for="(item, index) in leaders" :key="index" v-bind="item" class="hover:scale-108 hover:-translate-y-8 transition"/>
    </div>
</template>