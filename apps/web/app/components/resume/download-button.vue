<script setup lang="ts">
import type { MotionProps } from 'motion-v'
import { motion } from 'motion-v'

const i18n = useI18nStore()

const { current } = storeToRefs(i18n)

const isHovered = ref(false)

const text: MotionProps['variants'] = {
  beforeEnter: {
    y: -20,
    opacity: 0,
  },

  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: BEZIER_EASE,
    },
  },

  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: BEZIER_EASE,
    },
  },
}

const icon: MotionProps['variants'] = {
  hidden: {
    marginLeft: 0,
    width: 0,
    opacity: 0,
  },

  visible: {
    marginLeft: 8,
    width: 18,
    opacity: 1,
    transition: {
      ease: BEZIER_EASE,
    },
  },
}

const draw: MotionProps['variants'] = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },

  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: 0.1,
        type: 'spring',
        duration: 0.5,
        bounce: 0,
      },
    },
  },
}

const shape = {
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  fill: 'transparent',
}
</script>

<template>
  <motion.button
    layout
    class="relative flex-button !gap-0 items-center justify-center button-shadow"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <AnimatePresence mode="popLayout">
      <motion.span
        v-if="current === 'en'"
        key="en"
        layout
        :initial="current === 'en' ? 'enter' : 'beforeEnter'"
        animate="enter"
        exit="exit"
        :variants="text"
      >
        Download
      </motion.span>

      <motion.span
        v-else
        key="ja"
        layout
        :initial="current === 'ja' ? 'enter' : 'beforeEnter'"
        animate="enter"
        exit="exit"
        :variants="text"
      >
        ダウンロード
      </motion.span>
    </AnimatePresence>
    <motion.svg
      viewBox="0 0 18 18"
      class="ml-auto h-[18px] shrink-0"
      initial="hidden"
      :animate="isHovered ? 'visible' : 'hidden'"
      :variants="icon"
    >
      <!-- Vertical -->
      <motion.line
        x1="9"
        y1="0.75"
        x2="9"
        y2="16.62"
        :style="shape"
        :variants="draw"
      />

      <!-- Arrow head: left -->
      <motion.line
        x1="2.769"
        y1="9.698"
        x2="9"
        y2="16.62"
        :style="shape"
        :variants="draw"
      />

      <!-- Arrow head: right -->
      <motion.line
        x1="15.231"
        y1="9.698"
        x2="9"
        y2="16.62"
        :style="shape"
        :variants="draw"
      />

      <!-- Bottom -->
      <motion.line
        x1="0.75"
        y1="17.25"
        x2="17.25"
        y2="17.25"
        :style="shape"
        :variants="draw"
      />
    </motion.svg>
  </motion.button>
</template>
