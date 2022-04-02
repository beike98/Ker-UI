<script setup lang="ts">
import { tableData } from '@/mock/TableData';
const titles = Object.keys(tableData[0])
const items :any[] = [];
tableData.forEach((item :any,index) => {
  items.push([]);
  titles.forEach((title :string) => {
    items[index].push(item[title])
  })
})
</script>

<template>
  <table
    class="k-table"
  >
    <thead>
      <tr>
        <th
          v-for="title in titles"
          :key="title"
        >
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.key"
      >
        <td
          v-for="ite in item"
          :key="ite"
        >
          {{ ite }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss">
.k-table {
  border-collapse: collapse;

  table,
  th,
  td {
    border: 1px solid black;
    padding: 2px;
  }
}
</style>