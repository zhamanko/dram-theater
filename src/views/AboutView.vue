<script>
import ParallaxSection from '@/components/ParallaxSection.vue';

export default {
  components: { ParallaxSection },
  data() {
    return {
      parallaxOffset: 0
    }
  },
  methods: {
    handleScroll() {
      if (!this.$refs.parallaxBox) return

      const rect = this.$refs.parallaxBox.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // висота блоку
      const elementHeight = rect.height

      // скільки елемент зайшов у вікно (0 = ще не видно, 1 = повністю видно)
      let progress = (windowHeight - rect.top) / (windowHeight + elementHeight)

      // обмежуємо від 0 до 1
      progress = Math.min(Math.max(progress, 0), 1)

      // тепер рухаємо текст тільки в межах блоку
      this.parallaxOffset = progress * 100 // можна міняти 100 -> більше/менше
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() { // Vue 3
    window.removeEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() { // Vue 2
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<template>
  <main class="relative overflow-hidden">
    <ParallaxSection image="./img/background/AboutBackground.jpg" speed="0.3" opacity="30" class="h-100 mb-12">
      <div class="flex justify-center items-center h-100">
        <h1 class="text-3xl">Історія</h1>
      </div>
    </ParallaxSection>
    <div class="flex flex-col lg:flex-row-reverse gap-5 px-20 pb-20">
      <div class="lg:px-15 flex flex-col justify-center">
        <h2 class="text-xl text-center">Lorem ipsum dolor sit</h2>
        <p class="text-justify py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt doloribus
          obcaecati
          delectus consequuntur soluta, praesentium,
          laudantium porro iusto qui cumque quaerat rerum dignissimos veniam sed quibusdam beatae deserunt cupiditate
          ratione?</p>
        <p class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt doloribus obcaecati
          delectus consequuntur soluta, praesentium,
          laudantium porro iusto qui cumque quaerat rerum dignissimos veniam sed quibusdam beatae deserunt cupiditate
          ratione?</p>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row-reverse gap-5 px-20">
      <div class="lg:px-15 flex flex-col justify-center">
        <h2 class="text-xl text-center">Lorem ipsum dolor sit</h2>
        <p class="text-justify py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt doloribus
          obcaecati
          delectus consequuntur soluta, praesentium,
          laudantium porro iusto qui cumque quaerat rerum dignissimos veniam sed quibusdam beatae deserunt cupiditate
          ratione?</p>
        <p class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt doloribus obcaecati
          delectus consequuntur soluta, praesentium,
          laudantium porro iusto qui cumque quaerat rerum dignissimos veniam sed quibusdam beatae deserunt cupiditate
          ratione?</p>
      </div>
      <img src="/img/about/One.jpg" alt="" class="lg:w-1/2 xl:w-2/5 rounded-lg shadow-lg" />
    </div>

    <div ref="parallaxBox" class="border-y border-gray-300 bg-[#f6f6f6] p-12 my-12 overflow-hidden">
      <p class="text-2xl transform transition-transform duration-75"
        :style="{ transform: `translateY(${parallaxOffset * 0.3}px)` }">
        "Завдання театру — не залишати людину порожньою"
      </p>
      <span class="block mt-2 transition-transform duration-75"
        :style="{ transform: `translateY(${parallaxOffset * 0.5}px)` }">
        В'ячеслав Довженко
      </span>
    </div>

    <div class="flex flex-col lg:flex-row gap-5 px-20">
      <div class="lg:px-15 flex flex-col justify-center">
        <h2 class="text-xl text-center">Lorem ipsum dolor sit</h2>
        <p class="text-justify py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt doloribus
          obcaecati
          delectus consequuntur soluta, praesentium,
          laudantium porro iusto qui cumque quaerat rerum dignissimos veniam sed quibusdam beatae deserunt cupiditate
          ratione?</p>
        <p class="text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt doloribus obcaecati
          delectus consequuntur soluta, praesentium,
          laudantium porro iusto qui cumque quaerat rerum dignissimos veniam sed quibusdam beatae deserunt cupiditate
          ratione?</p>
      </div>
      <img src="/img/about/One.jpg" alt="" class="lg:w-1/2 xl:w-2/5 rounded-lg shadow-lg" />
    </div>

  </main>
</template>

<style></style>
