<script setup lang="ts">
import { tableData } from '@/mock/TableData';
</script>

<template>
  <table
    class="k-table"
  >
    <thead>
      <tr>
        <th
          v-for="(_,key) of tableData[0]"
          :key="key"
        >
          {{ key }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="index in tableData.length"
        :key="index"
      >
        <td
          v-for="(item,key) of tableData[index-1]"
          :key="key"
        >
          {{ item }}
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