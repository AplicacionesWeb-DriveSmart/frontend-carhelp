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
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../Inventory/pages/automotive/automotive-inventory.vue"),
        },
    ]
})

export default router
