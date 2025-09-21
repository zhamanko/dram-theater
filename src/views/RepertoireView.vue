<script>
import Repertoires from '@/components/repertoire/Repertoires.vue';

export default {
    components: { Repertoires },
    data(){
        return{

        }
    }
}
</script>

<template>
   <main class="relative overflow-hidden flex flex-col items-center px-10">
    <div class="border-b-2 border-gray-200 my-5 pt-5 w-full">
      <h1 class="text-3xl text-center">Репертуар</h1>
      <div class="flex justify-center my-5">
        <div class="relative w-full lg:w-5/6 flex flex-col lg:flex-row gap-2 lg:gap-0  text-xl lg:border rounded-lg">
          <div class="absolute top-0.5 left-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
              stroke="currentColor" class="size-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <input type="text" placeholder="Пошук" class="flex-1 border lg:border-none pl-10 pr-2 py-1 rounded-lg lg:rounded-none ">
          <select name="" id="" class="p-1 rounded-lg lg:rounded-none border lg:border-y-0 lg:border-r-0">
            <option value="">Всі вистави</option>
            <option value="">Для дорослих</option>
            <option value="">Для дітей</option>
          </select>
        </div>
      </div>
    </div>
    <div class="w-full">
      <Repertoires />
    </div>
  </main>
</template>