import Vue from 'vue'
import VueRouter from 'vue-router'
//path
//logins
import signIn from '../page/logins/signIn.vue'
import signUp from '../page/logins/signUp.vue'
import forget from '../page/logins/forget.vue'
import protocol from '../page/logins/protocol.vue'
//index
import index from '../page/index/index.vue'

//dashboard
import inbox from '../page/index/children/inbox/inbox.vue'
// import deleted from '../page/index/childen/deleted/deleted.vue'
//sendMail
import sendMail from '../page/send/send.vue'


Vue.use(VueRouter)
// 路由配置：如果需要添加路由，就在这里添加
const router = new VueRouter({
    routes:[
        //主页
        {
            path:'/index',
            name:'index',
            component:index,
            children:[
                {
                    path:'inbox',
                    name:'inbox',
                    component:inbox
                },
                // {
                //     path:'deleted',
                //     name:'deleted',
                //     component:deleted
                // }
            ]
        },
        //发送邮件
         {
            path:'/sendMail',
            name:'sendMail',
            component:sendMail
        },
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
        },
        {
            path:'/protocol',
            name:'protocol',
            component:protocol
        }
    ]
})
export default router;