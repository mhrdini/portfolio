<script setup lang="ts">
</script>

<template>
  <div
    class="fixed bottom-0 min-w-full *:min-w-full"
  >
    <div class="relative h-30 mask-linear-from-15% bg-neutral-200/20 backdrop-blur-xs" />
    <div
      class="absolute top-1/3 px-10 grid grid-cols-3 justify-items-center *:first:col-start-2 *:last:justify-self-end"
    >
      <ResumeDownloadButton />
      <ResumeLanguageSwitcherButton />
    </div>
  </div>
</template>
