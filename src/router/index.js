import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "../public/pages/home.component.vue";

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
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../public/pages/about.component.vue')
        },
        {
            path: "/tutorials",
            name: "tutorials",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../learning/pages/tutorial-list.component.vue"),
        },
    ]
})

export default router
