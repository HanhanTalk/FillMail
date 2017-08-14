<template>
  <div class="page-warp animated fadeIn" id="setting">
      <header class="nav">
          <div class="nav-navbar">
              <div class="nav-pull-left">
                  <a>返回</a>
              </div>
              <div class="nav-pull-right">
                  <a>保存</a>
              </div>
              <div class="nav-title">设置</div>
          </div>
      </header>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'setting'
}
</script>
<style lang="scss">
  $navhight:75px;
  $backbg:#232542;
    #setting{
        .division{
            border-color: #727272;
        }
        .main-bg{
            background:#2e3256;
        }
        .nav{
            background:$backbg;
            height:$navhight * 2;
            position: fixed;
            top:0;
            width:100%;
            z-index:3;
            .nav-navbar{
                position: absolute;
                bottom:0;
                width:100%;
                height:$navhight;
                font-size:30px;
                color:#fafafa;
              .nav-pull-left{
                 width:$navhight;
                 height:$navhight;
                 position: absolute;
                 left:0;
                 text-align: right;
              }
             .nav-pull-right{
                 width:$navhight;
                 height:$navhight;
                 position: absolute;
                 right:0;
                 text-align: left;
             }
             .nav-title{
                width:600px;
                margin: 0 auto;
                text-align: center;
                font-size:40px;
             }
            }
        }
        .page-main{
            margin-top: 150px;
            box-sizing: border-box;
            .page-padding{
               padding:20px;
            }
            .page-main-info{
                height:150px;
                .page-main-info-right{
                    width:540px;
                    position: relative;
                    box-sizing: border-box;
                    padding:20px;
                    float:right;
                    color:#fafafa;
                    overflow: hidden;
                    h1{
                        font-size:30px;
                        margin-bottom:50px;
                    }
                    span{
                        font-size:26px;
                    }
                    .leftBtn{
                        display:block;
                        width:50px;
                        height:50px;
                        border-radius: 50%;
                        border:2px solid #727272;
                        position: absolute;
                        right: 0px;
                        top: 50%;
                        margin-top: -25px;
                        text-align: center;
                        i{
                            font-size:40px;
                            margin: 5px 0;
                            color:#727272;
                        }
                    }
                }
                img{
                    width:120px;
                    height:120px;
                    margin:15px;
                }
            }
            .page-main-inner{
                
                .main-inner-title{
                    margin-bottom:40px;
                    h1{
                        font-size:30px;
                        color:#dddddd;
                    }
                }
                .main-inner-content{
                    li{
                        font-size:30px;
                        color:#fafafa;
                        position: relative;
                        height:60px;
                        line-height: 60px;
                        border-bottom: 1px solid #232542;
                        .list-pull-right{
                            width:60px;
                            height:50px;
                            margin:5px 0;
                            position: absolute;
                            right:0;
                            i{
                                font-size:50px;
                            }
                        }
                    }
                }      
                    
            }
        }
    }
</style>


