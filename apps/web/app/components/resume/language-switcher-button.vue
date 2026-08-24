<script setup lang="ts">
import type { MotionProps } from 'motion-v'
import { motion } from 'motion-v'

const i18n = useI18nStore()
const { current } = storeToRefs(i18n)
const { toggle } = i18n

const text: MotionProps['variants'] = {
  on: {
    opacity: 1,
    transition: {
      ease: BEZIER_EASE,
    },
  },
  off: {
    opacity: 0.3,
    transition: {
      ease: BEZIER_EASE,
    },
  },
}

const underline: MotionProps['variants'] = {
  en: {
    x: 0,
    transition: {
      x: {
        ease: BEZIER_EASE,
      },
    },
  },
  ja: {
    x: 29,
    transition: {
      x: {
        ease: BEZIER_EASE,
      },
    },
  },
}
</script>

<template>
  <button
    class="relative overflow-clip
  gap-2 flex-button button-shadow items-between"
    @click="toggle"
  >
    <motion.div
      :initial="current === 'en' ? 'on' : 'off'"
      :animate="current === 'en' ? 'on' : 'off'"
      :variants="text"
    >
      EN
    </motion.div>
    <motion.div
      class="w-[21px] h-0.5 absolute flex-none bottom-1/4 bg-neutral-600"
      :animate="current"
      :variants="underline"
    />
    <motion.div
      :initial="current === 'ja' ? 'on' : 'off'"
      :animate="current === 'ja' ? 'on' : 'off'"
      :variants="text"
    >
      JP
    </motion.div>
  </button>
</template>
