<script setup lang="ts">
import { VueLenis } from 'lenis/vue'
import { cancelFrame, frame } from 'motion-v'
import { onMounted, onUnmounted, ref } from 'vue'

const lenisRef = ref<InstanceType<typeof VueLenis> | null>(null)

function update({ timestamp }: { timestamp: number }) {
  lenisRef.value?.lenis?.raf(timestamp)
}

onMounted(() => {
  frame.update(update, true)
})

onUnmounted(() => {
  cancelFrame(update)
})
</script>

<template>
  <VueLenis
    ref="lenisRef"
    root
    :options="{ autoRaf: false }"
  />

  <div class="min-h-screen w-full m-auto **:border-black **:outline-ring/50">
    <slot />
  </div>
</template>
