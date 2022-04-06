<script setup lang="ts">
import KTable from '@/components/KTable.vue';
import { tableData } from '@/mock/TableData';

// 自定义 table 标题
const data = tableData.map(({key,name,age,address,tags}) =>  ({
    '编号': key,
    '姓名': name,
    '年龄': age,
    '住址': address,
    '标签': tags
  }));
</script>

<template>
  <KTable :data="data">
    <template #标签="{item}">
      <ul>
        <li
          v-for="(i,index) in item"
          :key="i"
          class="item"
        >
          {{ i }}<span v-if="index!==item.length-1">/</span>
        </li>
      </ul>
    </template>
  </KTable>
</template>

<style scoped lang="scss">
.item {
  list-style: none;
  display: inline;
}
</style>