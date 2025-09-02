<script>
import MainAfisha from '@/components/MainAfisha.vue';
import NewsCard from '@/components/NewsCard.vue';
import AfishaCard from '@/components/AfishaCard.vue';

import ParallaxSection from '@/components/ParallaxSection.vue';

export default {
  name: 'HomeView',
  components: { MainAfisha, NewsCard, AfishaCard, ParallaxSection },
  data() {
    return {
      afisha: [
        { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', date: '25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
        { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', date: '27 липня', photo: './img/afisha/emigrantu.jpg' },
        { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', date: '30 липня', photo: './img/afisha/prirecheni-m.jpg' },

       { title: 'Кайдашева сімʼя', description: 'Класика української літератури оживає на сцені...', date: '25 липня', photo: './img/afisha/kajdasheva-simja.jpg' },
        { title: 'Емігранти', description: '«Приречені» — це трагічна історія про жінок...', date: '27 липня', photo: './img/afisha/emigrantu.jpg' },
        { title: 'Приречені', description: 'В основі – п’єса одного з найвідоміших польських письменників...', date: '30 липня', photo: './img/afisha/prirecheni-m.jpg' },

      ],
      currentIndex: 0,
      progress: 0,
      intervalId: null,
      touchStartX: 0,
      touchEndX: 0,
      visibleCount: 1, // Змінив на 1 для більш передбачуваної поведінки
    }
  },
  methods: {
    startSlider() {
      // Спочатку очищаємо будь-який існуючий інтервал
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }

      let step = 0;
      this.intervalId = setInterval(() => {
        step += 2;
        if (step >= 100) {
          step = 0;
          this.nextSlide();
        }
        this.progress = step;
      }, 100);
    },

    resetProgress() {
      this.progress = 0;
    },

    nextSlide() {
      this.clearTimer(); // Очищаємо таймер
      this.currentIndex = (this.currentIndex + 1) % this.afisha.length;
      this.resetProgress();
      this.startSlider(); // Перезапускаємо таймер
    },

    prevSlide() {
      this.clearTimer(); // Очищаємо таймер
      this.currentIndex = (this.currentIndex - 1 + this.afisha.length) % this.afisha.length;
      this.resetProgress();
      this.startSlider(); // Перезапускаємо таймер
    },

    clearTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },

    // Оновлені методи для свайпу
    onTouchStart(e) {
      this.touchStartX = e.changedTouches[0].screenX;
      this.clearTimer(); // Зупиняємо таймер при початку свайпу
    },

    onTouchEnd(e) {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    },

    onMouseDown(e) {
      this.touchStartX = e.screenX;
      this.clearTimer(); // Зупиняємо таймер при початку перетягування мишею
    },

    onMouseUp(e) {
      this.touchEndX = e.screenX;
      this.handleSwipe();
    },

    handleSwipe() {
      const diff = this.touchEndX - this.touchStartX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          this.prevSlide();
        } else {
          this.nextSlide();
        }
      } else {
        // Якщо свайп був замалий, просто перезапускаємо таймер
        this.startSlider();
      }
    },
  },

  mounted() {
    this.startSlider();
  },

  beforeUnmount() {
    this.clearTimer();
  },
};
</script>

