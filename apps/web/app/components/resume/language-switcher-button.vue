<script setup lang="ts">
import type { MotionProps } from 'motion-v'
import { Motion } from 'motion-v'

const i18n = useI18nStore()
const { current } = storeToRefs(i18n)
const { toggle } = i18n

const text: MotionProps['variants'] = {
  on: {
    opacity: 1,
    transition: {
      ease: [0.22, 1, 0.36, 1],
    },
  },
  off: {
    opacity: 0.3,
    transition: {
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const underline: MotionProps['variants'] = {
  en: {
    x: 0,
    transition: {
      x: {
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  ja: {
    x: 29,
    transition: {
      x: {
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
}
</script>

<template>
  <button
    class="relative button overflow-clip
  gap-2 button button-shadow items-between"
    @click="toggle"
  >
    <Motion
      as="div"
      :initial="current === 'en' ? 'on' : 'off'"
      :animate="current === 'en' ? 'on' : 'off'"
      :variants="text"
    >
      EN
    </Motion>
    <Motion
      as="div"
      class="w-[21px] h-0.5 absolute flex-none bottom-1/4 bg-neutral-600"
      :animate="current"
      :variants="underline"
    />
    <Motion
      as="div"
      :initial="current === 'ja' ? 'on' : 'off'"
      :animate="current === 'ja' ? 'on' : 'off'"
      :variants="text"
    >
      JP
    </Motion>
  </button>
</template>
