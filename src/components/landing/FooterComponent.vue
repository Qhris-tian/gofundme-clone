<template>
  <footer class="bg-white relative flex justify-center border-t border-gray-300 min-h-60">
    <div class="max-w-[72rem] w-full flex justify-between pt-14">
      <div class="w-3/5">
        <button type="button" class="flex px-2 py-1 border rounded-md mb-4 text-sm">
          <CountryFlagIcon country="us" class="w-5 mr-2" />
          United States <span class="mx-1">&middot;</span> English
        </button>

        <div class="flex">
          <p class="mr-6 text-[#767676]">© 2010-{{ year }} GoFundMe</p>

          <nav class="flex">
            <a class="mr-8" href="#">Terms</a>
            <a class="mr-8" href="#">Privacy Notice</a>
            <a class="mr-8" href="#">Legal</a>
            <a class="mr-8" href="#">Accessibility Statement</a>
          </nav>
        </div>
      </div>
      <div>
        <div class="flex justify-around mb-4">
          <FacebookIcon class="social-icon" />
          <YoutubeIcon class="social-icon" />
          <XIcon class="social-icon" />
          <InstagramIcon class="social-icon" />
          <MediumIcon class="social-icon" />
          <MicrophoneIcon class="social-icon !mr-0" />
        </div>
        <div class="flex justify-between items-center">
          <a href="#" class="p-1">
            <img src="../../assets/images/app-store.png" alt="App Store" />
          </a>
          <a href="#" class="p-1">
            <img src="../../assets/images/play-store.png" alt="Play Store" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import MicrophoneIcon from '../icons/MicrophoneIcon.vue'
import YoutubeIcon from '../icons/YoutubeIcon.vue'
import XIcon from '../icons/XIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import MediumIcon from '../icons/MediumIcon.vue'
import FacebookIcon from '../icons/FacebookIcon.vue'
import CountryFlagIcon from '../icons/CountryFlagIcon.vue'

const year = new Date().getFullYear()
</script>

<style scoped>
.social-icon {
  @apply w-4 mr-5;
}
</style>
