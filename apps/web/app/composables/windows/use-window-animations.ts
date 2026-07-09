import { animate } from 'motion-v'

export function useWindowAnimations(
  id: WindowId,
) {
  const store = useWindowsStore()
  const { windows: windowStates } = storeToRefs(store)
  const windowState = computed(() => windowStates.value[id])

  const registry = useRegistryStore()
  const { windows, icons } = storeToRefs(registry)

  const windowEl = computed(() => windows.value.get(id))
  const iconEl = computed(() => icons.value.get(id))

  async function enterOnMount() {
    if (!windowState.value || !windowEl.value || !iconEl.value)
      return

    if (windowState.value.open) {
      await animate(windowEl.value, {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }, {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.7,
      })
    }
    else {
      const { x: windowX, y: windowY, width: windowWidth, height: windowHeight } = windowState.value
      const { x: iconX, y: iconY } = windowState.value.icon
      const { width: iconWidth, height: iconHeight } = iconEl.value.getBoundingClientRect()

      const toIconDx = (iconX! + iconWidth / 2) - (windowX! + windowWidth / 2)
      const toIconDy = (iconY! + iconHeight / 2) - (windowY! + windowHeight / 2)

      await animate(windowEl.value, {
        x: toIconDx,
        y: toIconDy,
        scale: 0,
        opacity: 0,
      }, {
        duration: 0,
      })
    }
  }

  async function maximise() {
    if (!windowState.value || !windowEl.value || !iconEl.value)
      return

    await animate(windowEl.value, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0,
    }, {
      duration: 0,
    })

    const { x: windowX, y: windowY, width: windowWidth, height: windowHeight } = windowState.value
    const { x: iconX, y: iconY } = windowState.value.icon
    const { width: iconWidth, height: iconHeight } = iconEl.value.getBoundingClientRect()

    const toIconDx = (iconX! + iconWidth / 2) - (windowX! + windowWidth / 2)
    const toIconDy = (iconY! + iconHeight / 2) - (windowY! + windowHeight / 2)

    // const windowRect = windowEl.value.getBoundingClientRect()
    // const iconRect = iconEl.value.getBoundingClientRect()

    // console.log({
    //   storeWindow: {
    //     x: windowX,
    //     y: windowY,
    //   },
    //   domWindow: {
    //     x: windowRect.left,
    //     y: windowRect.top,
    //   },
    //   storeIcon: {
    //     x: iconX,
    //     y: iconY,
    //   },
    //   domIcon: {
    //     x: iconRect.left,
    //     y: iconRect.top,
    //   },
    //   inlineTransform: windowEl.value.style.transform,
    //   computedTransform: getComputedStyle(windowEl.value).transform,
    // })

    await animate(
      windowEl.value,
      {
        x: toIconDx,
        y: toIconDy,
        scale: 0,
        opacity: 0,
      },
      {
        duration: 0,
      },
    )

    await animate(
      windowEl.value,
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      },
      {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    )

    store.open(id)
  }

  async function minimise() {
    if (!windowEl.value || !iconEl.value)
      return

    const { x: windowX, y: windowY, width: windowWidth, height: windowHeight } = windowState.value
    const { x: iconX, y: iconY } = windowState.value.icon
    const { width: iconWidth, height: iconHeight } = iconEl.value.getBoundingClientRect()

    const dx
      = iconX! + iconWidth / 2
        - (windowX! + windowWidth / 2)

    const dy
      = iconY! + iconHeight / 2
        - (windowY! + windowHeight / 2)

    await animate(
      windowEl.value,
      {
        x: dx,
        y: dy,
        scale: 0,
        opacity: 0,
      },
      {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    )

    store.close(id)
  }

  return {
    enterOnMount,
    maximise,
    minimise,
  }
}
