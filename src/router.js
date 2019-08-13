import Vue from 'vue'
import Router from 'vue-router'

// views
// 每个页面生成一个单独的模块
// 在页面访问的时候延迟加载
const Home = r => require.ensure([], () => r(require('@/views/index')), 'index');
const Test = r => require.ensure([], () => r(require('@/views/test')), 'test');

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
})
router.beforeEach((to, from, next) => {
    // ${//to and from are Route Object,next() must be called to resolve the hook}
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
export default router
