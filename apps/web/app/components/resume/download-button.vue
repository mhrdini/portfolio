<script setup lang="ts">
import type { MotionProps } from 'motion-v'

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
      ease: [0.22, 1, 0.36, 1],
    },
  },

  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const icon: MotionProps['variants'] = {
  hidden: {
    width: 0,
    opacity: 0,
    display: 'none',
  },

  visible: {
    width: 18,
    opacity: 1,
    display: 'flex',
    transition: {
      ease: [0.22, 1, 0.36, 1],
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
        duration: 1,
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
  <Motion
    as="button"
    layout
    class="relative button items-center justify-center button-shadow"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <AnimatePresence mode="popLayout">
      <Motion
        v-if="current === 'en'"
        key="en"
        as="span"
        layout
        initial="beforeEnter"
        animate="enter"
        exit="exit"
        :variants="text"
      >
        Download
      </Motion>

      <Motion
        v-else
        key="ja"
        as="span"
        layout
        initial="beforeEnter"
        animate="enter"
        exit="exit"
        :variants="text"
      >
        ダウンロード
      </Motion>
    </AnimatePresence>
    <Motion
      as="svg"
      viewBox="0 0 18 18"
      class="ml-auto h-[18px] shrink-0"
      initial="hidden"
      :animate="isHovered ? 'visible' : 'hidden'"
      :variants="icon"
    >
      <!-- Vertical -->
      <Motion
        as="line"
        x1="9"
        y1="0.75"
        x2="9"
        y2="16.62"
        :style="shape"
        :variants="draw"
      />

      <!-- Arrow head: left -->
      <Motion
        as="line"
        x1="2.769"
        y1="9.698"
        x2="9"
        y2="16.62"
        :style="shape"
        :variants="draw"
      />

      <!-- Arrow head: right -->
      <Motion
        as="line"
        x1="15.231"
        y1="9.698"
        x2="9"
        y2="16.62"
        :style="shape"
        :variants="draw"
      />

      <!-- Bottom -->
      <Motion
        as="line"
        x1="0.75"
        y1="17.25"
        x2="17.25"
        y2="17.25"
        :style="shape"
        :variants="draw"
      />
    </Motion>
  </Motion>
</template>
