import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Notion from '@/popup/views/notion/index.vue';

export const DashboardRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: Notion
};

export const routerList: any[] = [DashboardRoute];

// 创建实例
const router = createRouter({
  history: createWebHistory(''),
  routes: routerList,
  strict: true,
  scrollBehavior: () => ({
    left: 0,
    top: 0
  })
});

export default router;
