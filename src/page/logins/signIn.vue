<template>
    <div class="page-warp login-bg-color animated fadeIn signIn">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-pull-left">
                <span class="mui-icon mui-icon-middle">
                    <img src="../../images/logo.png">
                    <span class="mui-logo-babge fa fa-copyright"></span>
                </span>
            </a>
            <div class="mui-pull-right fairlylong">
                <a>没有账号？</a>
                <button @click="toSignUp" type="button" class="mui-btn nav-btn">立即注册</button>
            </div>
        </header>
        <div class="mui-content">
            <div class="mui-form">
                <div class="mui-form-head">
                    <div class="form-user-pic">
                        <img v-if="imgloadUrl" class="user-pic-circle" :src="userPicUrl">
                        <img v-if="!imgloadUrl" class="user-pic-circle" src="../../images/userpic/anonym.jpg">
                    </div>
                    <div class="form-title">
                        <h1>用户登录</h1>
                    </div>
                </div>
                <div class="mui-form-contrl" ref="formSignIn">
                    <div class="mui-list-item">
                        <div class="mui-list-item-inner">
                            <div class="mui-list-item-input">
                                <input @focus="onFocus('mailNull')" class="box-noline" type="text" placeholder="请输入邮箱*" v-model="account">
                                <span v-if="mailNull"><i class="fa fa-exclamation-circle"></i>你还没有输入邮箱</span>
                            </div>
                            <div class="mui-list-item-input">
                                <input @focus="onFocus('passNull')" class="box-noline" type="password" placeholder="请输入密码*" v-model="password">
                                <span v-if="passNull"><i class="fa fa-exclamation-circle"></i>你还没有输入密码</span>
                            </div>
                        </div>
                        <div class="mui-item-bottom">
                            <div class="radio-ctrl">
                                <input type="radio" name="remember" id="remember"> 
                                <label for="remember">记住我？</label>
                                <a class="mui-radio" @click="remember"><span class="fa fa-check" :class="[cheack ? 'choose-col':'unchoose-col']"></span></a>
                            </div>
                            <a @click="forgetPass" class="mui-pull-right" >糟糕了，忘记了密码</a>        
                        </div>
                        <button @click="toLogin" type="button" class="mui-btn form-btn col-yellow">立即登录</button>
                    </div>
                </div>
            </div>     
        </div>
    </div>
</template>
 <script type="text/scmascript6">
 import api from '../../api/api'
//  import { signIn } from '../../api/api'
export default {
    name: 'singIn',
    data(){
        return{
            mailNull:false, //账号为空
            passNull:false, //密码为空
            cheack:false, //是否记住用户
            account:'',     //账号    
            password:'',    //密码
            imgloadUrl:null,  //用户图片加载地址
            userInfo:null
        }
    },
    mounted() {
        if (this.$store.state.userInfo.uid) {
            this.$router.push({name:'inbox'});
        }
    },
    methods:{
        //跳转到注册
        toSignUp(){
            this.$router.push({name:'signUp'})
        },
        toLogin(){
            //登录成功后跳转
            if( this.password === ''){
                if(this.account === ''){
                    this.mailNull = true;
                }else{
                    this.passNull = true;
                }
            }
            else{
                if( this.account == 'pica@fillmail.com' && this.password == '123456'){
                    this.$router.push({name:'inbox'});
                     //数据模拟
                    this.userInfo = {
                        uid:'100000',
                        nick:'皮卡丘',
                        account:'pica@fillmail.com',
                        password:'123456',
                        portrait:'./src/images/userpic/user-01.jpeg'
                    }
                    var labelList = [
                        {name:'工作',icon:'fa-suitcase'},
                        {name:'家庭',icon:'fa-users'},
                        {name:'重要的',icon:'fa-info-circle'}
                    ]
                    //提交mutation到store
                    this.$store.commit('updateUserInfo',this.userInfo);
                    this.$store.commit('updatemailGroup',labelList);
                }else{
                    alert('邮箱号或密码错误');
                }
                //登录检查
                // api.signIn({
                //     name:this.account,
                //     password:this.password
                // }).then((response)=>{
                //     //登录成功
                //     this.$router.push({name:'inbox'});
                // })
            }
        },
        //获取用户头像
        getUserImg(){
            this.imgloadUrl = this.userInfo.portrait;
        },

        //是否记住用户
        remember(){
            this.cheack = !this.cheack;
            if(this.cheack){
                //
            }else{
                //
            }
        },
        //跳转到密码找回
        forgetPass(){
            this.$router.push({name:'forget'});
        },

        onFocus(value){
            let _this = this;
            if(value === 'mailNull'){
                this.mailNull = false;
            }else{
                this.passNull = false;
            }
            setTimeout(function(){
                let _pannel = _this.$refs.formSignIn;
                _pannel.scrollIntoView(true);

            },500);
        }
    }
}
</script>
<style lang="scss">
$navbar-color:#fafafa;
$navbar-height:150px;
$font-small:24px;
$font-middle:30px;
$font-title:40px;
$back-color:#26252a;
$input-height:70px;
.page-warp {
   position: absolute;
   top:0;
   bottom: 0;
   left:0;
   right: 0;
overflow: hidden;
}
.nav-btn{
    width:250px;
    height:80px;
    background:$back-color;
    color:$navbar-color;
    margin:0 10px;
}
.mui-btn{
    border:none;
    outline: none;
    font-size:$font-middle;
    border-radius:50px; 
}
.mui-bar {
    height: $navbar-height;
    background: $navbar-color;
}

