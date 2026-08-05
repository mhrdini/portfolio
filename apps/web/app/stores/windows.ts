export type IconState = {
  x: number
  y: number
  zIndex: number
}

export type WindowState = {
  x?: number
  y?: number
  zIndex: number
  icon: IconState
  width: number
  height: number
  open: boolean
}

function createDefaultWindows() {
  return {
    welcome: {
      zIndex: 2,
      icon: {
        x: 30,
        y: 100,
        zIndex: 2,
      },
      width: 375,
      height: 200,
      open: false,
    },
    resume: {
      zIndex: 1,
      icon: {
        x: 30,
        y: 180,
        zIndex: 1,
      },
      width: 375,
      height: 200,
      open: false,
    },
  } satisfies Record<string, WindowState>
}

export type WindowId = keyof ReturnType<typeof createDefaultWindows>

export const useWindowsStore = defineStore('windows', () => {
  const windows = ref<Record<WindowId, WindowState>>(createDefaultWindows())

  function $reset() {
    windows.value = createDefaultWindows()
  }

  const highestZ = computed(() =>
    Math.max(...Object.values(windows.value).map(w => w.zIndex), 0),
  )

  const highestZIcon = computed(() => Math.max(...Object.values(windows.value).map(w => w.icon.zIndex), 0))

  function focus(id: WindowId) {
    windows.value[id].zIndex = highestZ.value + 1
  }

  function focusIcon(id: WindowId) {
    windows.value[id].icon.zIndex = highestZIcon.value + 1
  }

  function open(id: WindowId) {
    windows.value[id].open = true
    focus(id)
  }

  function close(id: WindowId) {
    windows.value[id].open = false
  }

  function patchWindow(id: WindowId, patch: Partial<WindowState>) {
    Object.assign(windows.value[id], patch)
  }

  function patchIcon(id: WindowId, patch: Partial<IconState>) {
    Object.assign(windows.value[id].icon, patch)
  }

  return {
    windows,
    focus,
    focusIcon,
    open,
    close,
    patchWindow,
    patchIcon,
    $reset,
  }
})
