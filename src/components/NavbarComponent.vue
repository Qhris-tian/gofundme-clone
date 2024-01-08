<template>
  <header
    class="flex fixed top-0 inset-x-0 z-50 items-center duration-1500 ease-in-out text-[14.8px]"
    :class="{ 'transition-all h-16 top-5  ': !toggle, ' h-20 bg-white shadow-lg': toggle }">
    <nav
      class="bg-white w-full relative mx-auto flex justify-center h-full max-w-[72rem]"
      :class="{ 'rounded-full': !toggle }">
      <div class="flex items-center w-full">
        <div class="flex justify-start ml-6 items-center w-2/5">
          <a class="flex justify-start items-center nav-link" href="/s">
            <SearchIcon class="w-4 mr-2" />
            Search
          </a>
          <div @click="rotate()" @mouseenter="rotate(1)" @mouseleave="rotate(2)" class="py-1">
            <button type="button" class="flex mr-3 nav-link rounded-md hover:bg-[#3333330d]">
              For individuals
              <DropdownIcon
                :class="'transition-transform duration-500'"
                :style="{ transform: `rotate(${deg}deg)` }" />
            </button>
            <DropdownTransition>
              <div
                v-show="deg > 0"
                class="bg-white absolute top-[3.2rem] grid grid-cols-4 gap-4 px-3 py-7 shadow rounded">
                <p class="font-bold px-2">Discover</p>
                <p class="font-bold px-2">Fundraise For</p>
                <p class="font-bold px-2">How it works</p>
                <p class="font-bold px-2">Resources</p>

                <a href="/discover" class="nav-link col-start-1 px-2">Fundraisers</a>
                <a href="/discover" class="nav-link col-start-2 px-2">Medical</a>
                <a href="/how-it-works" class="nav-link col-start-3 px-2">How GoFundMe Works</a>
                <a href="/discover" class="nav-link col-start-4 px-2">Fundraising tips</a>

                <a href="/discover" class="nav-link col-start-1 px-2">GoFundMe Heroes</a>
                <a href="/discover" class="nav-link col-start-2 px-2">Memorial</a>
                <a href="/discover" class="nav-link col-start-3 px-2">What is crowdfunding?</a>
                <a href="/discover" class="nav-link col-start-4 px-2">Fundraising ideas</a>

                <a href="/discover" class="nav-link col-start-1 px-2">Success stories</a>
                <a href="/discover" class="nav-link col-start-2 px-2">Emergency</a>
                <a href="/discover" class="nav-link col-start-3 px-2">Team fundraising</a>
                <a href="/discover" class="nav-link col-start-4 px-2">Help centre</a>

                <a href="/discover" class="nav-link col-start-2 px-2">Charity</a>
                <a href="/discover" class="nav-link col-start-3 px-2">Pricing</a>
                <a href="/discover" class="nav-link col-start-4 px-2">Blog</a>

                <a href="/discover" class="nav-link col-start-2 px-2">Education</a>

                <a href="/discover" class="nav-link col-start-2 px-2">See all</a>
              </div>
            </DropdownTransition>
          </div>
          <a class="mr-3 nav-link">For charities</a>
        </div>
        <div class="flex justify-center items-center w-1/5">
          <a class="hover:bg-white px-2" href="/">
            <LogoIcon />
          </a>
        </div>
        <div class="flex justify-end items-center w-2/5 mr-6">
          <a class="mr-2 nav-link">How it works</a>
          <a class="mr-2 nav-link">Sign in</a>
          <a
            href="/create/fundraiser/category"
            class="px-3 py-1 border border-primary rounded-2xl text-primary font-bold hover:bg-green-50"
            :class="{ 'bg-primary text-white': toggleButton }">
            Start a GoFundMe
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import SearchIcon from '../components/icons/SearchIcon.vue'
import LogoIcon from '../components/icons/LogoIcon.vue'
import DropdownIcon from '../components/icons/DropdownIcon.vue'
import DropdownTransition from './ui/DropdownTransition.vue'

const props = defineProps<{
  scrollTop: number
}>()

const toggle = computed(() => props.scrollTop > 5)
const toggleButton = computed(() => props.scrollTop > 250)

const deg = ref<number>(0)

const rotate = (value: number = 0) => {
  if (value === 1) {
    deg.value = 180
    return
  }

  if (value === 2) {
    deg.value = 0
    return
  }

  deg.value = deg.value > 0 ? 0 : 180
}
</script>
