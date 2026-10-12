<script setup lang="ts">
import type { MotionProps } from 'motion-v'
import { motion } from 'motion-v'

const i18n = useI18nStore()
const { current } = storeToRefs(i18n)

const isHovered = ref(false)
const isIconCollapsed = ref(true)

const text: MotionProps['variants'] = {
  beforeEnter: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: BEZIER_EASE,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
}

const icon: MotionProps['variants'] = {
  hidden: {
    width: 0,
    transition: {
      ease: BEZIER_EASE,
    },
  },
  visible: {
    marginLeft: 8,
    width: 18,
    transition: {
      ease: BEZIER_EASE,
    },
  },
}

const draw: MotionProps['variants'] = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    transition: {
      pathLength: {
        duration: 0.3,
        ease: BEZIER_EASE,
      },
      opacity: {
        duration: 0.15,
      },
    },
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        type: 'spring',
        duration: 0.4,
        bounce: 0,
      },
      opacity: {
        duration: 0,
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

function handleMouseEnter() {
  isHovered.value = true
  isIconCollapsed.value = false
}

function handleMouseLeave() {
  isHovered.value = false
}

function handleLinesExitComplete() {
  if (!isHovered.value) {
    isIconCollapsed.value = true
  }
}
</script>

<template>
  <motion.button
    layout
    class="relative !cursor-pointer flex-button !gap-0 items-center justify-center button-shadow"
    initial="hidden"
    animate="visible"
    exit="hidden"
    :variants="opacityReveal"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <AnimatePresence mode="popLayout">
      <motion.span
        v-if="current === 'en'"
        key="en"
        layout
        initial="beforeEnter"
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
        initial="beforeEnter"
        animate="enter"
        exit="exit"
        :variants="text"
      >
        ダウンロード
      </motion.span>
    </AnimatePresence>

    <motion.div
      class="ml-auto shrink-0 overflow-hidden"
      initial="hidden"
      :animate="isIconCollapsed ? 'hidden' : 'visible'"
      :variants="icon"
    >
      <svg
        viewBox="0 0 18 18"
        class="block h-[18px] w-[18px] shrink-0"
        aria-hidden="true"
      >
        <!-- Vertical -->
        <motion.line
          x1="9"
          y1="0.75"
          x2="9"
          y2="16.62"
          :style="shape"
          :variants="draw"
          :initial="false"
          :animate="isHovered ? 'visible' : 'hidden'"
          @animation-complete="!isHovered && handleLinesExitComplete()"
        />

        <!-- Arrow head: left -->
        <motion.line
          x1="2.769"
          y1="9.698"
          x2="9"
          y2="16.62"
          :style="shape"
          :variants="draw"
          :initial="false"
          :animate="isHovered ? 'visible' : 'hidden'"
        />

        <!-- Arrow head: right -->
        <motion.line
          x1="15.231"
          y1="9.698"
          x2="9"
          y2="16.62"
          :style="shape"
          :variants="draw"
          :initial="false"
          :animate="isHovered ? 'visible' : 'hidden'"
        />

        <!-- Bottom -->
        <motion.line
          x1="0.75"
          y1="17.25"
          x2="17.25"
          y2="17.25"
          :style="shape"
          :variants="draw"
          :initial="false"
          :animate="isHovered ? 'visible' : 'hidden'"
        />
      </svg>
    </motion.div>
  </motion.button>
</template>
