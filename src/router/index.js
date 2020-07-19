import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    linkActiveClass: "active",
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '/',
            redirect: '/cards'
        },
        {
            path: "/cards/add",
            name: "add",
            component: () => import("../components/CardAdd.vue")
        },
        {
            path: "/cards",
            name: "cards",
            component: () => import("../components/Home.vue")
        }
    ]
})