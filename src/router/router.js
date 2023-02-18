import { createRouter, createWebHashHistory } from "vue-router";
import Day from '../views/Day.vue';
import Night from '../views/Night.vue';

const routes = [
    { 
        path: '/day', 
        component: Day, 
        alias: '/'
    },

    { 
        path: '/night', 
        component: Night, 
        alias: '/'
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
})

export default router;