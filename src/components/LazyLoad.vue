<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  rootMargin: { type: String, default: "0px" },
  threshold: { type: Number, default: 0.1 }
});

const isVisible = ref(false);
const el = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { rootMargin: props.rootMargin, threshold: props.threshold }
  );

  if (el.value) observer.observe(el.value);
});

onUnmounted(() => {
  // автоматично очищається, але на всяк випадок
});
</script>

<template>
  <div ref="el">
    <slot v-if="isVisible" />
  </div>
</template>
