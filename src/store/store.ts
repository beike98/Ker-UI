import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    treeSelectedId: "",
  }),
  actions: {
    setTreeSelectedId(id: string) {
      this.treeSelectedId = id;
    },
  },
});
