import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../carhelp/pages/home.component.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: "/inventory",
            name: "inventory",
            component: () => import("../Inventory/pages/automotive/automotive-inventory.vue"),
        },
    ]
})

export default router
