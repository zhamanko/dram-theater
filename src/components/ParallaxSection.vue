<script>
export default {
  props: {
    image: { type: String, required: true },
    speed: { type: Number, default: 0.35 }, // 0.2–0.5 — приємний діапазон
    opacity: { type: Number, default: 80 },
  },
  data() {
    return {
      y: 0,
      ticking: false,
      isMobile: false,
    }
  },
  computed: {
    bgStyle() {
      return {
        backgroundImage: `url(${this.image})`,
        backgroundAttachment: 'scroll',
        backgroundPosition: `center calc(50% + ${this.y}px)`,
        willChange: 'background-position',
        backgroundSize: this.isMobile ? '1100px' : '100% 100vh',
      }
    },
  },
  methods: {
    updateOffset() {
      if (!this.$refs.el) return
      const rect = this.$refs.el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const centerDelta = rect.top + rect.height / 2 - vh / 2
      this.y = -centerDelta * this.speed
    },
    onScroll() {
      if (this.ticking) return
      this.ticking = true
      requestAnimationFrame(() => {
        this.updateOffset()
        this.ticking = false
      })
    },
    checkDevice() {
      this.isMobile = window.innerWidth < 768
    },
    onResize() {
      this.updateOffset()
      this.checkDevice()
    },
  },
  mounted() {
    this.updateOffset()
    this.checkDevice()
    window.addEventListener('scroll', this.onScroll, { passive: true })
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<template>
  <section
    ref="el"
    class="relative text-center text-white bg-cover bg-center"
    :style="bgStyle">
    <div :style="{ backgroundColor: `rgba(0,0,0,${opacity/100})` }">
      <slot />
    </div>
  </section>
</template>
