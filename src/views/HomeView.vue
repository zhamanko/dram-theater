<script>
import MainAfisha from '@/components/MainAfisha.vue';
import NewsCard from '@/components/NewsCard.vue';
import AfishaCard from '@/components/AfishaCard.vue';

export default {
  name: 'HomeView',
  components: { MainAfisha, NewsCard, AfishaCard },
  data() {
    return {
      offsetY: 0,
      _rafId: null,
      _onScroll: null
    };
  },
  mounted() {
    this._onScroll = () => {
      if (this._rafId) return;
      this._rafId = requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
        this.offsetY = y * 0.5; // швидкість паралакса
        this._rafId = null;
      });
    };
    window.addEventListener('scroll', this._onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this._onScroll);
    if (this._rafId) cancelAnimationFrame(this._rafId);
  }
};
</script>

<template>
  <main class="relative overflow-hidden">
    <!-- Паралакс фонове зображення -->
    <img 
      src="/img/background/Dram-theater.jpg" 
      alt="background" 
      class="absolute top-1/2 left-0 w-full h-screen object-cover object-center"
      :style="{ transform: `translateY(calc(-80% + ${offsetY}px))` }"
    />

    <!-- напівпрозорий білий шар -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-none"></div>

    <!-- Контент поверх -->
    <div class="relative z-10">
      <!-- Афіши ближайшим часом -->
      <div class="text-white">
        <MainAfisha />
      </div>

      <!-- Афіши -->
      <div id="container-afisha" class="bg-white pt-3">
        <h2 class="text-center font-bold p-2 text-2xl pb-5">Афіши</h2>
        <div class="flex flex-row items-center justify-center pb-8">
          <AfishaCard 
          title="Кайдашева сімʼя"
          description="Класика української літератури оживає на сцені..."
          date="25 липня"
          photo="src/assets/img/afisha/kajdasheva-simja.jpg"
          />
        </div>
      </div>

      <!-- Про театр -->
      <div class="text-center p-10 text-white">


        <h2 class="text-2xl font-bold mb-5">Про театр</h2>
        <p>Історія Закарпатського обласного державного українського музично-драматичного театру – це насамперед славна
          сторінка становлення нації, сторінка самопожертви та відданості ідеї творення українського театру на
          Закарпатті.
        </p>
        <button class="bg-red-800 py-2 px-4 rounded-lg hover:bg-red-700 transition text-white mt-4">Дізнатися
          більше</button>

      </div>

       <!-- Новини -->
      <div id="container-news" class="bg-white pt-3">
        <h2 class="text-center font-bold p-2 text-2xl pb-5">Останні новини</h2>
        <div class="flex flex-row items-center justify-center pb-8">
          <NewsCard 
            title="Нова прем’єра вже зовсім близько!" 
            description="Сьогодні в театрі відбулася технічна рада..." 
            photo="/img/news/pro-premjeru-tihe-vushko-3.jpg" 
            date="Пн, 18 липня 2025" 
          />
        </div>
      </div>

      <!-- Партнери -->
      <div class="text-center bg-white p-10">

        <h2 class="text-2xl font-bold">Наші партнери</h2>

        <div class="mt-5 flex flex-row items-center justify-center gap-8">
          <img class="rounded-lg" src="/img/partners/dastor.jpg" alt="dastor" />
          <img class="rounded-lg" src="/img/partners/nemiroff.jpg" alt="nemiroff" />
        </div>

      </div>

      <!-- Приєднуйтесь до нас у соцмережах: -->
      <div class="text-center p-10">
        <h2 class="text-2xl font-bold">Приєднуйтесь до нас</h2>

        <div class="mt-5">
          <div class="flex flex-row items-center justify-center gap-8">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-14">
                <path fill-rule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clip-rule="evenodd" />
              </svg>
            </div>

            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-14">
                <path fill-rule="evenodd"
                  d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
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
    </div>

  </main>
</template>
