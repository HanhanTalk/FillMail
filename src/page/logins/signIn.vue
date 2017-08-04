<template>
    <div class="page-warp login-bg-color animated fadeIn">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-pull-left">
                <span class="mui-icon mui-icon-middle">
                    <img src="../../images/logo.png">
                    <span class="mui-logo-babge fa fa-copyright"></span>
                </span>
            </a>
            <div class="mui-pull-right fairlylong">
                <a href="javascript:;">没有账号？</a>
                <button @click="toSignUp" type="button" class="mui-btn nav-btn">立即注册</button>
            </div>
        </header>
        <div class="mui-content">
            <div class="mui-form">
                <div class="mui-form-head">
                    <div class="form-user-pic">
                        <img class="user-pic-circle" src="../../images/anonym.jpg">
                    </div>
                    <div class="form-title">
                        <h1>用户登录</h1>
                    </div>
                </div>
                <div class="mui-form-contrl">
                    <div class="mui-list-item">
                        <div class="mui-list-item-inner">
                            <div class="mui-list-item-input">
                                <input class="box-noline" type="text" placeholder="请输入邮箱*">
                            </div>
                            <div class="mui-list-item-input">
                                <input class="box-noline" type="password" placeholder="请输入密码*">
                            </div>
                        </div>
                        <div class="mui-item-bottom">
                            <div class="radio-ctrl">
                                <input type="radio" name="remember" id="remember"> 
                                <label for="remember">记住我？</label>
                                <a href="javascript:;" class="mui-radio"><span class="fa fa-check"></span></a>
                            </div>
                            <a @click="forgetPass" class="mui-pull-right" href="javascript:;">糟糕了，忘记了密码</a>        
                        </div>
                        <button type="button" class="mui-btn form-btn col-yellow">立即登录</button>
                    </div>
                </div>
            </div>     
        </div>
    </div>
</template>
<script type="text/scmascript6">
export default {
    name: 'singIn',
    methods:{
        toSignUp(){
            this.$router.push({name:'signUp'})
        },
        forgetPass(){
            this.$router.push({name:'forget'})
        }
    }
}
</script>
<style lang="scss" scoped>
$navbar-color:#fafafa;
$navbar-height:150px;
$font-small:24px;
$font-middle:30px;
$font-title:40px;
$back-color:rgba(38, 37, 42, 1);
$input-height:70px;
.page-warp {
    width: 100%;
    height: 100%;
}
.nav-btn{
    width:250px;
    height:80px;
    background:$back-color;
    color:$navbar-color;
    margin:0 10px;
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

.mui-form{
    margin: 100px 80px;
}
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
}
.user-pic-circle{
    border-radius: 20px;
}
.mui-list-item-inner{
    margin: 20px 0;
}
.mui-list-item-input{
    width: 100%;
    height:$input-height;
    margin-bottom:$input-height;
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
            font-size:40px;
            margin-left:4px;
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
    background:rgba(255,203,2,1);
}
.box-noline{
    outline:none;
}
</style>



