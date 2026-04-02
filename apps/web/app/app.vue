<script setup lang="ts">
import { Button, ToggleGroup, ToggleGroupItem } from '@portfolio/ui-vue'

const value = ref('en')
</script>

<template>
  <div class="min-h-screen w-full">
    <div class="m-auto flex flex-col items-center gap-2">
      <Button variant="outline">
        {{ value === 'jp' ? 'ハロー、ワールド！' : 'Hello, world!' }}
      </Button>
      <ToggleGroup v-model="value" variant="outline">
        <ToggleGroupItem value="en">
          EN
        </ToggleGroupItem>
        <ToggleGroupItem value="jp">
          JP
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  </div>
</template>
