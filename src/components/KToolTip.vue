<script setup lang="ts">
</script>

<template>
  <div class="k-tool-tip">
    <div class="base">
      <slot />
    </div>
    <div class="tip">
      <slot name="tip" />
    </div>
  </div>
</template>

<style lang="scss">
.k-tool-tip {
  .base {
    position: relative;
  }

  .tip {
    position: absolute;
  }
}
</style>