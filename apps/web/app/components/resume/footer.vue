<script setup lang="ts">
</script>

<template>
  <div
    class="fixed bottom-0 min-w-full *:min-w-full"
  >
    <div
      class="relative h-30 bg-gradient-to-b from-neutral-200/0 via-neutral-200/20 to-neutral-200/50 backdrop-blur-lg mask-linear-from-0% mask-linear-to-100%"
    />
    <div
      class="absolute top-1/3 px-10 grid grid-cols-3 justify-items-center *:first:col-start-2 *:last:justify-self-end"
    >
      <ResumeDownloadButton />
      <ResumeLanguageSwitcherButton />
    </div>
  </div>
</template>
