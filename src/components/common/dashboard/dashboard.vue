<template>
   <div id="dashboard" class="page-warp">
       <div class="mui-sidebar">
          <div class="mui-sidebar-head">
            <div class="frofile">
                <div class="frofile-icon mui-pull-left">
                    <img src="../../../images/userpic/user-01.jpeg">
                </div>
                <div class="frofile-icon mui-pull-right">
                    <span class="fa fa-angle-down"></span>
                </div>
                <div class="frofile-item">
                    <p class="frofile-item-title">Matthew Dix</p>
                    <span>MatthewDix@fillmail.com</span>
                </div>
            </div> 
          </div>
          <div class="side-btn">
              <button type="button">发送邮件</button>
          </div>
          <hr class="division">
          <div class="mui-sidebar-list">
             <ul>
                 <li v-for="item in sidebarList" :key="item.id">
                    <span class="fa" :class="item.icon"></span>
                        <a href="javascript:;">{{item.name}}</a>
                    <span class="mui-pull-right mui-tag">10</span>
                 </li>
             </ul>
          </div>
          <hr class="division">
          <div class="mui-sidebar-list">
              <div class="mui-sidebar-title">
                  标签 <span class="fa fa-plus mui-pull-right"></span>
              </div>
              <ul>
                  <li v-for="item in labelList" :key="item.id">
                      <span class="fa" :class="item.icon"></span>
                      </a href="javascript:;">{{item.name}}</a>
                  </li>
              </ul>
          </div>
       </div>
   </div>
</template>
<script type="text/ecmascript6">
export default {
  name:'dashboard',
  data() {
      return {
          sidebarList: [
              {
                  id: 1,
                  name: '收件箱',
                  icon: 'fa-inbox'
              },
              {
                  id: 2,
                  name: '星标邮件',
                  icon: 'fa-star-o'
              },
              {
                  id:3,
                  name:'草稿箱',
                  icon:'fa-folder-open-o'
              },
              {
                  id:4,
                  name:'发件箱',
                  icon:'fa-send'
              },
              {
                  id:5,
                  name:'垃圾箱',
                  icon:'fa-trash'
              }
          ],
          labelList:[
              {
                  id:1,
                  name:'工作',
                  icon:'fa-suitcase'
              },
              {
                  id:2,
                  name:'家庭',
                  icon:'fa-users'
              },
              {
                  id:3,
                  name:'重要的',
                  icon:'fa-info-circle'
              }
          ]
      }
  }
}
</script>
<style lang="scss" scoped>
    $img-size:100px;
    $font-middle:30px;
    $font-small:20px;
    .page-warp{
        background:#1d203b;
    }
    .mui-sidebar{
        width: 560px;
        color: #fafafa;
        padding: 100px 70px;
        box-sizing: border-box;
        .mui-sidebar-head{
            height: 200px;
        }
    }
    .mui-pull-left{
        position: absolute;
        left:0;
        top:0;
    }
    .mui-pull-right{
        position: absolute;
        right:0;
        top:0;
    }
    .mui-sidebar-list{
        position: relative;
        li{
            height: 80px;
            line-height: 80px;
            font-size:$font-middle; 
            a{
                color: #fafafa;
                text-decoration: none;
            }
            span{
                font-size:$font-middle;
                margin-right:10px; 
                color:#b6b6b6;
            }
        }
    }
    .mui-sidebar-title{
        font-size:$font-middle;
        span{
            margin-right:20px;
        }

    }
    .frofile{
        position: relative;
        height:$img-size;
        width:100%;
        .frofile-icon{
            width:$img-size;
            height:$img-size;
            text-align: center;
            line-height: $img-size;
            font-size:$font-middle;
            img{
            width:100%;
            height:100%;
            border-radius: 50%;
        }
        }
        .frofile-item{
            width: 420px - $img-size * 2;
            margin: 0 auto;
            font-size: $font-small;
            padding: 30px 10px;
            box-sizing: border-box;
            p{
                width:100%;
                white-space:nowrap; 
                text-overflow:ellipsis;
                overflow:hidden;
                font-size:$font-middle;
            }
            span{
                font-size:$font-small;
                color:#dddddd;
            }
        }
    }
    .mui-tag{
        width: 60px;
        height: 40px;
        text-align: center;
        background: #60c6de;
        border-radius: 20px;
        box-sizing: border-box;
        line-height: 40px;
        margin:20px 0;
        color:#ffffff !important;
    }
    .side-btn{
            width: 100%;
            box-sizing: border-box;
            button{
                width: 350px;
                height: 80px;
                background: #F44336;
                border: none;
                border-radius: 10px;
                color: #ffffff;
                font-size: 30px;
            }
    
    
    
    
    }
    .division{
        margin: 50px 0 20px 0;
    }
</style>


