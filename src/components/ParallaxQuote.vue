<script>
export default {
  props: {
    text: { type: String, required: true },
    author: { type: String, required: true },
    align: { type: String, default: "text-start" }
  },
  data() {
    return {
      offset: 0,
      ticking: false
    }
  },
  methods: {
    updateOffset() {
      if (!this.$refs.box) return
      const rect = this.$refs.box.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      let progress = (windowHeight - rect.top) / (windowHeight + elementHeight)
      progress = Math.min(Math.max(progress, 0), 1)

      this.offset = progress * 100
      this.ticking = false
    },
    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(this.updateOffset)
        this.ticking = true
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true })
    this.updateOffset()
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<template>
  <div ref="box" class="border-y border-gray-300 bg-[#f6f6f6] p-12 my-12 overflow-hidden" :class="align">
    <p class="text-2xl -translate-y-6 transition-transform duration-200 ease-out"
       :style="{ transform: `translateY(${offset * 0.4}px)` }">
      "{{ text }}"
    </p>
    <span class="block mt-2 -translate-y-6 transition-transform duration-200 ease-out"
          :style="{ transform: `translateY(${offset * 0.6}px)` }">
      {{ author }}
    </span>
  </div>
</template>
