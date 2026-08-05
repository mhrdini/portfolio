<script setup lang="ts">
import { Motion } from 'motion-v'

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
          class="bg-dot-grid size-full relative flex-1"
        >
          <!-- cursor follow background -->
          <!-- <CursorFollowBackground /> -->
          <!-- menu icons -->
          <MenuIcon id="resume" title="resume">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            /><g id="SVGRepo_iconCarrier"> <path d="M21 22H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2V6zM5 4v16h14V10h-6V4H5zm8 12H7v2h6v-2zm-6-4h10v2H7v-2zm4-4H7v2h4V8z" fill="#000000" /> </g></svg>
          </MenuIcon>
          <MenuIcon id="welcome" title="welcome <3">
            <svg
              id="cherryblossom_Light"
              viewBox="0 0 32 32"
              data-name="cherryblossom/Light"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            ><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            /><g id="SVGRepo_iconCarrier"> <path
              id="Path"
              d="M0,0H12V2H10V4h2V6H10V8h2v2h2v4h2v6h2v4H16V22H14V18H12V16H10V14h2V12H10V10H8v2H6V10H4v2H2v2H4v2H2v2H4v2H6V18H8v2h2V18h2v4h2v2h2v2h4v2h2v2h6V28H22V26H20V22h2V20h2v2h2V20h2V18H26V16h2V14H26V12H24v2H22V12H20v2H16V10h2V8h2V6H18V4h2V2H18V0H32V32H0Z"
              fill="#ffffff"
            /> <path
              id="Path-2"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(12)"
              fill="#1a1a1a"
            /> <path
              id="Path-3"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(14)"
              fill="#ffffff"
            /> <path
              id="Path-4"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(16)"
              fill="#1a1a1a"
            /> <path
              id="Path-5"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(10 2)"
              fill="#1a1a1a"
            /> <path
              id="Path-6"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(12 2)"
              fill="#ffffff"
            /> <path
              id="Path-7"
              data-name="Path"
              d="M2,0H4V2H6V4H4V6H2V4H0V2H2Z"
              transform="translate(12 2)"
              fill="#1a1a1a"
            /> <path
              id="Path-8"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(16 2)"
              fill="#ffffff"
            /> <path
              id="Path-9"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(18 2)"
              fill="#1a1a1a"
            /> <path
              id="Path-10"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(10 6)"
              fill="#1a1a1a"
            /> <path
              id="Path-11"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(12 6)"
              fill="#ffffff"
            /> <path
              id="Path-12"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(16 6)"
              fill="#ffffff"
            /> <path
              id="Path-13"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(18 6)"
              fill="#1a1a1a"
            /> <path
              id="Path-14"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(12 8)"
              fill="#1a1a1a"
            /> <path
              id="Path-15"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(14 8)"
              fill="#ffffff"
            /> <path
              id="Path-16"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(16 8)"
              fill="#1a1a1a"
            /> <path
              id="Path-17"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(4 10)"
              fill="#1a1a1a"
            /> <path
              id="Path-18"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(8 10)"
              fill="#1a1a1a"
            /> <path
              id="Path-19"
              data-name="Path"
              d="M0,0H2V4H0Z"
              transform="translate(14 10)"
              fill="#1a1a1a"
            /> <path
              id="Path-20"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(2 12)"
              fill="#1a1a1a"
            /> <path
              id="Path-21"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(4 12)"
              fill="#ffffff"
            /> <path
              id="Path-22"
              data-name="Path"
              d="M2,0H4V2H6V4H4V6H2V4H0V2H2Z"
              transform="translate(4 12)"
              fill="#1a1a1a"
            /> <path
              id="Path-23"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(8 12)"
              fill="#ffffff"
            /> <path
              id="Path-24"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(10 12)"
              fill="#1a1a1a"
            /> <path
              id="Path-25"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(20 12)"
              fill="#1a1a1a"
            /> <path
              id="Path-26"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(24 12)"
              fill="#1a1a1a"
            /> <path
              id="Path-27"
              data-name="Path"
              d="M0,0H4V2H2V4H4V6H6V8H4v4H0V10H2V6H0Z"
              transform="translate(16 14)"
              fill="#1a1a1a"
            /> <path
              id="Path-28"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(20 14)"
              fill="#ffffff"
            /> <path
              id="Path-29"
              data-name="Path"
              d="M2,0H4V2H6V4H4V6H2V4H0V2H2Z"
              transform="translate(20 14)"
              fill="#1a1a1a"
            /> <path
              id="Path-30"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(24 14)"
              fill="#ffffff"
            /> <path
              id="Path-31"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(26 14)"
              fill="#1a1a1a"
            /> <path
              id="Path-32"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(2 16)"
              fill="#1a1a1a"
            /> <path
              id="Path-33"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(4 16)"
              fill="#ffffff"
            /> <path
              id="Path-34"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(8 16)"
              fill="#ffffff"
            /> <path
              id="Path-35"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(10 16)"
              fill="#1a1a1a"
            /> <path
              id="Path-36"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(18 16)"
              fill="#ffffff"
            /> <path
              id="Path-37"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(4 18)"
              fill="#1a1a1a"
            /> <path
              id="Path-38"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(8 18)"
              fill="#1a1a1a"
            /> <path
              id="Path-39"
              data-name="Path"
              d="M0,0H2V4H0Z"
              transform="translate(12 18)"
              fill="#1a1a1a"
            /> <path
              id="Path-40"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(20 18)"
              fill="#ffffff"
            /> <path
              id="Path-41"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(24 18)"
              fill="#ffffff"
            /> <path
              id="Path-42"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(26 18)"
              fill="#1a1a1a"
            /> <path
              id="Path-43"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(24 20)"
              fill="#1a1a1a"
            /> <path
              id="Path-44"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(14 22)"
              fill="#1a1a1a"
            /> <path
              id="Path-45"
              data-name="Path"
              d="M0,0H2V2H0Z"
              transform="translate(20 26)"
              fill="#1a1a1a"
            /> <path
              id="Path-46"
              data-name="Path"
              d="M0,0H6V2H0Z"
              transform="translate(22 28)"
              fill="#1a1a1a"
            /> </g></svg>
          </MenuIcon>
          <!-- windows -->
          <Window id="welcome" title="welcome <3">
            Hello, I'm Dini.
            I'm a software engineer based in Japan.
          </Window>

          <Window id="resume" title="resume">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rerum est amet sint error dicta veniam? Neque pariatur facere quae, consequuntur soluta vel eum. Sunt voluptas incidunt in iusto minus optio eligendi, nostrum facere quia, delectus explicabo ratione eos accusantium quod? Pariatur suscipit debitis voluptates recusandae. Numquam maiores cupiditate dolorum reprehenderit nisi, est ullam, eos labore optio quae molestias. Pariatur quasi culpa, quaerat cum officia blanditiis distinctio dolorum dicta officiis cupiditate molestias veritatis vitae ab! Enim quaerat, voluptatem nesciunt numquam magnam illo consequuntur voluptatum quo consequatur ratione reiciendis exercitationem tempora iusto assumenda mollitia dolore. Rerum ducimus quia similique aut perspiciatis.
          </Window>
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
