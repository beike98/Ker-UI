<script setup lang="ts">
import { computed,reactive } from 'vue';
import type { TreeNodeModel } from '@/mock/treeData';
import { useStore } from '@/store/store';
const props = defineProps<{ data: TreeNodeModel[] }>();
const _data = reactive(props.data.map(({ id, label, children }) => ({
      id,
      label,
      children,
      expanded: false,
    })))
const onExpanded = (id: string) => {
  const current = _data.filter(({ id: _id }) => id === _id);
  current[0].expanded = !current[0].expanded;
};
const store = useStore();
const selectedId = computed(()=>store.treeSelectedId);
const onSelected = (id: string) => {
  store.setTreeSelectedId(id);
}
// Click another area to clear the selection
document.addEventListener('click',(event:Event)=>{
  if ((event.target as HTMLElement).className !== 'k-tree-label-select') {
    store.setTreeSelectedId('');
  }
})
</script>

<template>
  <ul class="k-tree-ul">
    <li
      v-for="{ id, label, children, expanded } in _data"
      :key="id"
      class="k-tree-li"
    >
      <span class="k-tree-active">
        <span v-if="children?.length">
          <span
            :class="expanded ? 'k-tree-icon-bottom' : 'k-tree-icon-right'"
            @click="onExpanded(id)"
          />
        </span>
        <span
          :class="selectedId===id ? 'k-tree-label-select':'k-tree-label'"
          @click="onSelected(id)"
        >
          {{ label }}
        </span>
      </span>
      <KTree
        v-if="children?.length && expanded"
        :data="children"
      />
    </li>
  </ul>
</template>

<style lang="scss">
.k-tree-ul {
  padding-left: 15px;

  .k-tree-li {
    list-style: none;
    margin: 4px 2px;

    .k-tree-active {
      cursor: pointer;
    }

    .k-tree-icon-right {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: transparent transparent transparent black;
    }

    .k-tree-icon-bottom {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: black transparent transparent;
      margin: 0 4px 0 -4px;
    }

    .k-tree-label {
      padding: 2px;
      border-radius: 2px;
    }

    .k-tree-label:hover {
      background-color: rgb(0 0 0 / 10%);
    }

    .k-tree-label-select {
      background-color: rgb(0 0 0 / 10%);
      padding: 2px;
      border-radius: 2px;
    }
  }
}

</style>
