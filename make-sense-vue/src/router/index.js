import { createRouter, createWebHashHistory } from "vue-router";
const Index = () => import('@/pages/Index.vue');
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;