<template>
  <main class="relative overflow-hidden">
    <!-- Афіши ближайшим часом -->
    <div class="text-white">
      <MainAfisha />
    </div>

    <!-- Афіши -->
    <div id="container-afisha" class="bg-white pt-5 pb-2">
      <h2 class="text-center font-bold text-2xl">Афіши</h2>

      <!-- Слайдер -->
      <div class="relative w-full pt-5 pb-8 max-w-4xl mx-auto overflow-hidden" @touchstart="onTouchStart"
        @touchend="onTouchEnd" @mousedown="onMouseDown" @mouseup="onMouseUp">
        <div class="flex transition-transform duration-700 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(item, i) in afisha" :key="i" class="flex-shrink-0 w-full px-4">
            <AfishaCard v-bind="item" :class="i === currentIndex ? 'scale-100' : 'scale-90 opacity-80'"
              class="transition-all duration-500 mx-auto" />
          </div>
        </div>

        <!-- Кнопки -->
        <button
          class="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-12 bg-black/30 text-white flex items-center justify-center rounded-full ml-2"
          @click="prevSlide">
          ‹
        </button>
        <button
          class="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-12 bg-black/30 text-white flex items-center justify-center rounded-full mr-2"
          @click="nextSlide">
          ›
        </button>

        <!-- Смуги прогресу (карусель) -->
        <div class="absolute bottom-0 left-0 w-full flex justify-center items-center gap-2 px-2 mb-2">
          <div v-for="(item, i) in afisha" :key="i"
            class="transition-all duration-500 rounded bg-gray-300 overflow-hidden"
            :class="i === currentIndex ? 'h-2 w-16' : 'h-1 w-6'">
            <div class="h-full bg-red-500 transition-all duration-100"
              :style="{ width: i < currentIndex ? '100%' : i === currentIndex ? progress + '%' : '0%' }"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Про театр -->
    <ParallaxSection image="./img/background/dram-theater.jpg" speed="0.3">
      <div class=" py-20 px-4">
        <h2 class="text-2xl font-bold mb-5">Про театр</h2>
        <p>
          Історія Закарпатського обласного державного українського музично-драматичного театру – це насамперед славна
          сторінка становлення нації, сторінка самопожертви та відданості ідеї творення українського театру на
          Закарпатті.
        </p>
        <button class="bg-red-800 py-2 px-4 rounded-lg hover:bg-red-700 transition text-white mt-4">
          Дізнатися більше
        </button>
      </div>
    </ParallaxSection>


    <!-- Новини -->
    <div id="container-news" class="bg-white pt-3">
      <h2 class="text-center font-bold p-2 text-2xl pb-5">Останні новини</h2>
      <div class="flex flex-row items-center justify-center pb-8">
        <NewsCard title="Нова прем’єра вже зовсім близько!" description="Сьогодні в театрі відбулася технічна рада..."
          photo="./img/news/pro-premjeru-tihe-vushko-3.jpg" date="Пн, 18 липня 2025" />
      </div>
    </div>

    <!-- Партнери -->
    <div class="text-center bg-red-900 pt-5 pb-10">

      <h2 class="text-2xl font-bold text-white">Наші партнери</h2>

      <div class="mt-5 flex flex-row items-center justify-center gap-8">
        <img class="rounded-lg" src="/img/partners/dastor.jpg" alt="dastor" />
        <img class="rounded-lg" src="/img/partners/nemiroff.jpg" alt="nemiroff" />
      </div>

    </div>


    <!-- Контакти -->
    <div class="p-10 bg-white">

      <h2 class="text-2xl font-bold text-center">Звʼязатись з нами</h2>

      <div class="flex flex-col gap-8 mt-5">
        <form action="">
          <div>
            <label for="">Імʼя:</label>
            <input class="border border-gray-300 rounded px-2 py-1 w-full" type="text" />
          </div>

          <div>
            <label for="">Електронна пошта:</label>
            <input class="border border-gray-300 rounded px-2 py-1 w-full" type="text" />
          </div>

          <div>
            <label for="">Повідомлення:</label>
            <textarea class="border border-gray-300 rounded px-2 py-1 w-full" rows="4"></textarea>
          </div>
          <button class="bg-red-800 w-full py-2 px-4 rounded-lg hover:bg-red-700 transition text-white mt-4"
            type="submit">Відправити</button>
        </form>
      </div>
    </div>

    <!-- Приєднуйтесь до нас у соцмережах: -->
    <ParallaxSection image="./img/background/social.jpg" speed="0.2">
      <div class="p-10">
        <h2 class="text-2xl font-bold">Приєднуйтесь до нас</h2>

        <div class="mt-5">
          <div class="flex flex-row items-center justify-center gap-8">
            <!-- Фейсбук -->
            <div>
              <a href="https://www.facebook.com/Uzhgorodmuzdramteatr/?locale=uk_UA"
                class="active:scale-125 hover:scale-125 transition inline-block">
                <svg fill="#ffffff" width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path
                      d="M44,7H20A13,13,0,0,0,7,20V44A13,13,0,0,0,20,57H44A13,13,0,0,0,57,44V20A13,13,0,0,0,44,7ZM33,55V38a1,1,0,0,0-1-1H27V31h5a1,1,0,0,0,1-1V22a5,5,0,0,1,5-5h8v6H42a3,3,0,0,0-3,3v4a1,1,0,0,0,1,1h6v6H40a1,1,0,0,0-1,1V55ZM55,44A11,11,0,0,1,44,55H41V39h6a1,1,0,0,0,1-1V30a1,1,0,0,0-1-1H41V26a1,1,0,0,1,1-1h5a1,1,0,0,0,1-1V16a1,1,0,0,0-1-1H38a7,7,0,0,0-7,7v7H26a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h5V55H20A11,11,0,0,1,9,44V20A11,11,0,0,1,20,9H44A11,11,0,0,1,55,20Z">
                    </path>
                  </g>
                </svg>
              </a>
            </div>

            <!-- Інстаграм -->
            <div>
              <a href="https://www.instagram.com/dramteatruzh/"
                class="active:scale-125 hover:scale-125 transition inline-block">
                <svg fill="#ffffff" width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <title></title>
                    <path
                      d="M44,57H20A13,13,0,0,1,7,44V20A13,13,0,0,1,20,7H44A13,13,0,0,1,57,20V44A13,13,0,0,1,44,57ZM20,9A11,11,0,0,0,9,20V44A11,11,0,0,0,20,55H44A11,11,0,0,0,55,44V20A11,11,0,0,0,44,9Z">
                    </path>
                    <path
                      d="M32,43.67A11.67,11.67,0,1,1,43.67,32,11.68,11.68,0,0,1,32,43.67Zm0-21.33A9.67,9.67,0,1,0,41.67,32,9.68,9.68,0,0,0,32,22.33Z">
                    </path>
                    <path
                      d="M44.5,21A3.5,3.5,0,1,1,48,17.5,3.5,3.5,0,0,1,44.5,21Zm0-5A1.5,1.5,0,1,0,46,17.5,1.5,1.5,0,0,0,44.5,16Z">
                    </path>
                  </g>
                </svg>
              </a>
            </div>

            <!-- Тікток -->
            <div>
              <a href="https://www.tiktok.com/@dramteatruzh"
                class="active:scale-125 hover:scale-125 transition inline-block">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
              </a>
            </div>

            <!-- Ютуб -->
            <div>
              <a href="https://www.youtube.com/@%D0%94%D1%80%D0%B0%D0%BC%D1%82%D0%B5%D0%B0%D1%82%D1%80%D0%A3%D0%B6%D0%B3%D0%BE%D1%80%D0%BE%D0%B4"
                class="active:scale-125 hover:scale-125 transition inline-block">
                <svg width="64px" height="64px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M18.168 19.0028C20.4724 19.0867 22.41 17.29 22.5 14.9858V9.01982C22.41 6.71569 20.4724 4.91893 18.168 5.00282H6.832C4.52763 4.91893 2.58998 6.71569 2.5 9.01982V14.9858C2.58998 17.29 4.52763 19.0867 6.832 19.0028H18.168Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12.008 9.17784L15.169 11.3258C15.3738 11.4454 15.4997 11.6647 15.4997 11.9018C15.4997 12.139 15.3738 12.3583 15.169 12.4778L12.008 14.8278C11.408 15.2348 10.5 14.8878 10.5 14.2518V9.75184C10.5 9.11884 11.409 8.77084 12.008 9.17784Z"
                      stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </ParallaxSection>
  </main>
</template>
