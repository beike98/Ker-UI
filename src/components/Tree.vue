<script setup lang="ts">
import { reactive } from 'vue';
import type { TreeNodeModel } from '../mock/treeData';
const props = defineProps<{ data: TreeNodeModel[] }>();
const _data = reactive(
  props.data.map(({ id, label, children, level }) => {
    return {
      id,
      label,
      children,
      level,
      expanded: false,
    };
  })
);
const onExpanded = (id: string) => {
  const current = _data.filter(({ id: _id }) => id === _id);
  current[0].expanded = !current[0].expanded;
};
</script>

<template>
  <ul class="ul">
    <li class="ul-li" v-for="{ id, label, children, level, expanded } in _data" :key="id">
      <span class="ul-li-active" @click="onExpanded(id)">
        <span v-if="children?.length">
          <span :class="expanded ? 'ul-li-bottom' : 'ul-li-right'" />
        </span>
        <!-- <span>{{ level }}</span> -->
        <span>{{ label }}</span>
      </span>
      <Tree v-if="children?.length && expanded" :data="children" />
    </li>
  </ul>
</template>

<style>
.ul {
  padding-left: 15px;
}
.ul-li {
  list-style: none;
}
.ul-li-active {
  cursor: pointer;
}
.ul-li-right {
  display: inline-block;
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: transparent transparent transparent black;
}
.ul-li-bottom {
  display: inline-block;
  width: 0;
  height: 0;
  border: 5px solid;
  border-color: black transparent transparent transparent;
  margin: 0 4px 0 -4px;
}
</style>
