<template>
  <div class="page-main" @click="pageClick">
      <div class="page-main-inner page-padding">
          <div class="page-userinfo">
             <div class="user-picture">
                <img src="../../../images/userpic/user-01.jpeg">
                <button type="button">上传新头像</button>
            </div>
            <div class="user-info-item">
                <div class="info-item-title" @click.stop="title = false"><h1 v-if="title">{{titleValue}}</h1><input v-model="titleValue" v-if="!title" type="text"></div>
                <div class="info-item-account" @click.stop="content = false"><span v-if="content">{{contentValue}}</span><input v-model="contentValue" v-if="!content"></div>
                <div class="signature" @click.stop="introduce = false"><textarea v-model="introValue" v-if="!introduce"></textarea><p v-if="introduce">{{introValue}}</p></div>
            </div>
          </div>
          <div class="page-main-inner page-padding">
            <div class="main-inner-content">
                <ul>
                    <li>服务器设置<span class="list-pull-right"><i class="fa fa-toggle-on"></i></span></li>
                    <li>同步的邮件封数<span class="list-pull-right"><i class="fa fa-toggle-off"></i></span></li>
                    <li>邮件更新频率<span class="list-pull-right"><i class="fa fa-toggle-on"></i></span></li>
                </ul>
            </div>
         </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'usersetting',
  data(){
    return{
        title:true,
        content:true,
        introduce:true,
        titleValue:'皮卡丘',
        contentValue:'pica@fillmail.com',
        introValue:'个性签名'
        
    }
  },
  methods:{
      pageClick(){
          this.title = true;
          this.content = true;
          this.introduce = true;
      }
  }
}
</script>

<style lang="scss">
    .page-main{
        .page-userinfo{
            margin:40px;
            position: relative;
            .user-info-item{
                width:400px;
                height: 100%;
                position: absolute;
                right:0;
                top:0;
                .info-item-title{
                    margin-bottom:30px;
                    input{
                        width:400px;
                        height:40px;
                        border:1px solid #dddddd;
                        font-size:40px;
                    }
                     h1{
                        font-size:40px;
                    }
                }
                .info-item-account{
                    span{
                        font-size:30px;
                    }
                    input{
                        width:400px;
                        height:40px;
                        border:1px solid #dddddd;
                        font-size:40px;

                    }
                }
                .signature{
                    width: 300px;
                    height: 100px;
                    border: 1px solid #727272; 
                    bottom: 0;
                    position: absolute;
                    font-size: 30px;
                    textarea{
                        width:300px;
                        height:100px;
                        border:none;
                        font-size: 30px;
                    }
                }
            }
            .user-picture{
                width:200px;
               text-align: center;
            img{
                width:200px;
                height:200px;
                display: block;
                border-radius: 20px;
            }
            button{
                margin-top:15px;
                width:180px;
                height:50px;
                border:1px solid #000000;
                border-radius:10px; 
                background:-webkit-linear-gradient(top,#ffffff,#e8ecee);
                font-size:26px;
            }
        }
        }
        

    }
</style>


