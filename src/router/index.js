import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BeersView from "../views/BeersView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/beers/",
        name: "beers",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: BeersView,
    },
    {
        path: "/taproom",
        name: "taproom",
        component: () => import("../views/TaproomView.vue"),
    },
    {
        path: "/brewery",
        name: "brewery",
        component: () => import("../views/BreweryView.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/events",
        name: "events",
        component: () => import("../views/EventsView.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return desired position
        console.log(to, from, savedPosition);
        return { top: 0 };
    },
});

export default router;
