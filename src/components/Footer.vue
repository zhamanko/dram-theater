<script>

export default {
  name: 'Footer'
};
</script>

<template>
    <footer class="p-5">
        <img src="@/assets/logo.png" alt="logo">
        <ul class="w-full flex gap-3 flex-wrap justify-center my-4">
            <li class="hover:text-gray-500 cursor-pointer transition">Публічна інформація</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Історія вистав</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Вакансії</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Графік прийому громадян</li>
            <li class="hover:text-gray-500 cursor-pointer transition">Схема залу</li>
        </ul>
        <hr>
        <p class="text-center p-4">ЗАКАРПАТСЬКИЙ АКАДЕМІЧНИЙ ОБЛАСНИЙ УКРАЇНСЬКИЙ МУЗИЧНО-ДРАМАТИЧНИЙ ТЕАТР Імені братів Юрія-Августина та Євгена Шерегіїв
           <br> <span class="text-sm text-gray-500">Вул. І. Чендея, 12 Ужгород, Закарпатська 88018</span></p>
        <hr>
        <p class="text-center text-sm mt-4">© 2025 zhaman</p>
    </footer>
</template>