<template>
  <section
    ref="el"
    class="relative text-center text-white bg-cover bg-center"
    :style="bgStyle">
    <div class="bg-black/0">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  speed: { type: Number, default: 0.35 }, // 0.2–0.5 — приємний діапазон
})

const el = ref(null)
const y = ref(0)
let ticking = false

function updateOffset() {
  if (!el.value) return
  const rect = el.value.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight

  // Зсуваємо фон залежно від того, де секція відносно центру в'юпорту
  const centerDelta = rect.top + rect.height / 2 - vh / 2
  y.value = -centerDelta * props.speed
}

function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    updateOffset()
    ticking = false
  })
}

const bgStyle = computed(() => ({
  backgroundImage: `url(${props.image})`,
  backgroundSize: 'cover',
  backgroundSize: '800px',
  backgroundAttachment: 'scroll', // важливо: без bg-fixed
  backgroundPosition: `center calc(50% + ${y.value}px)`,
  willChange: 'background-position',
}))

onMounted(() => {
  updateOffset()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', updateOffset)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', updateOffset)
})
</script>
