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
  <KTable :data="data" />
</template>
