export type ResizeDirection
  = | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'

const MIN_WIDTH = 250
const MIN_HEIGHT = 150

export function useWindowResize(id: WindowId) {
  const store = useWindowsStore()
  const { windows } = storeToRefs(store)

  const currentWindow = computed(() => windows.value[id])

  const resize = reactive({
    active: false,
    direction: null as ResizeDirection | null,

    startMouseX: 0,
    startMouseY: 0,

    startWidth: 0,
    startHeight: 0,

    startX: 0,
    startY: 0,
  })

  function startResize(direction: ResizeDirection, e: PointerEvent) {
    e.preventDefault()
    e.stopPropagation()

    resize.active = true
    resize.direction = direction

    resize.startMouseX = e.clientX
    resize.startMouseY = e.clientY

    resize.startWidth = currentWindow.value.width
    resize.startHeight = currentWindow.value.height

    resize.startX = currentWindow.value.x ?? 0
    resize.startY = currentWindow.value.y ?? 0

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', stopResize)
  }

  function onPointerMove(e: PointerEvent) {
    if (!resize.active || !resize.direction)
      return

    const dx = e.clientX - resize.startMouseX
    const dy = e.clientY - resize.startMouseY

    let width = resize.startWidth
    let height = resize.startHeight

    let x = resize.startX
    let y = resize.startY

    if (resize.direction.includes('right')) {
      width = Math.max(MIN_WIDTH, resize.startWidth + dx)
    }

    if (resize.direction.includes('bottom')) {
      height = Math.max(MIN_HEIGHT, resize.startHeight + dy)
    }

    if (resize.direction.includes('left')) {
      width = Math.max(MIN_WIDTH, resize.startWidth - dx)
      x = resize.startX + (resize.startWidth - width)
    }

    if (resize.direction.includes('top')) {
      height = Math.max(MIN_HEIGHT, resize.startHeight - dy)
      y = resize.startY + (resize.startHeight - height)
    }

    store.patchWindow(id, {
      x,
      y,
      width,
      height,
    })
  }

  function stopResize() {
    resize.active = false
    resize.direction = null

    window.removeEventListener('pointermove', onPointerMove)
    window.removeEventListener('pointerup', stopResize)
  }

  onBeforeUnmount(() => {
    stopResize()
  })

  return {
    resize,
    startResize,
  }
}
