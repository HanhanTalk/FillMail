<template>
     <div class="page-warp reg-bg-color animated fadeIn signUp">
        <header class="mui-bar mui-bar-nav">
            <a class="mui-pull-left">
                <span class="mui-icon mui-icon-middle">
                    <img src="../../images/logo-black.png">
                    <span class="mui-logo-babge fa fa-copyright"></span>
                </span>
            </a>
            <div class="mui-pull-right fairlylong">
                <a href="javascript:;">已有账号？</a>
                <button @click="toSignUp" type="button" class="mui-btn nav-btn">立即登录</button>
            </div>
        </header>
        <div class="mui-content">
            <div class="mui-form" ref="formSignUp">
                <div class="mui-form-head">
                    <div class="form-title">
                        <h1>用户注册</h1>
                    </div>
                </div>
                <div class="mui-form-contrl">
                    <div class="mui-list-item">
                        <div class="mui-list-item-inner">
                            <label>6~16个字符，可使用字母、数字、下划线</label>
                            <div class="mui-list-item-input short-input">
                                <input @focus="onFocus" class="box-noline" type="text" placeholder="邮箱*"><span>@fillmail.com</span>
                            </div>
                            <label>6～16个字符，区分大小写</label>
                            <div class="mui-list-item-input">
                                <input @focus="onFocus" class="box-noline" type="password" placeholder="密码*">
                            </div>
                            <label>确认密码</label>
                            <div class="mui-list-item-input">
                                <input @focus="onFocus" class="box-noline" type="password" placeholder="再次输入密码*">
                            </div>
                             <label>请填写图中验证码，不区分大小写</label>
                            <div class="mui-list-item-input short-input">
                                <input @focus="onFocus" class="box-noline" type="text" placeholder="验证码*"><span><img src="../../images/tool/timg2.jpeg"></span>
                            </div>
                        </div>
                        <div class="mui-item-bottom">
                            <p class="mui-pull-right">注册代表你已同意<a @click="toProtocol" href="javascript:;">「FillMail用户协议」</a></p>     
                        </div>
                        <button type="button" class="mui-btn form-btn col-yellow">立即注册</button>
                    </div>
                </div>
            </div>     
        </div>
    </div>
</template>
<script type="text/ecmascript6">
export default {
  name:'signUp',
  methods:{
      toSignUp(){
          this.$router.push({name:'signIn'});
      },
      toProtocol(){
          this.$router.push({name:'protocol'});
      },
      onFocus(){
            let _this = this;
            setTimeout(function(){
                let _pannel = _this.$refs.formSignUp;
                _pannel.scrollIntoView(true);

            },500);
        }
  }
}
</script>
<style lang="scss">
$navbar-color:#26252a;
$navbar-height:150px;
$font-small:24px;
$font-middle:30px;
$font-title:40px;
$back-color:#fafafa;
$input-height:70px;
.page-warp {
   position: absolute;
   top:0;
   bottom: 0;
   left:0;
   right: 0;
   overflow: hidden;
}
.signUp{
    .reg-bg-color{
        background:$back-color;
    }
    .mui-bar {
        height: $navbar-height;
        background: $navbar-color;
         .nav-btn{
            width:250px;
            height:80px;
            background:$back-color;
            color:$navbar-color;
            margin:0 10px;
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
            .mui-logo-babge {
                position: absolute;
                top: 40px;
                right: 10px;
                font-size: $font-small;
                }
            img {
                margin: 15px;
                width: 120px;
                height: 120px;
            }
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
}
.fairlylong {
    height: $navbar-height;
    line-height: $navbar-height;
    a{
        color:#ffffff;
    }
}
.login-bg-color {
    background: $back-color;
}

.mui-form{
    margin: 100px 80px;
}
.form-title{
    font-size:$font-title;
    h1{
        color:$navbar-color;
    }
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
    label{
        font-size:$font-small;
        display: block;
        margin: 15px;
        color:#727272;
    }
    .short-input{
        position: relative;
        box-sizing: border-box;
        padding-right:35%; 
            span{
                font-size: 30px;
                display: block;
                height: 70px;
                line-height: 70px;
                width: 35%;
                background: #dddddd;
                border-radius: 0 35px 35px 0;
                box-sizing: border-box;
                padding: 0 8px;
                position: absolute;
                top:0;
                right: 0;
                img{
                    width: 90%;
                    height: 60px;
                    margin:5px 0;
                }
                }
                input{
                 border-radius: 35px 0 0 35px;
                }
    }

}
.mui-list-item-input{
    width: 100%;
    height:$input-height;
    margin-bottom:$input-height/2;
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
    a{
        color:#f9a825;
    }
    p{
        color:#000000;
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
}
.col-yellow{
    background:#ffcb02;
}
.box-noline{
    outline:none;
}
</style>

