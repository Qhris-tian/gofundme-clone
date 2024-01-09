<template>
  <div @click="closeDropdowns">
    <HeroSectionComponent :scrollTop="scrollTop" />

    <section class="relative z-10 rounded-t-3xl bg-white pt-24 -mt-16">
      <div class="flex justify-center">
        <div class="max-w-[72rem] mb-16">
          <h2 class="mb-8 font-bold">Discover fundraiser inspired by what you care about</h2>
          <div class="flex justify-between">
            <button
              type="button"
              class="flex bg-[#333333] text-white font-bold py-2 px-4 rounded-3xl"
              @click="toggleWorldDropdown">
              Happening worldwide
              <DropdownIcon
                :class="'transition-transform duration-500 ml-2'"
                :style="{ transform: `rotate(${deg}deg)` }" />
            </button>
            <DropdownTransition>
              <div v-show="deg > 0" class="bg-white absolute px-3 my-12 shadow rounded z-10">
                <ul>
                  <li>
                    <a href="#" class="h-options">
                      <TargetIconVue class="bg-hover p-2 w-10 rounded-3xl" />
                      <div class="ml-4 pr-7">
                        <h3>Close to target</h3>
                        <div class="text-gray-500 text-sm">
                          Fundraisers within 5% of their targets
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="h-options">
                      <MegaphoneIconVue class="bg-hover p-2 w-10 rounded-3xl" />
                      <div class="ml-4 pr-7">
                        <h3>Just launched</h3>
                        <div class="text-gray-500 text-sm">
                          Fundraisers started in the last two days
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="h-options">
                      <FlashIcon class="bg-hover p-2 w-10 rounded-3xl" />
                      <div class="ml-4 pr-7">
                        <h3>Needs momentum</h3>
                        <div class="text-gray-500 text-sm">
                          Fundraisers that need a little boost
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="h-options">
                      <GrowthIconVue class="bg-hover p-2 w-10 rounded-3xl" />
                      <div class="ml-4 pr-7">
                        <h3>Happening worldwide</h3>
                        <div class="text-gray-500 text-sm">
                          Fundraisers in high donor activity areas
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="h-options">
                      <CharityBankIcon class="bg-hover p-2 w-10 rounded-3xl" />
                      <div class="ml-4 pr-7">
                        <h3>Charities</h3>
                        <div class="text-gray-500 text-sm">Fundraisers for popular charities</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </DropdownTransition>
            <div>
              <button
                type="button"
                @click="changeIndex"
                class="border shadow p-2 rounded-3xl mr-2 hover:bg-hover">
                <ArrowLeftIcon class="w-5" />
              </button>
              <button
                type="button"
                @click="changeIndex"
                class="border shadow p-2 rounded-3xl hover:bg-hover">
                <ArrowRightIcon class="w-5" />
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-5 my-4 duration-400">
            <SectionImageComponent
              :is-main="true"
              :toggle="index"
              :duration="'400'"
              :option1="{
                image: 'src/assets/images/img_2.jpeg',
                title: 'The Precious Life of Rory DeCristoforo',
                raised: '$691,009',
                donation: '91%'
              }"
              :option2="{
                image: 'src/assets/images/img_7.webp',
                title: 'Helft Jeromes Familie nach tragischem Verlust',
                raised: '$56,555',
                donation: '91%'
              }" />

            <div class="grid grid-cols-2 gap-1 duration-500">
              <SectionImageComponent
                :is-main="false"
                :toggle="index"
                :duration="'500'"
                :option1="{
                  image: 'src/assets/images/img_1.webp',
                  title: 'Dan\'s Recovery Journey',
                  raised: '$129,032',
                  donation: '91%'
                }"
                :option2="{
                  image: 'src/assets/images/img_3.webp',
                  title: 'Fundraising for Rajanikar’s Family',
                  raised: '$248,443',
                  donation: '91%'
                }" />

              <SectionImageComponent
                :is-main="false"
                :toggle="index"
                :duration="'700'"
                :option1="{
                  image: 'src/assets/images/img_4.webp',
                  title: 'Dorazio Family House Fire Relief',
                  raised: '$129,032',
                  donation: '91%'
                }"
                :option2="{
                  image: 'src/assets/images/img_5.webp',
                  title: 'Gaby\'s Prosthetic Journey',
                  raised: '$129,032',
                  donation: '91%'
                }" />

              <SectionImageComponent
                :is-main="false"
                :toggle="index"
                :duration="'500'"
                :option1="{
                  image: 'src/assets/images/img_6.webp',
                  title: 'Pothabathula\'s family medical and funeral expenses',
                  raised: '$417,734',
                  donation: '91%'
                }"
                :option2="{
                  image: 'src/assets/images/img_8.webp',
                  title: 'Help our little man get life saving surgery.',
                  raised: '£143,704',
                  donation: '91%'
                }" />

              <SectionImageComponent
                class="duration-700"
                :is-main="false"
                :toggle="index"
                :duration="'700'"
                :option1="{
                  image: 'src/assets/images/img_9.webp',
                  title: 'Help Bring Hope To 4 Kids Who lost Their Mother',
                  raised: '$151,445',
                  donation: '91%'
                }"
                :option2="{
                  image: 'src/assets/images/img_10.webp',
                  title: 'Help for Thilak Nagarajan family',
                  raised: '$86,360',
                  donation: '91%'
                }" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-full mb-20">
        <div class="flex justify-center">
          <div class="max-w-[72rem] w-full flex justify-start">
            <div>
              <h2>Help happens here</h2>
              <p class="text-[#767676]">
                GoFundMe is where communities from around the world come together to make a
                difference. Explore cities that are receiving the most donations right now.
              </p>
            </div>
          </div>
        </div>

        <div
          class="w-full mt-14 inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
          @mouseenter="() => (pauseSlider1 = true)"
          @mouseleave="() => (pauseSlider1 = false)">
          <div
            class="flex items-center justify-center md:justify-start animate-infinite-scroll"
            :class="{ 'animation-pause': pauseSlider1 }">
            <DonorStateComponent :state="'Houstin'" :total="'654,430'" />
            <DonorStateComponent :state="'Philadelphia'" :total="'565,430'" />
            <DonorStateComponent :state="'Jamaica'" :total="'654,430'" />
            <DonorStateComponent :state="'Saltpond'" :total="'565,430'" />
            <DonorStateComponent :state="'Helena'" :total="'565,430'" />
            <DonorStateComponent :state="'Regina'" :total="'565,430'" />
            <DonorStateComponent :state="'Sekunde'" :total="'565,430'" />
          </div>
          <div
            class="flex items-center justify-center md:justify-start animate-infinite-scroll"
            :class="{ 'animation-pause': pauseSlider1 }">
            <DonorStateComponent :state="'Houstin'" :total="'654,430'" />
            <DonorStateComponent :state="'Philadelphia'" :total="'565,430'" />
            <DonorStateComponent :state="'Jamaica'" :total="'654,430'" />
            <DonorStateComponent :state="'Saltpond'" :total="'565,430'" />
            <DonorStateComponent :state="'Helena'" :total="'565,430'" />
            <DonorStateComponent :state="'Regina'" :total="'565,430'" />
            <DonorStateComponent :state="'Sekunde'" :total="'565,430'" />
          </div>
        </div>

        <div
          class="w-full mt-14 inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:animation-pause"
          @mouseenter="() => (pauseSlider2 = true)"
          @mouseleave="() => (pauseSlider2 = false)">
          <div
            class="flex items-center justify-center md:justify-start animate-infinite-scroll-left"
            :class="{ 'animation-pause': pauseSlider2 }">
            <DonorStateComponent :state="'Houstin'" :total="'654,430'" />
            <DonorStateComponent :state="'Philadelphia'" :total="'565,430'" />
            <DonorStateComponent :state="'Jamaica'" :total="'654,430'" />
            <DonorStateComponent :state="'Saltpond'" :total="'565,430'" />
            <DonorStateComponent :state="'Helena'" :total="'565,430'" />
            <DonorStateComponent :state="'Regina'" :total="'565,430'" />
            <DonorStateComponent :state="'Sekunde'" :total="'565,430'" />
          </div>
          <div
            class="flex items-center justify-center md:justify-start animate-infinite-scroll-left"
            :class="{ 'animation-pause': pauseSlider2 }">
            <DonorStateComponent :state="'Houstin'" :total="'654,430'" />
            <DonorStateComponent :state="'Philadelphia'" :total="'565,430'" />
            <DonorStateComponent :state="'Jamaica'" :total="'654,430'" />
            <DonorStateComponent :state="'Saltpond'" :total="'565,430'" />
            <DonorStateComponent :state="'Helena'" :total="'565,430'" />
            <DonorStateComponent :state="'Regina'" :total="'565,430'" />
            <DonorStateComponent :state="'Sekunde'" :total="'565,430'" />
          </div>
        </div>

        <div
          class="w-full mt-14 inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:animation-pause"
          @mouseenter="() => (pauseSlider3 = true)"
          @mouseleave="() => (pauseSlider3 = false)">
          <div
            class="flex items-center justify-center md:justify-start animate-infinite-scroll"
            :class="{ 'animation-pause': pauseSlider3 }">
            <DonorStateComponent :state="'Houstin'" :total="'654,430'" />
            <DonorStateComponent :state="'Philadelphia'" :total="'565,430'" />
            <DonorStateComponent :state="'Jamaica'" :total="'654,430'" />
            <DonorStateComponent :state="'Saltpond'" :total="'565,430'" />
            <DonorStateComponent :state="'Helena'" :total="'565,430'" />
            <DonorStateComponent :state="'Regina'" :total="'565,430'" />
            <DonorStateComponent :state="'Sekunde'" :total="'565,430'" />
          </div>
          <div
            class="flex items-center justify-center md:justify-start animate-infinite-scroll"
            :class="{ 'animation-pause': pauseSlider3 }">
            <DonorStateComponent :state="'Houstin'" :total="'654,430'" />
            <DonorStateComponent :state="'Philadelphia'" :total="'565,430'" />
            <DonorStateComponent :state="'Jamaica'" :total="'654,430'" />
            <DonorStateComponent :state="'Saltpond'" :total="'565,430'" />
            <DonorStateComponent :state="'Helena'" :total="'565,430'" />
            <DonorStateComponent :state="'Regina'" :total="'565,430'" />
            <DonorStateComponent :state="'Sekunde'" :total="'565,430'" />
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="max-w-[72rem] mb-10">
          <h2 class="mb-8">Featured topics</h2>
          <div
            class="flex rounded-xl overflow-hidden max-h-80"
            @mouseenter="changefeatureTopicHovered"
            @mouseleave="changefeatureTopicHovered">
            <img class="w-1/2" src="../assets/images/featured-topics.png" alt="Feature Topics" />
            <div class="bg-hover px-16 py-20">
              <h3 class="mb-4 text-xl font-bold px-3">2023 Year in Help review</h3>
              <p class="mb-12 text-[#767676] px-3">
                Explore this year's most generous cities, unforgettable stories around the globe,
                and the data behind your collective kindness. Look waht help can do.
              </p>

              <a
                href="#"
                class="font-bold flex items-center rounded-lg w-36 py-2 px-3 transition ease-linear delay-0 duration-300 tracking-wide"
                :class="{ 'bg-white translate-x-2': featureTopicHovered }"
                >Read more
                <ChevronRightIcon class="pl-1 w-5" />
              </a>
            </div>
          </div>

          <div class="mt-8 mb-10">
            <div class="grid grid-cols-3 gap-8">
              <div
                @mouseenter="() => (faqHovered = true)"
                @mouseleave="() => (faqHovered = false)"
                class="rounded-xl overflow-hidden min-h-96">
                <div class="relative h-3/5 faq">
                  <div
                    class="px-2 py-1 bg-[#f0eaf4] absolute left-2 top-2 rounded-3xl font-bold text-[#3a2468] text-sm">
                    Urgent cause
                  </div>
                </div>
                <div class="bg-hover h-full p-4 tracking-wide">
                  <h3 class="text-lg mb-8 p-2">Fundraising FAQs: Israel/Gaza</h3>
                  <a href="#" class="cause-nav" :class="{ 'bg-white translate-x-2': faqHovered }"
                    >Learn more <ChevronRightIcon class="w-5 pl-1" />
                  </a>
                </div>
              </div>

              <div
                @mouseenter="() => (reliefHovered = true)"
                @mouseleave="() => (reliefHovered = false)"
                class="rounded-xl overflow-hidden min-h-96">
                <div class="relative h-3/5 tornado-relief">
                  <div
                    class="px-2 py-1 bg-[#f0eaf4] absolute left-2 top-2 rounded-3xl font-bold text-[#3a2468] text-sm">
                    Urgent cause
                  </div>
                </div>
                <div class="bg-hover h-full p-4 tracking-wide">
                  <h3 class="text-lg mb-8 p-2">Tornado relief</h3>
                  <a href="#" class="cause-nav" :class="{ 'bg-white translate-x-2': reliefHovered }"
                    >Donate now <ChevronRightIcon class="w-5 pl-1" />
                  </a>
                </div>
              </div>

              <div
                @mouseenter="() => (donationHovered = true)"
                @mouseleave="() => (donationHovered = false)"
                class="rounded-xl overflow-hidden min-h-96">
                <div class="relative h-3/5 holiday">
                  <div
                    class="px-2 py-1 bg-[#f0eaf4] absolute left-2 top-2 rounded-3xl font-bold text-[#3a2468] text-sm">
                    Season of giving
                  </div>
                </div>
                <div class="bg-hover h-full p-4 tracking-wide">
                  <h3 class="text-lg mb-8 p-2">Donate to the Holiday Drive</h3>
                  <a
                    href="#"
                    class="cause-nav"
                    :class="{ 'bg-white translate-x-2': donationHovered }"
                    >Donate now <ChevronRightIcon class="w-5 pl-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="max-w-[72rem] mb-20">
          <div class="flex justify-between items-center mb-10">
            <h2>How GoFundMe works</h2>
            <a href="#" class="px-3 py-1 border border-gray-700 rounded-xl">Learn more</a>
          </div>

          <div class="relative">
            <img src="../assets/images/home-video.jpg" alt="How GoFundMe works" />
            <div class="flex absolute top-1/2 justify-center w-full items-center">
              <a href="#" class="flex bg-white rounded-lg py-3 px-5">
                <PlayIcon class="w-5 mr-2" />
                <p class="font-bold">Play 1 min video</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-16">
        <div
          class="w-full flex justify-center bg-[#012d19] transition-all ease-in-out duration-500"
          :class="{ 'max-w-[80rem] rounded-3xl': scrollTop > 2450 }">
          <div class="max-w-[72rem] py-48">
            <h3 class="font-bold text-4xl text-[40px] text-white mb-14">We've got you covered.</h3>
            <p class="font-bold leading-[1.4] text-[40px] text-white pr-40">
              GoFundMe is a trusted leader in online fundraising. With
              <span class="underline">simple pricing</span> and a team of
              <span class="underline">Trust & Safety</span> experts in your corner, you can raise
              money or make a donation with peace of mind.
            </p>
          </div>
        </div>
      </div>

      <div class="flex justify-center mb-36">
        <div class="max-w-[72rem] w-full">
          <h2 class="pb-3">Fundraise for anyone</h2>
          <ul class="">
            <li
              @mouseenter="() => (yourselfHovered = true)"
              @mouseleave="() => (yourselfHovered = false)">
              <a href="#" class="flex border-b border-gray-300 py-12 items-center justify-between">
                <div>
                  <h3 class="font-bold text-4xl text-[40px]">Yourself</h3>
                  <p class="text-[#767676] pt-5 text-lg tracking-wide">
                    Funds are delivered to your bank account for your own use
                  </p>
                </div>
                <div
                  class="rounded-full w-8 h-8 flex justify-center items-center border transition-all duration-200"
                  :class="{
                    'bg-white text-black': yourselfHovered,
                    'bg-black text-white': !yourselfHovered
                  }">
                  <ChevronRightIcon /></div
              ></a>
            </li>
            <li
              @mouseenter="() => (fnfLiHovered = true)"
              @mouseleave="() => (fnfLiHovered = false)">
              <a href="#" class="flex border-b border-gray-300 py-12 items-center justify-between">
                <div>
                  <h3 class="font-bold text-4xl text-[40px]">Friends and family</h3>
                  <p class="text-[#767676] pt-5 text-lg tracking-wide">
                    You'll invite a beneficiary to receive funds or distribute them yourself
                  </p>
                </div>
                <div
                  class="rounded-full w-8 h-8 flex justify-center items-center border transition-all duration-200"
                  :class="{
                    'bg-white text-black': fnfLiHovered,
                    'bg-black text-white': !fnfLiHovered
                  }">
                  <ChevronRightIcon /></div
              ></a>
            </li>
            <li
              @mouseenter="() => (charityLiHovered = true)"
              @mouseleave="() => (charityLiHovered = false)">
              <a href="#" class="flex border-b border-gray-300 py-12 items-center justify-between">
                <div>
                  <h3 class="font-bold text-4xl text-[40px]">Charity</h3>
                  <p class="text-[#767676] pt-5 text-lg tracking-wide">
                    Funds are delivered to your chosen nonprofit for you
                  </p>
                </div>
                <div
                  class="rounded-full w-8 h-8 flex justify-center items-center border transition-all duration-200"
                  :class="{
                    'bg-white text-black': charityLiHovered,
                    'bg-black text-white': !charityLiHovered
                  }">
                  <ChevronRightIcon /></div
              ></a>
            </li>
          </ul>
        </div>
      </div>

      <div class="w-full flex justify-center border-t border-gray-300">
        <div class="max-w-[72rem] w-full mb-10">
          <div class="grid grid-cols-4 gap-x-4 gap-y-1 px-3 pt-14 pb-6 rounded">
            <LogoIcon />
            <p class="font-bold px-2">Fundraise For</p>
            <p class="font-bold px-2">How it works</p>
            <p class="font-bold px-2">Resources</p>

            <a href="/discover" class="nav-link col-start-2 px-2">Medical</a>
            <a href="/how-it-works" class="nav-link col-start-3 px-2">How GoFundMe Works</a>
            <a href="/discover" class="nav-link col-start-4 px-2">Help centre</a>

            <a href="/discover" class="nav-link col-start-2 px-2">Emergency</a>
            <a href="/discover" class="nav-link col-start-3 px-2">Why GoFundMe</a>
            <a href="/discover" class="nav-link col-start-4 px-2">Blof</a>

            <a href="/discover" class="nav-link col-start-2 px-2">Memorial</a>
            <a href="/discover" class="nav-link col-start-3 px-2">Common questions</a>
            <a href="/discover" class="nav-link col-start-4 px-2">GoFundMe Stories</a>

            <a href="/discover" class="nav-link col-start-2 px-2">Education</a>
            <a href="/discover" class="nav-link col-start-3 px-2">Success Stories</a>
            <a href="/discover" class="nav-link col-start-4 px-2">Newsroom</a>

            <a href="/discover" class="nav-link col-start-2 px-2">Nonprofit</a>
            <a href="/discover" class="nav-link col-start-3 px-2">Supported countries</a>
            <a href="/discover" class="nav-link col-start-4 px-2">Careers</a>

            <a href="/discover" class="nav-link col-start-2 px-2">Crisis Relief</a>
            <a href="/discover" class="nav-link col-start-3 px-2">Charity fundraising</a>
            <a href="/discover" class="nav-link col-start-4 px-2">About</a>

            <a href="/discover" class="nav-link col-start-3 px-2">Pricing</a>
            <button
              type="button"
              @click="() => (showMoreResources = !showMoreResources)"
              class="nav-link col-start-4 px-2 flex">
              More resources
              <DropdownIcon
                :class="{
                  'transition-transform duration-200 ml-2 rotate-0': true,
                  'rotate-180': showMoreResources
                }" />
            </button>

            <DropdownTransition>
              <div
                v-if="showMoreResources"
                class="grid grid-cols-subgrid gap-x-4 gap-y-1 col-span-3 border-t col-start-2 border-gray-300 pt-8 mt-8">
                <p class="font-bold px-2 col-start-1">More resources</p>
                <p class="col-start-2"></p>
                <p class="col-start-3"></p>
                <a href="/discover" class="nav-link col-start-1 px-2">Fundraising tips</a>
                <a href="/discover" class="nav-link col-start-2 px-2">What is crowdfunding?</a>
                <a href="/discover" class="nav-link col-start-3 px-2">How to get a service dog</a>
                <a href="/discover" class="nav-link col-start-1 px-2">Fundraising ideas</a>
                <a href="/discover" class="nav-link col-start-2 px-2">Help with bills</a>
                <a href="/discover" class="nav-link col-start-3 px-2">Crowdfunding sites</a>
                <a href="/discover" class="nav-link col-start-1 px-2">Rent assistance</a>
                <a href="/discover" class="nav-link col-start-2 px-2">Help with medical bills</a>
                <a href="/discover" class="nav-link col-start-3 px-2">Help for veterans</a>
                <a href="/discover" class="nav-link col-start-1 px-2">Fundraising sites</a>
                <a href="/discover" class="nav-link col-start-2 px-2"
                  >Fundraising ideas for college</a
                >
                <a href="/discover" class="nav-link col-start-1 px-2">Team fundraising ideas</a>
                <a href="/discover" class="nav-link col-start-2 px-2">School fundraising ideas</a>
              </div>
            </DropdownTransition>
          </div>
        </div>
      </div>
    </section>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import DropdownIcon from './icons/DropdownIcon.vue'
