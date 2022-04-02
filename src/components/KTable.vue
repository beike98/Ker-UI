<script setup lang="ts">
// import {} from '../mock/TableData'
import { tableData } from '@/mock/TableData'
</script>

<template>
{{tableData}}
  <table
    class="k-table"
  >
    <thead>
      <tr>
        <th>title</th>
        <th>title2</th>
        <th>title3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>item</td>
        <td>item2</td>
        <td>item3</td>
      </tr>
      <tr>
        <td>item0</td>
        <td>item20</td>
        <td>item30</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table,th,td{
  border: 1px solid black;
}
.k-table{
  border-collapse: collapse;
}
</style>