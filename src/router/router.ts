import { createRouter, createWebHashHistory } from 'vue-router';
import RootPage from '@/views/RootPage.vue';
import TreeDemo from '@/views/TreeDemo.vue';
import TableDemo from '@/views/TableDemo.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { name: 'Root', path: '/', component: RootPage },
    { name:'Tree', path: '/tree', component: TreeDemo },
    { name:'Table',path: '/table', component: TableDemo },
  ],
});

NProgress.configure({ showSpinner: false }) 

router.beforeEach(()=>{
  NProgress.start();
})
router.afterEach(()=>{
  NProgress.done();
})
export default router;
