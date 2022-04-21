<script setup lang="ts">
import "@/assets/hidpi-canvas.min.js";
import { onMounted, ref } from "vue";
import { draw } from "./draw";
const canvas = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  draw(canvas);
});
</script>

<template>
  <canvas ref="canvas" height="12" width="600"></canvas>
</template>
