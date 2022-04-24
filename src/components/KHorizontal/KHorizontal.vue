<script setup lang="ts">
import "@/assets/hidpi-canvas.min.js";
import { onMounted, ref, UnwrapNestedRefs, watch } from "vue";
import { draw } from "./draw";
import { ConfigModel } from "./configModel";
const props = defineProps<{ config: UnwrapNestedRefs<ConfigModel> }>();
const canvas = ref<HTMLCanvasElement | null>(null);
onMounted(() => {
  draw(canvas, props.config);
});
watch(props.config, () => {
  draw(canvas, props.config);
});
</script>

<template>
  <canvas
    ref="canvas"
    :height="props.config.size.height"
    :width="props.config.size.width"
  >
  </canvas>
</template>
