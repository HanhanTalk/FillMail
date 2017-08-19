import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//声明一个状态state
const state = {
    userInfo:{
        uid:null,
        account:null,
        password:null,
        nick:null
    }
}
//状态更新
const mutations = {
    updateUserInfo(state,newUserInfo) {
        state.userInfo = newUserInfo;
    },
    updateTitle(state,newTitle){
        state.title = newTitle;
    }
}

export default new Vuex.Store({
    state,
    mutations
})