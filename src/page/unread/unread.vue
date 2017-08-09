<template>
  <div class="page-warp animated fadeIn unread">
    <div class="mui-tips-mask page-warp" v-if="tips.show">
      <div class="tips-box">
        <div class="tips-caption">Oops!{{tips.content}}</div>
        <div class="tips-btn-group">
          <a href="javascript:;" @click="tips.show = false">{{tips.btnValue}}</a>
        </div>
      </div>
    </div>
    <div class="mui-nav-navbar">
       <div class="mui-nav-title">
         8封 未读邮件
       </div>
    </div>
    <div class="page-warp-main">
        <div class="main-inner">
            <ul id="mail-inner-list">
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
        <div class="hidden" id="template">
         <div class="item-inner">
                  <div class="item-inner-head">
                      <img :src="tempData.url">
                      <div class="head-item-right">
                         <span>{{tempData.name}}</span>
                         <p>{{tempData.title}}</p>
                         <div class="head-time">
                           {{tempData.time}}
                         </div> 
                      </div>
                  </div>
                  <div class="item-inner-content">
                    <div class="content-mask"></div>
                    <p>{{tempData.content}}</p>
                  </div>
          </div>
        </div>
    
        <div class="main-bottom">
          <div class="bottom-btn-group">
            <ul>
              <li v-for="item in icons" :key="item.id">
                <a type="button" href="javascript:;"><img :src="item.icon"></a>
              </li>
            </ul>
          </div>
          <div class="bottom-item">
            <div class="bottom-item-inner mui-pull-left ">
               <a @click="domCtrl('left')" href="javascript:;"><i class="fa fa-arrow-left"></i>
               <span>上一封</span></a>
            </div>
            <div class="bottom-item-inner mui-pull-right text-right">
               <a @click="domCtrl('right')" href="javascript:;"><span>下一封</span>
               <i class="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript6">
export default {
    name:'unRead',
    data(){
        return{
          animate:'',
          isPrev:false,
          isNext:false,
          tips:{
            show:false,
            content:'',
            btnValue:''
          },
          icons:[
            {
              id:1,
              name:'download',
              icon:'./src/images/icons/icon_download.png'
            },
            {
              id:2,
              name:'check',
              icon:'./src/images/icons/icon_cheak.png'
            },
            {
              id:3,
              name:'delete',
              icon:'./src/images/icons/icon_del.png'
            }
          ],
          //模拟数据
          userData:[
            {
              id:1,
              name:'海绵宝宝',
              url:'./src/images/userpic/user-03.jpeg',
              title:'哈啰，我是海绵宝宝',
              time:'11:20AM',
              content:'海绵宝宝是方块形的黄色海绵，住在比基尼海滩（裤头村、比奇堡）的一个菠萝里，他的宠物是一只会“猫~猫~”叫的海蜗牛小蜗，海绵宝宝喜欢捕捉水母，职业是蟹堡王（The Krusty Krab）里的头号厨师。派大星和姗迪都是他的朋友。'+
              '海绵宝宝总是能给平静的世界制造麻烦，虽然闹出一些笑话，不过他总能摆脱困境，然后又制造出新的麻烦.'

            },
            {
              id:2,
              name:'小怪兽',
              url:'./src/images/userpic/user-06.jpeg',
              title:'我今天打败了奥特曼',
              time:'12:20AM',
              content:'啦啦啦啦啦啦啦啦啦，哈哈哈哈哈哈哈哈哈哈哈哈'
            },
            {
              id:3,
              name:'熊猫',
              url:'./src/images/userpic/user-04.jpeg',
              title:'没什么想说的',
              time:'15:21PM',
              content:'竹子，我要竹子！'
            }
          ],
          tempData:{}
        }
    },
    mounted(){
      this.tempData = this.userData[0];
      // setTimeout(function(){
      //   this.loadMail();
      // }.bind(this),100);  
      setTimeout(()=>{
        this.loadMail();
      },100);

    },
    methods:{
      mailSwitch(_value){
        var _index;      
          this.userData.forEach(function(element,index){
             if(element.id == this.tempData.id){
                _index = index ;
             }
          }.bind(this));
          if(_value == 'left'){
            if(_index == 0 ){
              this.tips = {
                show:true,
                content:'已经是第一页啦',
                btnValue:'确定'
              }
            }else{
              _index --;
              this.tempData = this.userData[_index];
            }
           
          }else{
            if(_index == this.userData.length -1){
              this.tips = {
                show:true,
                content:'已经是最后一页啦',
                btnValue:'确定'
              }
            } else{
               _index ++;
              this.tempData = this.userData[_index];
            }
          } 
          setTimeout(()=>{
            this.loadMail();
          },1000);
      },
      domCtrl(_value){
        var _element = document.getElementById('mail-inner-list');
        var node = _element.getElementsByTagName("li");
        var li = document.createElement("li");
        if( _value == 'left' ){
          node[0].setAttribute('class','turning-left');
        } else{
          node[0].setAttribute('class','turning-right');
        }
        node[1].setAttribute('class','turning-up');
        node[2].setAttribute('class','turning-down');
        _element.appendChild(li);
    
        setTimeout(()=>{
         _element.removeChild(node[0]);
      },1000);

        this.mailSwitch(_value);
      },
      loadMail(){
        var tpl_html = document.getElementById('template').innerHTML.replace(/^\s+|\s+$/g,"");
        var _node = document.getElementById('mail-inner-list').getElementsByTagName("li")[0];
        var _ele = document.createElement('div');
        _ele.innerHTML = tpl_html;
        _node.appendChild(_ele);
      }
    }
}
</script>

