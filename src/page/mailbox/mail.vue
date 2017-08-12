
<template>
  <div class="mail-warp">
      <header class="nav">
          <div class="navbar">
            <div class="nav-pull-left">
                <a @click="back"><img src="../../images/icons/icon_001.png"></a>
            </div>
            <div class="nav-pull-right">
                <a @click="starClick"><i class="fa" :class="[stared ? 'fa-star':'fa-star-o']"></i></a>
            </div>
            <div class="nav-title">NEW PROJECT INQUIRY</div>
          </div>
      </header>
      <div class="warp-content">
         <div class="warp-content-head">
            <div class="head-info">
                <img src="../../images/userpic/user-01.jpeg">
                <div class="head-info-text">
                    <h1>Sergey</h1>
                    <span>to:me</span>
                </div>
            </div>
            <div class="head-time"><span>2:55PM(23 hours ago)</span></div>
         </div>
         <div class="warp-content-inner">
             <div class="inner-text">
                <p>
                    海绵宝宝是方块形的黄色海绵，住在比基尼海滩（裤头村、比奇堡）的一个菠萝里，他的宠物是一只会“猫~猫~”叫的海蜗牛小蜗，海绵宝宝喜欢捕捉水母，职业是蟹堡王（The Krusty Krab）里的头号厨师。派大星和姗迪都是他的朋友。
                    海绵宝宝总是能给平静的世界制造麻烦，虽然闹出一些笑话，不过他总能摆脱困境，然后又制造出新的麻烦.
                </p>
            <div class="inner-images">

            </div>
            <div class="inner-attachment">
                <div class="inner-head">
                    <h1><span class="fa fa-paperclip"></span>附件</h1>
                </div>
                <div class="inner-content">
                    <img src="../../images/icons/file.svg">
                    <span>PDF</span>
                    <div class="inner-content-right">
                        <h1>Creative brief - Appalo app</h1>
                        <span>22.85MB</span>
                    </div>
                </div>
            </div>
         </div>
         </div>
      </div> 
      <div class="warp-bottom">
         <div class="btn-group">
             <div class="float-left">
                 <a><i class="fa fa-reply"></i>Reply</a>
                 <a><i class="fa fa-share"></i>Forward</a>
             </div>
             <div class="float-right">
                 <a><i class="fa fa-ellipsis-v"></i></a>
             </div>
         </div>
      </div>

  </div>
</template>
<script>
export default {
  name:'mailbox',
  data(){
      return{
          stared:false
      }
  },
  methods:{
      back(){
        window.history.go(-1);
      },
      starClick(){
          this.stared = !this.stared;
      }
  }
}
</script>
<style lang="scss">
    $navhight:150px;
    $iconhight:75px;
    .mail-warp{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        .nav{
            background:#232542;
            height:$navhight;
            position: relative; 
            border-bottom:1px solid #727272;
             .navbar{
                position: absolute;
                bottom:10px;
                width:710px;
                height:$iconhight;
                margin:0 20px; 
                .nav-title{
                    font-size:34px;
                    line-height: $iconhight;
                    text-align: center;
                    color:#fafafa; 
                }
                .nav-pull-left{
                        width:$iconhight;
                        height:$iconhight;
                        position: absolute;
                        left:0;
                        top:0;
                        a{
                            display: block;
                            height: 100%;
                            width:100%;
                            img{
                                width:100%;
                                height:100%;
                            }
                        }
                    }
                .nav-pull-right{
                        width:$iconhight;
                        height:$iconhight;
                        position: absolute;
                        right:0;
                        top:0;
                        text-align: center;
                        line-height: 95px;
                        a{
                            display: block;
                            height: 100%;
                            width:100%;
                            i{
                                font-size:40px;
                                color:#ffc107;
                            }
                        }
                    }
                }
            }
        
   
   
   
   
   
   
   
   
   
   
   
   .warp-content{
       .warp-content-head{
            background:-webkit-linear-gradient(top,#232542,#3f416c);
            height:200px;
            width:100%;
            box-sizing: border-box;
            padding:50px 40px; 
            position: relative;
            .head-info{
                height:100px;
                width:400px;
                img{
                    width:100px;
                    height:100px;
                    border-radius: 50%;
                    float:left;
                }
                .head-info-text{
                    float:right;
                    width:300px;
                    box-sizing: border-box;
                    padding:10px;
                    overflow: hidden;
                    h1{
                        font-size:36px;
                        color:#fafafa;
                        margin-bottom: 10px;
                    }
                    span{
                        font-size:26px;
                        color:#dddddd;
                    }
                }
               
            }
            .head-time{
                position: absolute;
                right:40px;
                top:60px;
                span{
                    color: #b6b6b6;
                    font-size:26px;
                }
            }
       }
       .warp-content-inner{
            box-sizing: border-box;
            padding:50px;
            height: 860px;
            overflow-y:scroll; 
            p{
                font-size:30px;
                line-height: 2.5em;
            }
            .inner-attachment{
                font-size:30px;
                .inner-head{
                    margin: 20px 0;
                    span{
                      margin-right:10px; 
                    }
                }
                .inner-content{
                    position: relative;
                    img{
                        height:auto;
                        width:80px;
                        position: absolute;
                        left:0;
                     }
                     >span{
                        position: absolute;
                        top:30px;
                        left:20px;
                        font-size:20px;
                     }
                     .inner-content-right{
                        width: 600px;
                        position: absolute;
                        left: 80px;
                        top: 10px;
                        h1{
                           margin-bottom: 8px;
                        }
                        span{
                            font-size:26px;
                            color:#727272;
                        }
                     }
                }
                
               
            }
       }
   }
   .warp-bottom{
        bottom: 0;
        position: absolute;
        height: 120px;
        width:650px;
        margin:0 50px;
        border-top:1px solid #dddddd;
        box-sizing: border-box;
        padding:30px 0;
        color:#727272;
        .float-left{
            float:left;
            height:60px;
            a{
                font-size:30px;
                margin-right:30px; 
                line-height: 60px;
            }
        }
        .float-right{
            float:right;
            height:60px;
            width: 60px;
             text-align: right;
            a{
               
                line-height: 60px;
                font-size:40px;
            }
        }
    }
   }
</style>


