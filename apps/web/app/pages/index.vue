<script setup lang="ts">
import { Motion } from 'motion-v'
import WelcomeWindow from '~/components/welcome-window.vue'

const containerRef = ref<HTMLElement | null>(null)
provide('containerRef', containerRef)
</script>

<template>
  <div
    class="p-2 max-h-screen w-full"
  >
    <Motion

      as="div"
      class="size-full flex flex-col border-1 border-black"
      :initial="{
        scale: 0,
      }"
      :animate="{
        scale: 1,
      }"
      :transition="{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      }"
    >
      <!-- workspace -->
      <Motion
        as="div"
        class="flex-1"
        :initial="{
          opacity: 0,
        }"
        :animate="{
          opacity: 1,
        }"
        :transition="{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: 1.4,
        }"
      >
        <div
          ref="containerRef"
          class=" size-full relative flex-1"
        >
          <!-- cursor follow background -->
          <CursorFollowBackground />
          <!-- windows -->
          <WelcomeWindow />
          <!-- name card -->
          <Motion
            as="header"
            class="bg-white relative z-10 cursor-default w-min top-0  px-9 py-7
          ft-0"
            :initial="{
              opacity: 0,
            }"
            :animate="{
              opacity: 1,
            }"
            :transition="
              {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.4,
              }"
          >
            <Motion
              as="a"
              class="relative leading-none inline-block text-black whitespace-nowrap"
              while-hover="hover"
              while-press="hover"
              :initial="{
                opacity: 0,
              }"
              :animate="{
                opacity: 1,
              }"
              :transition="
                {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 1.4,
                }"
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
            <!-- bottom horizontal -->
            <Motion
              as="div"
              class="absolute bottom-0 left-0 h-px w-full bg-black origin-left"
              :initial="{
                scaleX: 0,
                opacity: 0,
              }"
              :animate="{
                scaleX: 1,
                opacity: 1,
              }"
              :transition="{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.4,
              }"
            />

            <!-- right vertical -->
            <Motion
              as="div"
              class="absolute top-0 right-0 w-px h-full bg-black origin-top"
              :initial="{
                scaleY: 0,
                opacity: 0,
              }"
              :animate="{
                scaleY: 1,
                opacity: 1,
              }"
              :transition="{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.4,
              }"
            />
          </Motion>
        </div>
      </Motion>
    </Motion>
  </div>
</template>
