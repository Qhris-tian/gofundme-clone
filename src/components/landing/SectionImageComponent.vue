<template>
  <FadeLeftTransition :duration="duration">
    <a
      :key="toggle ? option1['image'] : option2['image']"
      href="/discover"
      class="flex justify-center p-2 rounded-2xl hover:bg-hover">
      <div class="rounded-2xl">
        <div class="relative rounded-2xl overflow-hidden" :class="{ 'h-[27rem]': isMain }">
          <img
            class="transition hover:scale-110 duration-200 h-full rounded-2xl overflow-hidden"
            :src="toggle ? option1['image'] : option2['image']"
            alt="Sunset in the mountains" />

          <span
            class="bg-[#00000080] rounded-2xl absolute bottom-2 ml-3 text-white px-2 py-1 backdrop-blur-sm text-sm">
            {{ option1['donation'] }} funded
          </span>
        </div>
        <div class="px-2 flex flex-col justify-around" :class="isMain ? 'h-32' : 'h-28'">
          <div class="font-bold leading-4">{{ toggle ? option1['title'] : option2['title'] }}</div>
          <div>
            <span class="block w-full bg-green-50 h-1 mb-1">
              <span class="block w-3/4 bg-primary h-1"></span>
            </span>
            <p class="font-bold">{{ toggle ? option1['raised'] : option2['raised'] }}</p>
          </div>
        </div>
      </div>
    </a>
  </FadeLeftTransition>
</template>

<script setup lang="ts">
import FadeLeftTransition from '../ui/FadeLeftTransition.vue'

interface OptionInterface {
  image: string
  title: string
  raised: string
  donation?: string
}

defineProps<{
  isMain: boolean
  toggle: boolean
  option1: OptionInterface
  option2: OptionInterface
  duration: string
}>()
</script>
