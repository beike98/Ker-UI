<script setup lang="ts">
import KHorizontal from "@/components/KHorizontal/KHorizontal.vue";
import { ConfigModel } from "@/components/KHorizontal/configModel";
import { reactive, UnwrapNestedRefs } from "vue";
const config: UnwrapNestedRefs<ConfigModel> = reactive({
  size: {
    width: 300,
    height: 12,
  },
  text: {
    color: "#FFFFFF",
  },
  params: [
    { color: "#6865DE", progress: 40 },
    { color: "#F4901D", progress: 0 },
    { color: "#0EC763", progress: 47 },
    { color: "#FF0000", progress: 13 },
  ],
});
</script>

<template>
  <KHorizontal :config="config" />
</template>
