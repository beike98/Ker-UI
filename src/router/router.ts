import { createRouter, createWebHashHistory } from 'vue-router';
import TreeDemo from '@/views/TreeDemo.vue';
import TableDemo from '@/views/TableDemo.vue';
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name:'Tree', path: '/tree', component: TreeDemo },
    { name:'Table',path: '/table', component: TableDemo },
  ],
});

export default router;
