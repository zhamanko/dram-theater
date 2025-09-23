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
    <div class="fixed z-50 bottom-0 text-sm w-full text-center lg:text-start lg:w-auto left-1/2 -translate-x-1/2 bg-white opacity-50 px-2 rounded-t-lg">
      <p>⚠️ Цей сайт містить лише демонстраційний контент. Інформація не є актуальною.</p>
    </div>
  </div>
  
</template>

<style scoped>

</style>
