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
        {
            path: "/client",
            name: "client",
            component: () => import("../Client/pages/client-list.component.vue"),
        },
        {
            path: "/profile/:id",
            name: "profile",
            component: () => import("../Client/pages/client-profile.component.vue"),
        },
        {
            path: "/delete/:id",
            name: "delete",
            component: () => import("../Client/pages/client-delete-confirmation.component.vue"),
        },
        {
            path: "/add",
            name: "add",
            component: () => import("../Client/pages/client-add.component.vue"),
        }
    ]
})

export default router
