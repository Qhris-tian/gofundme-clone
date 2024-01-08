<template>
  <section class="hero z-0">
    <div
      class="w-full flex justify-center items-center"
      :class="{ 'bg-[#00000080] relative': toggle }"
      :style="{ top: `${top}px`, transform: `scale(${scale})` }">
      <div class="text-center">
        <h1 class="mb-10 text-[#18412d] w-80 py-2 leading-[1] font-bold">Your home for help</h1>
        <a
          class="py-4 px-12 rounded-xl border bg-white text-primary font-bold hover:bg-green-50 z-10"
          :class="{ 'transition-transform scale-90': toggle }"
          href="/create/fundraiser/category">
          Start a GoFundMe
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  scrollTop: number
}>()

const toggle = computed(() => props.scrollTop > 5)

const scale = computed<number>(() => {
  console.log(props.scrollTop);
  
  if (props.scrollTop > 270) return 1.0945

  if (props.scrollTop > 1) return 1 + 0.00035 * props.scrollTop

  return 1
})

const top = computed(() => {
  if (props.scrollTop > 220) return -110

  return props.scrollTop > 5 ? -props.scrollTop / 2 : 0
})
</script>

<style scoped>
.hero {
  background-image: url('../../assets/images/hero-mobile@1x.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  position: sticky;
  top: 0;
  z-index: 0 !important;
}

@media screen and (min-width: 48em) {
  .hero {
    background-image: url('../../assets/images/hero-tablet@1x.jpg');
  }
}

@media screen and (min-width: 64em) {
  .hero {
    background-image: url('../../assets/images/hero-desktop@1x.jpg');
    height: 42rem;
    display: flex;
  }
}
</style>
