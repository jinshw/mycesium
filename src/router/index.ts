import { createRouter, createWebHistory } from "vue-router";


const constantRoutes = [
    { path: "/home", component: () => import("../views/Home.vue") },
    { path: "/about", component: () => import("../views/About.vue") }
];

const router = createRouter({
    history: createWebHistory(),
    routes: [...constantRoutes]
});
export default router;