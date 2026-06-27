<script setup lang="ts">
const props = defineProps<{
  id: WindowId
  title?: string
}>()

const containerRef = inject<Ref<HTMLElement | null>>('containerRef')

const store = useWindowsStore()
const { windows } = storeToRefs(store)
const icon = computed(() => windows.value[props.id].icon)

// to detect whether a click was done to:
// - drag = onMove updates dragged to be true, so onPointerUp does nothing; or
// - open a window = onPointerDown sustains dragged to be false as icon isn't moved, so onPointerUp
//   opens window
//
// basically dragging = no window opened
const lastPointerUp = ref<number>()
const dragged = ref(false)

const el = useTemplateRef<HTMLElement>('el')
const { x, y } = useDraggable(el, {
  containerElement: containerRef,
  onMove({ x, y }) {
    dragged.value = true
    store.patchIcon(props.id, { x, y })
  },
})

function onPointerDown() {
  dragged.value = false
  // bring the icon to the front immediately
  store.focusIcon(props.id)
}

function onPointerUp() {
  // don't treat a drag as a click
  if (dragged.value)
    return

  const now = performance.now()

  if (
    lastPointerUp.value != null
    && now - lastPointerUp.value < 300
  ) {
    store.open(props.id)
    lastPointerUp.value = undefined
    return
  }

  lastPointerUp.value = now
}

const { width: windowWidth, height: windowHeight } = useWindowSize()

onMounted(() => {
  const rect = containerRef?.value?.getBoundingClientRect()

  const initialX
    = icon.value.x
      ?? (rect
        ? rect.left + rect.width / 2
        : windowWidth.value / 2)

  const initialY
    = icon.value.y
      ?? (rect
        ? rect.top + rect.height / 2
        : windowHeight.value / 2)

  x.value = initialX
  y.value = initialY

  store.patchIcon(props.id, {
    x: initialX,
    y: initialY,
  })
})
</script>

<template>
  <button
    ref="el"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      zIndex: 20 + icon.zIndex,
    }"
    class="border-1 border-black absolute cursor-default select-none grid items-center
  justify-center group bg-white"
    @pointerdown="onPointerDown"
    @pointerup="onPointerUp"
  >
    <!-- icon -->
    <div class="size-10 bg-white">
      <slot />
    </div>
    <!-- title -->
    <div
      class="px-2 text-sm whitespace-nowrap font-mono font-bold bg-black text-white
    group-focus:bg-taupe-400 group-focus:text-black border-t-1 border-black"
    >
      {{ props.title }}
    </div>
  </button>
</template>
