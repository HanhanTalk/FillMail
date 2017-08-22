<template>
  <div class="page-main" @click="pageClick">
      <div class="page-main-inner page-padding">
          <div class="page-userinfo">
             <div class="user-picture">
                 <form enctype="multipart/form-data">
                    <img src="../../../images/userpic/user-01.jpeg">
                    <button type="button">选择上传图片
                         <input type="file" name="fileUpload" @change="upload"/>
                    </button>
                 </form>
            </div>
            <div class="user-info-item">
                <div class="info-item-title" @click.stop="title = false"><h1 v-if="title">{{titleValue}}</h1><input v-model="titleValue" v-if="!title" type="text"></div>
                <div class="info-item-account" @click.stop="content = false"><span v-if="content">{{contentValue}}</span><input v-model="contentValue" v-if="!content"></div>
                <div class="signature" @click.stop="introduce = false"><textarea v-model="introValue" v-if="!introduce"></textarea><p v-if="introduce">{{introValue}}</p></div>
            </div>
          </div>
          <div class="page-main-inner page-padding space">
            <div class="main-inner-content">
                <ul>
                    <li>服务器设置<span class="list-pull-right text-right"><i class="fa fa-angle-right"></i></span></li>
                    <li>同步的邮件封数
                        <select>
                            <option value="100封">100封</option>
                            <option value="200封">200封</option>
                            <option value="500封">300封</option>
                        </select>
                    </li>
                    <li>邮件更新频率
                        <select>
                            <option value="实时">实时</option>
                            <option value="每小时">每小时</option>
                            <option value="手动">手动</option>
                        </select>
                    </li>
                </ul>
            </div>
         </div>
         <div class="space">
             <a click="signOut" class="inner-btn">退出登录</a>
         </div>
      </div>

      <div class="page-mask" v-if="tipsShow">
         <div class="page-inner-box">
             <div class="inner-box-caption">
                 <h1>真的要退出吗？</h1>
             </div>
             <div class="inner-box-btngroup">
                 <a @click="tipsShow = true">取消</a>
                 <a @click="signOut">确定</a>
             </div>
         </div>
      </div>
      <div class="page-mask" v-if="imgPath">
          <div class="page-img-box">
              <div id="canvasImg">
                    <img :src="imgPath">
              </div>
              <button type="button" @click="updateImg">确定上传</button>
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
        introValue:'个性签名',
        tipsShow:false,
        imgPath:null
    }
  },
  methods:{
      pageClick(){
          this.title = true;
          this.content = true;
          this.introduce = true;
      },
      upload(e){
         var file = e.target.files[0];
         var createImage = (()=>{
            var _this = this;
            var reader = new FileReader();

            reader.addEventListener("load",function(){
                _this.imgPath = reader.result;
            },false);
            if(file){
                reader.readAsDataURL(file);
            }
         });
         if(file.type.substr(0,5) === 'image'){
            createImage();
         }else{
             alert('对不起，系统仅支持标准格式的图片，请你调整格式后重新上传，谢谢!');
         }
      },
      paintImage(){
        var t = this;
        var mycanvas = document.getElementById("canvasImg");
        var ctx = mycanvas.getContext('2d');
        divWidth = mycanvas.width;
        divHight = mycanvas.hight;
        var img = new Image();
        img.src = this.imgPath;
        img.onload = function(){
            //等比例缩放图片
           if(img.width < divWidth && img.height < divHight){
                img.width = divWidth;
           } else {
               var pWidth = img.width / (img.height / divHight);
               var pHigth = img.height / (img.width / divWidth);
                var imgWidth = img.width > img.height ?  divWidth: pWidth;
                var imgHeight = img.height > img.width ? divHight : pHeight;
                }
                //图片的坐标
                t.px = (t.regional.offsetWidth - t.imgWidth) / 2 + 'px';
                t.py = (t.regional.offsetHeight - t.imgHeight) / 2 + 'px';
                
                t.getImage.height = t.imgHeight;
                t.getImage.width = t.imgWidth;
                t.getImage.style.left = t.px;
                t.getImage.style.top = t.py;
            
                createCanvas.drawImage(img,0,0,t.imgWidth,t.imgHeight);//没用直接插入背景图片而用canvas绘制图片，是为了调整所需框内图片的大小
                t.imgUrl = t.getImage.toDataURL();//储存canvas绘制的图片地址
                t.cutImage();
                t.drag();
  };
},

      signOutClick(){
          this.tipsShow = true;
      },
      signOut(){

      }
  }
}
</script>

<style lang="scss">
    .page-mask{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.6);
        .page-img-box{
            width:600px;
            height:600px;
            position: absolute;
            left:50%;
            margin-left:-300px;
            top:200px;
            background:#ffffff;
            border-radius: 20px;
            box-sizing: border-box;
            padding:40px;
            text-align: center;
            img{
                width:450px;
                height:450px;
            }
            button{
                position: absolute;
                bottom:20px;
                left:50%;
                margin-left:-200px;
                width:400px;
                height:80px;
                background:#727272;
                border: none;
                border-radius: 10px;
                font-size:30px;
                color:#ffffff;
            }

        }
        .page-inner-box{
            width:600px;
            height:250px;
            position: absolute;
            left:50%;
            margin-left:-300px;
            top:350px;
            background:#ffffff;
            border-radius: 10px;
            box-sizing: border-box;
            padding:40px;
            .inner-box-caption{
                h1{
                    font-size:36px;
                }
            }
            .inner-box-btngroup{
                position: absolute;
                bottom:10px;
                right:40px;
                a{
                    display: inline-block;
                    width:100px;
                    height:50px;
                    font-size:30px;
                }
            }
        }
    }
    .page-main{
         .space{
            margin-top:100px;
        }
        .inner-btn{
            display: block;
            width: 100%;
            height: 60px;
            color: #fafafa;
            text-align: center;
            line-height: 60px;
            font-size: 30px;
            border: 1px solid #fafafa;
        }
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
                        color:#e8ecee;
                        font-size:40px;
                    }
                }
                .info-item-account{
                    span{
                        color: #e8ecee;
                        font-size:30px;
                    }
                    input{
                        color: #e8ecee;
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
                    color: #e8ecee;
                    textarea{
                        color: #e8ecee;
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
                position: relative;
            }
            input{
                position: absolute;
                font-size:40px;
                width:180px;
                height:50px;
                right: 0;
                top:0;
                opacity: 0;
            }
        }
        }
        

    }
</style>


