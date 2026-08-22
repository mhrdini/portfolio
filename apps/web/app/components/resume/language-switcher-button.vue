<script setup lang="ts">
import type { MotionProps } from 'motion-v'
import { Motion } from 'motion-v'

const i18n = useI18nStore()
const { current } = storeToRefs(i18n)
const { toggle } = i18n

const textVariants: MotionProps['variants'] = {
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

const underlineVariants: MotionProps['variants'] = {
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
    class="relative button overflow-clip flex justify-items items-between
  gap-2 shadow hover:"
    @click="toggle"
  >
    <Motion
      as="div"
      :initial="current === 'en' ? 'on' : 'off'"
      :animate="current === 'en' ? 'on' : 'off'"
      :variants="textVariants"
    >
      EN
    </Motion>
    <Motion
      as="div"
      class="w-[21px] h-0.5 absolute bottom-1/4 bg-neutral-600"
      :animate="current"
      :variants="underlineVariants"
    />
    <Motion
      as="div"
      :initial="current === 'ja' ? 'on' : 'off'"
      :animate="current === 'ja' ? 'on' : 'off'"
      :variants="textVariants"
    >
      JP
    </Motion>
  </button>
</template>
