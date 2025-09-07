<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <RouterView class="mt-16 lg:mt-22 flex-1" />
    <Footer />
  </div>
  
</template>

<style scoped>

</style>
