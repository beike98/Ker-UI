<script setup lang="ts"></script>

<template>
  <div class="k-tool-tip">
    <div class="base">
      <slot />
      <div class="tip">
        <slot name="tip" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.k-tool-tip {
  .tip {
    position: absolute;
    background-color: #999;
    top: 1.5em;
    padding: 2px;
    display: none;
  }

  .base {
    position: relative;

    &:hover {
      .tip {
        display: block;
      }
    }
  }
}
</style>
