import { createWebHistory, createRouter } from "vue-router";

import Home from "./pages/Home.vue";
import Properties from "./pages/Properties.vue";
import NotFound from "./pages/NotFound.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {title: "Luxury Places - Home"}
    },
    {
        path: "/properties",
        name: "Properties",
        component: Properties,
        meta: {title: "Luxury Places - Properties"}
    },
    // 404 page must be at the bottom of the routes list
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: NotFound,
        meta: {title: "Luxury Places - 404 Not Found"}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// This changes page tab title
router.afterEach((to, from) => {
    document.title = to.meta.title;
});

export default router;