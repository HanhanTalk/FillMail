<template>
    <div class="page-warp">
      <header class="mui-navbar">
          <div class="mui-navbar-nav">
              <div class="mui-pull-left">
                  <a class="navbar-text">取消</a>
              </div>
              <div class="mui-pull-right">
                  <a class="navbar-text">发送</a>
              </div>
              <div class="mui-nav-title">
                  新邮件
              </div>
          </div>
      </header>
      <div class="mui-page">sendMail</div>
    </div>
</template>
<script>
export default {
  name:'sendMail'
}
</script>
<style lang="scss">
    $navbar-color:rgb(35,37,66);
    $font-color:#fafafa;
    $navbar-height:100px;
  .mui-page{
        height: 100%;
        width: 100%;
        background: #fafafa;
        position: absolute;
        top: 150px;
        left: 0;
        padding: 40px;
        box-sizing: border-box;
        }
        a{
          display: block;
        }
        a:active{
          color: cyan;
        }
      .navbar-text{
            height: $navbar-height;
            text-align: center;
            width:$navbar-height;
            line-height: $navbar-height;
            font-size: 30px;
      }
 .mui-navbar{
        height: $navbar-height;
        background: $navbar-color;
        color: $font-color;
        padding-top:50px;
        .mui-navbar-nav{
            position: relative;
        }
        .mui-nav-title{
            font-size:40px;
            text-align: center;
            line-height: $navbar-height;
        }
        span{
            font-size:7ex;
            height:$navbar-height;
            width:$navbar-height;
            text-align: center;
            line-height: $navbar-height;
        }
    }
    .mui-pull-left{
        position: absolute;
        left:0;
        top:0;
    }
    .mui-pull-right{
        position:absolute;
        right:0;
        top:0;
    }
</style>


