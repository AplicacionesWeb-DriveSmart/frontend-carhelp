import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../carhelp/pages/home.component.vue'
import Support from "../Support/pages/client/support.vue";
import Plans from "../Plans/pages/client/plans.vue";

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
            path:"/support",
            name: "support",
            component: Support,
        },
        {
            path: '/plans',
            name: 'plans',
            component: Plans,
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
        },
        {
            path: "/invoices",
            name: "invoices",
            component: () => import("../invoice/pages/invoice-list.component.vue"),
        },
        {
            path: "/add-invoice",
            name: "add-invoice",
            component: () => import("../invoice/pages/add-invoice.component.vue"),
        },
        {
            path: "/preview-invoice",
            name: "preview-invoice",
            component: () => import("../invoice/pages/invoice-preview.component.vue"),
        },
        {
            path: "/vehicles",
            name: "vehicles",
            component: () => import("../vehicles/components/vehicle-list.component.vue"),
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../public/pages/home/home.component.vue"),
        }
    ]
})

export default router
