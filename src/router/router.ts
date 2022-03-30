import { createRouter, createWebHashHistory } from 'vue-router';
import TreeDemo from '../examples/TreeDemo.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: '/tree', component: TreeDemo }],
});

export default router;
