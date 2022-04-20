import { ref } from "vue";

const treeSelectedId = ref();

function setTreeSelectedId(id: string) {
  treeSelectedId.value = id;
}

export { treeSelectedId, setTreeSelectedId };
