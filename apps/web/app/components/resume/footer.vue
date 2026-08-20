<script setup lang="ts">
</script>

<template>
  <div
    class="fixed bottom-0 min-w-full *:min-w-full"
  >
    <div class="relative h-20 bg-neutral-200 backdrop-blur-0 blur-2xl" />
    <div class="absolute top-0 flex items-center px-10">
      <slot />
    </div>
  </div>
</template>
