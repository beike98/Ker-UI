<script setup lang="ts">
import Tree from '../components/Tree.vue';
import { treeData } from '../mock/treeData';
</script>

<template>
  <Tree :data="treeData" >
  </Tree>
</template>
