<script setup lang="ts">
import { SunMoon } from '@lucide/vue'
import { Button, ToggleGroup, ToggleGroupItem } from '@portfolio/ui-vue'

const lang = ref<string | null>('en')
const langModelValue = computed({
  get: () => lang.value,
  set: (val) => {
    if (val === undefined || val === null)
      return
    lang.value = val
  },
})
const theme = ref<'light' | 'dark'>('light')
watch(theme, (newTheme) => {
  document.body.setAttribute('class', newTheme)
})
// Toggle function
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="m-auto flex flex-col items-center gap-2">
    <Button variant="outline">
      {{ lang === 'jp' ? 'ハロー、ワールド！' : 'Hello, world!' }}
    </Button>
    <ToggleGroup
      v-model="langModelValue"
      variant="outline"
    >
      <ToggleGroupItem value="en">
        EN
      </ToggleGroupItem>
      <ToggleGroupItem value="jp">
        JP
      </ToggleGroupItem>
    </ToggleGroup>
    <Button variant="outline" @click="toggleTheme">
      <SunMoon />
    </Button>
    <Button class="font-mono">
      return 0;
    </Button>
  </div>
</template>
