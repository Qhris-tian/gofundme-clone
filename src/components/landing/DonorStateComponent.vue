<template>
  <div class="flex items-center mx-8">
    <span class="font-bold text-3xl">{{ state }}</span>
    <div class="flex ml-2 border border-gray-300 px-3 py-2 rounded-3xl">
      <span class="">{{ total }}</span>
      <div
        class="rounded-full bg-green-100 backdrop-blur-lg flex justify-center items-center w-7 ml-2">
        <DonorIcon class="w-5 text-green-700" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DonorIcon from '../icons/DonorIcon.vue'

defineProps<{
  state: string
  total: string
}>()
</script>
