<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    initialX?: number
    initialY?: number
    width?: number
    height?: number
    title?: string
  }>(),
  {
    width: 375,
    height: 200,
  },
)

const containerRef = inject<Ref<HTMLElement | null>>('containerRef')

const el = useTemplateRef<HTMLElement>('el')
const dragHandle = useTemplateRef<HTMLElement>('dragHandle')
const { x, y } = useDraggable(el, {
  containerElement: containerRef,
  handle: dragHandle,
})

const { width: windowWidth, height: windowHeight } = useWindowSize()

// set initial x and y value, prioritising:
// - initialX and initialY props
// - container ref bounding rect
// - window width and height
onMounted(() => {
  const rect = containerRef?.value?.getBoundingClientRect()

  if (!rect) {
    x.value = props.initialX ?? (windowWidth.value - (props.width)) / 2
    y.value = props.initialY ?? (windowHeight.value - (props.height)) / 2
    return
  }

  x.value
    = props.initialX
      ?? rect.left + (rect.width - props.width) / 2

  y.value
    = props.initialY
      ?? rect.top + (rect.height - props.height) / 2
})
</script>

<template>
  <div
    ref="el"
    :style="{
      left: `${x}px`,
      top: `${y}px`,
      width: `${props.width}px`,
      height: `${props.height}px`,
    }"
    class="z-20 absolute"
  >
    <Motion
      as="div"
      class="border-1 text-sm size-full border-black *:px-3 bg-white
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
      <button
        ref="dragHandle"
        class="outline-none w-full h-6 border-b-1 flex items-center justify-between ml-auto"
      >
        <span>{{ title }}</span>
      </button>
      <div class="py-1">
        <slot />
      </div>
    </Motion>
  </div>
</template>
