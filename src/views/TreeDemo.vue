<script setup lang="ts">
import KTree from '../components/KTree.vue';
import { treeData } from '../mock/treeData';

</script>

<template>
  <KTree
    :data="treeData"
  />
</template>