.mui-pull-left {
    float: left;
}

.mui-pull-right {
    float: right;
    a{  
        color:#000000;
        font-size:$font-middle;
        text-decoration: none;
    }
}

.mui-icon-middle {
    width: $navbar-height;
    height: $navbar-height;
}

.mui-icon {
    position: relative;
    display: block;
    background: $back-color;
    color: $navbar-color;
    img {
        margin: 15px;
        width: 120px;
        height: 120px;
    }
}

.mui-logo-babge {
    position: absolute;
    top: 40px;
    right: 10px;
    font-size: $font-small;
}

.fairlylong {
    height: $navbar-height;
    line-height: $navbar-height;
}

.login-bg-color {
    background: $back-color;
}
.signIn{
    .mui-content{
        .mui-form{
            margin: 100px 80px;
            .form-title{
                font-size:$font-title;
                color: #ffffff;
            }
            .form-user-pic{
                width: 300px;
                height: 300px;
                img{
                    width: 200px;
                    height:200px;
                    margin: 50px 0;
                }
                .user-pic-circle{
                    border-radius: 20px;
                }
            }
            .mui-list-item-inner{
                    margin: 20px 0;
            }
            .mui-list-item-input{
                width: 100%;
                height:$input-height;
                margin-bottom:$input-height;
                position: relative;
                span{
                    display: block;
                    height: 70px;
                    line-height: 70px;
                    font-size:26px;
                    position: absolute;
                    right: 0;
                    top:0;
                    border-radius: 0 35px 35px 0;
                    color:#e91e63;
                    background:#f9f0f2;
                    padding:0 10px;
                }
                input{
                    width: 100%;
                    height: 100%;
                    border-radius: $input-height/2;
                    border: none;
                    box-sizing: border-box;
                    padding:0 30px;
                    font-size:$font-middle;
                }
            }
            .mui-item-bottom{
                    width: 100%;
                    height:45px;
                    line-height: 45px;
                    color:#ffffff;
                    font-size:$font-middle;
                    margin: 150px 0 50px 0;
                    position: relative;
                    input{
                        width:40px;
                        height:40px;
                        margin-right:10px;
                    };
                    a{
                        color:#b6b6b6;
                    }
                    .mui-radio{
                        width: 45px;
                        height: 45px;
                        position: absolute;
                        left:0;
                        top:0;
                        display: block;
                        background:$navbar-color;
                        border-radius: 5px;
                        span{
                            font-size:45px;
                        }
                        .choose-col{
                            color:#727272;
                        }
                        .unchoose-col{
                            color: #dddddd;
                        }
                    }
                    
                }
                .radio-ctrl{
                    height: 45px;
                    width: 180px;
                    float: left;
                    line-height: 45px;
                    position: relative;  
                    label{
                        display: block;
                        float: right;
                    }
                   
                }
                .mui-btn{
                    border:none;
                    outline: none;
                    font-size:$font-middle;
                    border-radius:50px; 
                }
                .form-btn{
                    height:80px;
                    width:400px;
                    margin:40px 0;
                }
                .col-yellow{
                    background:#ffcb02;
                }
                .box-noline{
                    outline:none;
                }   
        }
    }
}

</style>



