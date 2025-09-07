<script>

export default {
  name: 'Footer'
};
</script>

<template>
    <footer class="pb-5 px-5 border-t-2 border-gray-200">
    <div class="flex flex-col justify-center items-center 
    xl:flex-row-reverse xl:justify-around xl:gap-5">
        <img src="@/assets/logo.png" alt="logo" class="max-h-26">
        <ul class="w-full flex gap-3 flex-wrap justify-center my-4
        xl:flex-col xl:w-auto xl:gap-1">
            <li class="hover:text-gray-500 cursor-pointer transition">Публічна інформація</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Історія вистав</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Вакансії</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Графік прийому громадян</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Схема залу</li>
        </ul>
    </div>
        <hr>
        <p class="text-center p-4">ЗАКАРПАТСЬКИЙ АКАДЕМІЧНИЙ ОБЛАСНИЙ УКРАЇНСЬКИЙ МУЗИЧНО-ДРАМАТИЧНИЙ ТЕАТР Імені братів Юрія-Августина та Євгена Шерегіїв
           <br> <span class="text-sm text-gray-500">Вул. І. Чендея, 12 Ужгород, Закарпатська 88018</span></p>
        <hr>
        <p class="text-center text-sm mt-4">© 2025 zhaman</p>
    </footer>
</template>