import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)
//声明一个状态state
const state = {
    title:null,  //标题
    userInfo:{   //用户信息
        uid:null,
        account:null,
        password:null,
        nick:null,
        portrait:null
    },
    mailGroup:[]   //用户邮件分组
}
export default new Vuex.Store({
    state,
    mutations
})