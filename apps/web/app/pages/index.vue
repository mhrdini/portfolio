<script setup lang="ts">
import { Motion } from 'motion-v'
</script>

<template>
  <Motion
    as="header"
    class="cursor-default sticky w-full flex flex-col p-2"
  >
    <Motion
      as="a"
      class="relative inline-block text-black max-w-min whitespace-nowrap"
      while-hover="hover"
      while-press="hover"
    >
      Dini Putri

      <svg
        class="absolute left-0 -bottom-2 w-full h-[10px]"
        viewBox="0 0 120 10"
        preserveAspectRatio="none"
      >
        <Motion
          as="path"
          stroke="currentColor"
          fill="transparent"
          stroke-width="1"
          stroke-linecap="round"

          d="M0 6
             C10 6, 10 6, 20 6
             C30 6, 30 6, 40 6
             C50 6, 50 6, 60 6
             C70 6, 70 6, 80 6
             C90 6, 90 6, 100 6
             C110 6, 110 6, 120 6"

          :variants="{
            initial: {
              d: `
                M0 6
                C10 6, 10 6, 20 6
                C30 6, 30 6, 40 6
                C50 6, 50 6, 60 6
                C70 6, 70 6, 80 6
                C90 6, 90 6, 100 6
                C110 6, 110 6, 120 6
              `,
            },
            hover: {
              d: `
                M0 6
                C10 2, 10 10, 20 6
                C30 2, 30 10, 40 6
                C50 2, 50 10, 60 6
                C70 2, 70 10, 80 6
                C90 2, 90 10, 100 6
                C110 2, 110 10, 120 6
              `,
            },
          }"
          :transition="{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }"
        />
      </svg>
    </Motion>
  </Motion>
</template>
