import type { Easing, MotionProps } from 'motion-v'

export const BEZIER_EASE: Easing = [0.22, 1, 0.36, 1]
const REVEAL_BEZIER: Easing = [0.16, 1, 0.3, 1]

const STAGGER = 0.15
const EFFECT_DURATION = 0.6

export const wipe: MotionProps['variants'] = {
  hidden: (custom: unknown) => {
    const index = typeof custom === 'number' ? custom : 0
    return {
      opacity: 0,
      y: '-75%',
      transition: {
        delay: index * STAGGER,
        duration: EFFECT_DURATION,
        ease: REVEAL_BEZIER,
      },
    }
  },

  visible: (custom: unknown) => {
    const index = typeof custom === 'number' ? custom : 0

    return {
      opacity: 1,
      y: '0%',
      transition: {
        delay: index * STAGGER,
        duration: EFFECT_DURATION,
        ease: REVEAL_BEZIER,
      },
    }
  },
}

export const reveal: MotionProps['variants'] = {
  hidden: (custom: unknown) => {
    const index = typeof custom === 'number' ? custom : 0
    return { clipPath: 'inset(0 0 100% 0)', transition: {
      delay: index * STAGGER,
      duration: EFFECT_DURATION,
      ease: REVEAL_BEZIER,
    } }
  },

  visible: (custom: unknown) => {
    const index = typeof custom === 'number' ? custom : 0
    return {
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        delay: index * STAGGER,
        duration: EFFECT_DURATION,
        ease: REVEAL_BEZIER,
      },
    }
  },
}
