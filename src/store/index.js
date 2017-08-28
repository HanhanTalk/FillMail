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
//状态更新
// const mutations = {
//     updateUserInfo(state,newUserInfo) {
//         state.userInfo = newUserInfo;
//     },
//     updateTitle(state,newTitle){
//         state.title = newTitle;
//     },
//     updatemailGroup(state,newmailGroup){
//         state.mailGroup = newmailGroup;
//     }
// }

export default new Vuex.Store({
    state,
    mutations
})