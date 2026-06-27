```vue
<script setup lang="ts">
import { useWindowResize } from '~/composables/windows/use-window-resize'

const props = defineProps<{
  id: WindowId
}>()

const { startResize } = useWindowResize(props.id)
</script>

<template>
  <!-- Top -->
  <div
    class="absolute -top-1 left-2 right-2 h-2 cursor-ns-resize"
    @pointerdown="startResize('top', $event)"
  />

  <!-- Right -->
  <div
    class="absolute -right-1 top-2 bottom-2 w-2 cursor-ew-resize"
    @pointerdown="startResize('right', $event)"
  />

  <!-- Bottom -->
  <div
    class="absolute -bottom-1 left-2 right-2 h-2 cursor-ns-resize"
    @pointerdown="startResize('bottom', $event)"
  />

  <!-- Left -->
  <div
    class="absolute -left-1 top-2 bottom-2 w-2 cursor-ew-resize"
    @pointerdown="startResize('left', $event)"
  />

  <!-- Top Left -->
  <div
    class="absolute -top-1 -left-1 size-2 cursor-nwse-resize"
    @pointerdown="startResize('top-left', $event)"
  />

  <!-- Top Right -->
  <div
    class="absolute -top-1 -right-1 size-2 cursor-nesw-resize"
    @pointerdown="startResize('top-right', $event)"
  />

  <!-- Bottom Left -->
  <div
    class="absolute -bottom-1 -left-1 size-2 cursor-nesw-resize"
    @pointerdown="startResize('bottom-left', $event)"
  />

  <!-- Bottom Right -->
  <div
    class="absolute -bottom-1 -right-1 size-2 cursor-nwse-resize"
    @pointerdown="startResize('bottom-right', $event)"
  />
</template>
```
