<template>
  <Transition
    enter-active-class="transform transition duration-500"
    enter-class="-translate-y-1/2 scale-y-0 opacity-0"
    enter-to-class="translate-y-0 scale-y-100 opacity-100"
    leave-active-class="transform transition duration-300"
    leave-class="translate-y-0 scale-y-100 opacity-100"
    leave-to-class="-translate-y-1/2 scale-y-0 opacity-0">
    <slot></slot>
  </Transition>
</template>
