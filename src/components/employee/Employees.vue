<script>
import EmployeesCard from './EmployeesCard.vue';

export default {
    props: {
        employees: {
            type: Array,
            required: true
        }
    },
    components: { EmployeesCard },
}
</script>

<template>
    <div class="grid justify-center gap-8 sm:px-5 md:px-15 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <EmployeesCard v-for="(item, index) in employees" :key="index" v-bind="item"
            class="hover:scale-108 hover:-translate-y-8 transition" />
    </div>
</template>