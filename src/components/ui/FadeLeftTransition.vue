<template>
  <transition
    name="fade-left"
    mode="out-in"
    :enter-active-class="'transition-all opacity-40'"
    :leave-active-class="'transition-all opacity-40 duration-' + duration">
    <slot></slot>
  </transition>
</template>

<script setup lang="ts">
defineProps<{
  duration: string
}>()
</script>

<style>
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-10%);
}
</style>
