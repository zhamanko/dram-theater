<script>
export default {
  props: {
    text: { type: String, required: true },
    author: { type: String, required: true },
    align: { type: String, default: "text-start" } // можна text-end
  },
  data() {
    return {
      offset: 0
    }
  },
  methods: {
    handleScroll() {
      if (!this.$refs.box) return
      const rect = this.$refs.box.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height

      let progress = (windowHeight - rect.top) / (windowHeight + elementHeight)
      progress = Math.min(Math.max(progress, 0), 1)

      this.offset = progress * 100
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
}
</script>

<template>
  <div ref="box" class="border-y border-gray-300 bg-[#f6f6f6] p-12 my-12 overflow-hidden" :class="align">
    <p class="text-2xl transform -translate-y-6 transition-transform duration-75"
       :style="{ transform: `translateY(${offset * 0.4}px)` }">
      "{{ text }}"
    </p>
    <span class="block mt-2 -translate-y-6 transition-transform duration-75"
          :style="{ transform: `translateY(${offset * 0.6}px)` }">
      {{ author }}
    </span>
  </div>
</template>
