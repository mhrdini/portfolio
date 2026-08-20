<script setup lang="ts">
const i18n = useI18nStore()
const { current } = storeToRefs(i18n)
</script>

<template>
  <div class="text-neutral-800">
    <ResumeEn v-if="current === 'en'" />
    <ResumeJa2 v-else />
  </div>
</template>
