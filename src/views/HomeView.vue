<template>
  <main class="h-screen w-full overflow-y-scroll" @scroll="handleScroll">
    <Navbar :scroll-top="scrollTop" />

    <LandingComponent :scroll-top="scrollTop" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LandingComponent from '../components/LandingComponent.vue'
import Navbar from '../components/NavbarComponent.vue'

const scrollTop = ref<number>(0)

const handleScroll = (el: any) => (scrollTop.value = el.srcElement.scrollTop)
</script>
