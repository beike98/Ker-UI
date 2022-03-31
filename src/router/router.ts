import { createRouter, createWebHashHistory } from 'vue-router';
import TreeDemo from '../examples/TreeDemo.vue';
import TableDemo from '../examples/TableDemo.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/tree', component: TreeDemo },
    { path: '/table', component: TableDemo },
  ],
});

export default router;
