import Vue from 'vue'
import VueRouter from 'vue-router'
//path
import signIn from '../page/logins/signIn.vue'
import signUp from '../page/logins/signUp.vue'
import forget from '../page/logins/forget.vue'


Vue.use(VueRouter)
// 路由配置：如果需要添加路由，就在这里添加
const router = new VueRouter({
    routes:[
        //主页
        // {
        //     path:'/home',
        //     name:'home',
        //     component:home
        // },
        //登录
        {
            path:'/signIn',
            name:'signIn',
            component:signIn
        },
        //注册
        {
            path:'/signUp',
            name:'signUp',
            component:signUp
        },
        {
            path:'/forget',
            name:'forget',
            component:forget
        }
    ]
})
export default router;