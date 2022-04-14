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
const selectedId = computed(() => store.treeSelectedId);
const onSelected = (id: string) => {
  store.setTreeSelectedId(id);
}
const onClickOtherClearSelected = () => {
  document.addEventListener('click',(event:Event) => {
  if ((event.target as HTMLElement).className !== 'label-select') {
    store.setTreeSelectedId('');
  }
})
}
onClickOtherClearSelected();
</script>

<template>
  <ul class="k-tree-ul">
    <li
      v-for="{ id, label, children, expanded } in _data"
      :key="id"
      class="li"
    >
      <span class="active">
        <span v-if="children?.length">
          <span
            :class="expanded ? 'icon-bottom' : 'icon-right'"
            @click="onExpanded(id)"
          />
        </span>
        <span
          :class="selectedId === id ? 'label-select':'label'"
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

  .li {
    list-style: none;
    margin: 4px 2px;

    .active {
      cursor: pointer;
    }

    .icon-right {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: transparent transparent transparent black;
    }

    .icon-bottom {
      display: inline-block;
      width: 0;
      height: 0;
      border: 5px solid;
      border-color: black transparent transparent;
      margin: 0 4px 0 -4px;
    }

    .label {
      padding: 2px;
      border-radius: 2px;
    }

    .label:hover {
      background-color: rgb(0 0 0 / 10%);
    }

    .label-select {
      background-color: rgb(0 0 0 / 10%);
      padding: 2px;
      border-radius: 2px;
    }
  }
}

</style>
