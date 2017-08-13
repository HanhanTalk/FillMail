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
//unread
import unRead from '../page/unread/unread.vue'
//friends
import friends from '../page/friends/friends.vue'
//mailbox
import mailbox from '../page/mailbox/mail.vue'
//setting
import setting from '../page/setting/setting.vue'
import userinfo from '../page/setting/children/userinfo.vue'
import usersetting from '../page/setting/children/usersetting.vue'

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
        //好友列表
        {
            path:'/friends',
            name:'friends',
            component:friends
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
        //忘记密码
        {
            path:'/forget',
            name:'forget',
            component:forget
        },
        //用户注册守则
        {
            path:'/protocol',
            name:'protocol',
            component:protocol
        },
        //未读
        {
            path:'/unRead',
            name:'unRead',
            component:unRead

        },
        //mailbox
        {
            path:'/mailbox/:mailId',
            name:'mailbox',
            component:mailbox
        },
        //setting
        {
            path:'/setting',
            name:'setting',
            component:setting,
            children:[
                {
                    path:'userinfo/:userId',
                    name:'userinfo',
                    component:userinfo
                },
                {
                    path:'usersetting/:userId',
                    name:'usersetting',
                    component:usersetting
                }
            ]
        }
    ]
})
export default router;