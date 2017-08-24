import {
    GET_USERINFO,
    GET_MAILGROUP,
    GET_TITLE
} from './mutation-type.js'

export default{
    //获取用户信息
    [GET_USERINFO](state,newUserInfo){
        state.userInfo = newUserInfo;
    },
    //获取用户邮件分组
    [GET_MAILGROUP](state,newmailGroup){
        state.mailGroup = newmailGroup;
    },
    //获取标题
    [GET_TITLE](state,newTitle){
        state.title = newTitle;
    }
}