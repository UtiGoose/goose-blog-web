import { createRouter, createWebHistory } from 'vue-router'

//注册路由
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue'),
    }, {
        path: '/menu',
        name : 'menu',
        component: () => import('../views/Menu.vue'),
        children: [
            {
                path: '/list',
                name: 'list',
                component: () => import('../views/blog/List.vue'),
            }, {
                path: '/timeline',
                name: 'timeline',
                component: () => import('../views/blog/Timeline.vue'),
            }, {
                path: '/note',
                name: 'note',
                component: () => import('../views/note/Note.vue'),
            }, {
                path: '/message',
                name: 'message',
                component: () => import('../views/message/Message.vue'),
            }, {
                path: '/mine',
                name: 'mine',
                component: () => import('../views/mine/Mine.vue'),
            }, {
                path: '/article',
                name: 'article',
                component: () => import('../views/blog/Article.vue'),
            }
        ]
    }
];
const router = createRouter({
    // createWebHashHistory()是使用hash模式路由
    // createWebHistory()是使用history模式路由
    history: createWebHistory(),
    routes
});

export default router;