import PlayIcon from './icons/PlayIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'
import ChevronRightIcon from './icons/ChevronRightIcon.vue'
import CharityBankIcon from './icons/CharityBankIcon.vue'
import TargetIconVue from './icons/TargetIcon.vue'
import MegaphoneIconVue from './icons/MegaphoneIcon.vue'
import GrowthIconVue from './icons/GrowthIcon.vue'
import FlashIcon from './icons/FlashIcon.vue'
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import DropdownTransition from './ui/DropdownTransition.vue'
import HeroSectionComponent from './landing/HeroSectionComponent.vue'
import SectionImageComponent from './landing/SectionImageComponent.vue'
import FooterComponent from './landing/FooterComponent.vue'
import DonorStateComponent from './landing/DonorStateComponent.vue'

const index = ref<boolean>(false)
const deg = ref<number>(0)
const justOpened = ref<boolean>(false)
const featureTopicHovered = ref<boolean>(false)

const faqHovered = ref<boolean>(false)
const reliefHovered = ref<boolean>(false)
const donationHovered = ref<boolean>(false)
const yourselfHovered = ref<boolean>(false)
const fnfLiHovered = ref<boolean>(false)
const charityLiHovered = ref<boolean>(false)
const showMoreResources = ref<boolean>(false)
const pauseSlider1 = ref<boolean>(false)
const pauseSlider2 = ref<boolean>(false)
const pauseSlider3 = ref<boolean>(false)

defineProps<{
  scrollTop: number
}>()

const toggleWorldDropdown = () => {
  justOpened.value = true
  deg.value = deg.value > 0 ? 0 : 180
}

const closeDropdowns = () => {
  if (deg.value > 0 && !justOpened.value) {
    deg.value = 0
  }

  justOpened.value = false
}

const changeIndex = () => {
  index.value = !index.value
}

const changefeatureTopicHovered = () => {
  featureTopicHovered.value = !featureTopicHovered.value
}
</script>

<style scoped>
section {
  width: 100vw;
}

.h-options {
  @apply flex items-center p-4 rounded hover:bg-hover;
}

.cause-nav {
  @apply w-40 rounded-lg flex items-center font-bold text-sm transition ease-linear delay-0 duration-300 p-2;
}

.faq {
  background-image: url('../assets/images/gofundme.png');
  background-size: cover;
  background-position: center;
}
.tornado-relief {
  background-image: url('../assets/images/map.png');
  background-size: cover;
  background-position: center;
}
.holiday {
  background-image: url('../assets/images/donate.png');
  background-size: cover;
  background-position: center;
}

.translate-3d {
  transform: translate3d(0, 0, 0);
}
</style>
