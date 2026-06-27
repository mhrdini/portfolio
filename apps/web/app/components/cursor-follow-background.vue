<script setup lang="ts">
import { useMotionValue, useSpring } from 'motion-v'
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

const cursorX = useMotionValue(0)
const cursorY = useMotionValue(0)

const xSpring = useSpring(cursorX, {
  stiffness: 200,
  damping: 30,
})

const ySpring = useSpring(cursorY, {
  stiffness: 200,
  damping: 30,
})

const SPACING = 20
const RADIUS = 180
const MIN_LENGTH = 2
const MAX_LENGTH = 12

type Point = {
  x: number
  y: number
  angle: number
  targetAngle: number
  length: number
  targetLength: number
}

let points: Point[] = []
let frame = 0

let ctx: CanvasRenderingContext2D
let resizeObserver: ResizeObserver

function buildGrid(width: number, height: number) {
  points = []

  for (let y = SPACING / 2; y < height; y += SPACING) {
    for (let x = SPACING / 2; x < width; x += SPACING) {
      points.push({
        x,
        y,
        angle: 0,
        targetAngle: 0,
        length: MIN_LENGTH,
        targetLength: MIN_LENGTH,
      })
    }
  }
}

function resize() {
  const canvas = canvasRef.value
  if (!canvas)
    return

  const rect = canvas.getBoundingClientRect()
  const dpr = window.devicePixelRatio || 1

  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

  buildGrid(rect.width, rect.height)
}

function animate() {
  const canvas = canvasRef.value
  if (!canvas)
    return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = '#d4d4d4'
  ctx.lineWidth = 1
  ctx.lineCap = 'round'

  const mx = xSpring.get()
  const my = ySpring.get()

  for (const p of points) {
    const dx = mx - p.x
    const dy = my - p.y

    const distance = Math.hypot(dx, dy)

    const t = Math.max(0, 1 - distance / RADIUS)
    // interpolate from a light gray to black
    const brightness = Math.round(212 - t * 212)
    // 212 = #d4, 0 = #000
    const color = `rgb(${brightness}, ${brightness}, ${brightness})`

    ctx.strokeStyle = color
    ctx.fillStyle = color

    if (distance < RADIUS) {
      const t = 1 - distance / RADIUS

      p.targetAngle = Math.atan2(dy, dx)
      p.targetLength = MIN_LENGTH + t * (MAX_LENGTH - MIN_LENGTH)
    }
    else {
      p.targetAngle = 0
      p.targetLength = MIN_LENGTH
    }

    // smooth relaxation
    p.angle += (p.targetAngle - p.angle) * 0.1
    p.length += (p.targetLength - p.length) * 0.12

    ctx.save()

    ctx.translate(
      Math.round(p.x) + 0.5,
      Math.round(p.y) + 0.5,
    )
    ctx.rotate(p.angle)

    if (p.length < MIN_LENGTH + 1) {
      ctx.beginPath()
      ctx.arc(0, 0, 1, 0, Math.PI * 2)
      ctx.fill()
    }
    else {
      ctx.beginPath()
      ctx.moveTo(-p.length / 2, 0)
      ctx.lineTo(p.length / 2, 0)
      ctx.stroke()
    }

    ctx.restore()
  }

  frame = requestAnimationFrame(animate)
}

function handleMouseMove(e: MouseEvent) {
  const canvas = canvasRef.value
  if (!canvas)
    return

  const rect = canvas.getBoundingClientRect()

  cursorX.set(e.clientX - rect.left)
  cursorY.set(e.clientY - rect.top)
}

onMounted(() => {
  ctx = canvasRef.value!.getContext('2d')!

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(canvasRef.value!)

  setTimeout(() => {
    resize()
    animate()
  }, 1900)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <Motion
    as="div"
    class="absolute size-full"
    :initial="{
      opacity: 0,
      clipPath: 'inset(0 100% 100% 0)',
    }"
    :animate="{
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
    }"
    :transition="{
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: 1.9,
    }"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 size-full"
    />
  </Motion>
</template>
