<template>
  <a
    href="#"
    class="flex items-center mx-8"
    @mouseenter="() => (hovered = true)"
    @mouseleave="() => (hovered = false)">
    <span class="font-bold text-4xl" :class="{ 'text-primary': hovered }">{{ state }}</span>
    <div class="flex ml-2 border border-gray-300 px-3 py-2 rounded-3xl"
    :class="{ 'border-black': hovered }">
      <span>{{ total }}</span>
      <div
        class="rounded-full bg-green-100 backdrop-blur-lg flex justify-center items-center w-7 ml-2">
        <DonorIcon class="w-5 text-green-700" />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DonorIcon from '../icons/DonorIcon.vue'

defineProps<{
  state: string
  total: string
}>()

const hovered = ref<boolean>(false)
</script>