<style lang="scss">
 $navbar-height:150px;
 $back-color:rgb(42,47,80);
 @mixin TextOut {
          white-space:nowrap; 
          text-overflow:ellipsis;
          overflow:hidden;
    }
    .hidden{
      display: none;
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
  .unread{
    .mui-tips-mask{
      z-index:10;
      background:rgba(0,0,0,0.6);
     .tips-box{
        width:600px;
        height:200px;
        position: absolute;
        top:600px;
        left:50%;
        margin-left:-300px;
        background:#ffffff;
        box-shadow: 10px 10px 40px #727272; 
        box-sizing: border-box;
        padding:30px;
        .tips-caption{
           font-size:36px;
           height:70px;
        }
        .tips-btn-group{
            float:right;
            height:70px;
           a{
             font-size:30px;
             text-decoration: none;
             display: inline-block;
              width:150px;
              height:70px;
              text-align: center;
              line-height: 70px;
              color:#03a9f4;
           }
           a:active{
             background:#dddddd;
           }
        }
      }
    }
    .mui-nav-navbar{
      height: $navbar-height;
      width:100%;
      background:#232542;
      position: absolute;
      top: 0;
      .mui-nav-title{
        width: 100%;
        font-size:40px;
        text-align: center;
        height:50px;
        position: absolute;
        bottom:20px;
        color:#fafafa;
      }
    }
    .page-warp-main{
      background:$back-color;
      position: absolute;
      bottom:0;
      left:0;
      right:0;
      top:$navbar-height;
      .main-inner{
        width:600px;
        height:650px;
        position: absolute;
        left:50%;
        margin-left:-300px;
        top:80px;
        li{
          height: 600px;
          position: absolute;
          background: #fafafa;
          border-radius: 10px;
          .item-inner{
            box-sizing: border-box;
            padding:20px;
            .item-inner-head{
              height:150px;
              border-bottom:1px solid #727272;
              img{
                height:100px;
                width:100px;
                margin:25px;
                border-radius: 50%;
              }
              .head-item-right{
                width:410px;
                float:right;
                height: 100%;
                box-sizing: border-box;
                padding:40px 0;
                position: relative;
                .head-time{
                  position: absolute;
                  top:40px;
                  right:20px;
                  font-size:28px;
                  color:#727272;
                }
                span{
                  font-size:32px;
                }
                p{
                  margin-top:10px;
                  font-size:28px;
                  color:#525151;
                  width:300px;
                  @include TextOut;
                }
              }
            }
            .item-inner-content{
              width:560px;
              height:400px;
              position: relative;
              box-sizing: border-box;
              padding:20px;
              overflow: hidden;
              .content-mask{
                width:100%;
                height: 100px;
                position: absolute;
                bottom:0;
                background:-webkit-linear-gradient(top,rgba(249,249,249,0.4),rgba(249,249,249,0.8));
                
              }
              p{
                line-height: 2em;
                font-size:28px;
                color:#525151;
              }
            }
          }
        }
        li:nth-child(1){
            width: 600px;
            bottom: 0;
            background: #fafafa;
            z-index:3;
            opacity: 1;
        }
        li:nth-child(2){
          width:560px;
          bottom:20px;
          left:20px;
          opacity: 0.6;
          z-index:1;
        }
        li:nth-child(3){
          width:520px;
          bottom:35px;
          left:40px;
          opacity: 0.4;
          z-index:2;
        }
      }
      .main-bottom{
        width:600px;
        left:50%;
        margin-left:-300px;
        position: absolute;
        bottom:0;
        height:450px;
        box-sizing:border-box;
        padding:50px 0;
        .bottom-btn-group{
          width:100%;
          box-sizing:border-box;
          padding:0 50px; 
          li{
            float:left;
            margin: 0 30px;
            a{
            display: block;
            height:100px;
            width:100px;
            border:2px solid #dddddd;
            border-radius: 50%;
            background:cyan;
            img{
              width: 60px;
              height:60px;
              margin:20px;
            }
           }
          }
        }
        .bottom-item{
           height:250px;
           position: absolute;
           bottom:0;
           width:100%;
            .bottom-item-inner{
               position: absolute;
               height: 100%;
               width:50%;
               box-sizing: border-box;
               padding:50px 0;
               font-size:30px;
               a{
                  color:#fafafa;
                  text-decoration: none;
               }
               a:active{
                 color: aqua;
               }

            }
            .text-right{
                 text-align: right;
            }
        }
      }
    }
    .turning-up{
      animation: upMove 1s 1 normal;
      bottom:0px !important;
      opacity: 1 !important;
      z-index:3;
      width:600px !important;
      left:0 !important;
    }
    @keyframes upMove{
      from{
        width:560px;
        bottom:20px;
        opacity: 0.6;
        left:20px;
      }
      to{
        width:600px;
        bottom:0;
        opacity: 1;
         left:0;
      }
    }
    .turning-down{
      animation: downMove 1s 1 normal;
      bottom:20px !important;
      opacity: 0.6 !important;
      z-index:1;
      width:560px !important;
      left:20px !important;
    }
    @keyframes downMove{
      from{
        width:520px;
        bottom:35px;
        opacity: 0.4;
        left:40px;
      }
      to{
        width: 560px;
        bottom:20px;
        opacity: 0.6;
       left:20px;
      }
    }
    .turning-left{
      animation: leftMove 1s 1 normal;
      right:40px !important;
      opacity: 0 !important;
    }
    @keyframes leftMove{
      from{
        right:0px;
        opacity: 1;
      }
      to{
        right:40px !important;
        opacity: 0;
      
      }
    }
    .turning-right{
      left:40px !important;
      opacity: 0 !important;
      animation: rightMove 1s 1 normal;
    }
    @keyframes rightMove{
      from{
        left:0px;
        opacity:1
      }
      to{
        left:40px !important;
        opacity: 0;
      }
    }
  }
  .btn-mask{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
</style>

