<script setup lang="ts">
const props = defineProps<{
  id: WindowId
  title?: string
}>()

const { width: windowWidth, height: windowHeight } = useWindowSize()
const containerRef = inject<Ref<HTMLElement | null>>('containerRef')

const store = useWindowsStore()
const { windows } = storeToRefs(store)
const window = computed(() => windows.value[props.id])

const el = useTemplateRef<HTMLElement>('el')
// const dragHandle = useTemplateRef<HTMLElement>('dragHandle')

const { x, y } = useDraggable(el, {
  containerElement: containerRef,
  // handle: dragHandle,
  onMove({ x, y }) {
    store.patchWindow(props.id, { x, y })
  },
})

onMounted(() => {
  const rect = containerRef?.value?.getBoundingClientRect()

  const initialX
    = window.value.x
      ?? (rect
        ? rect.left + (rect.width - window.value.width) / 2
        : (windowWidth.value - window.value.width) / 2)

  const initialY
    = window.value.y
      ?? (rect
        ? rect.top + (rect.height - window.value.height) / 2
        : (windowHeight.value - window.value.height) / 2)

  x.value = initialX
  y.value = initialY

  store.patchWindow(props.id, { x: initialX, y: initialY })
})
</script>

<template>
  <div
    ref="el"
    :style="{
      left: `${window.x}px`,
      top: `${window.y}px`,
      width: `${window.width}px`,
      height: `${window.height}px`,
      zIndex: 30 + window.zIndex,
    }"
    class="absolute"
    @pointerdown="store.focus(props.id)"
  >
    <Motion
      as="div"
      class="size-full flex flex-col border-1 border-black bg-white text-sm *:not-first:px-3
    cursor-default select-none"
      :initial="{
        opacity: 0,
        scale: 0,
      }"
      :animate="{
        opacity: 1,
        scale: 1,
      }"
      :transition="{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: 1.7,
      }"
    >
      <div
        class="shrink-0 pl-3 outline-none w-full border-b-1 flex items-center justify-between ml-auto"
      >
        <span>{{ title }}</span>
        <button
          class="p-1 border-l-1 border-black text-black items-center justify-center flex
        hover:bg-taupe-300 active:bg-taupe-400"
        >
          <Icon name="lucide:minus" />
        </button>
      </div>
      <div class="py-1 flex-1 overflow-y-auto">
        <slot />
      </div>
    </Motion>
  </div>
</template>
