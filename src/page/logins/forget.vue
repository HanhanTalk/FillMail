  <template>
  <div class="page-warp animated fadeIn bg-color">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-pull-left">
        <span class="mui-icon mui-icon-middle">
          <img src="../../images/logo-black.png">
          <span class="mui-logo-babge fa fa-copyright"></span>
        </span>
      </a>
      <div class="mui-pull-right fairlylong">
        <a href="javascript:;" @click="goSignIn">返回登录</a>
        <a type="button" class="mui-btn nav-btn">备用邮箱找回
          <span class="fa fa-arrow-circle-o-right"></span>
        </a>
      </div>
    </header>
    <div class="mui-content">
      <div class="mui-list-item">
        <div class="mui-list-item-inner">
          <img src="../../images/animat-responsive-color.gif">
        </div>
        <div class="mui-form-contrl" id="form" v-if="Step === 1" ref="forget">
            <div class="form-item">
              <div class="mui-form-input">
                <select>
                        <option>0086</option>
                        <option>0087</option>
                        <option>0088</option>
                </select>
                <span class="fa fa-chevron-down"></span>
                <input @focus="onFocus" type="text" placeholder="请输入绑定的手机号码">
              </div>
               <div class="mui-form-input">
                  <input @focus="onFocus" type="text" placeholder="请证明你不是机器人"><img src="../../images/tool/timg2.jpeg">
              </div>
              <div class="mui-form-input">
                <input @focus="onFocus" type="text" placeholder="请输入短信验证码"><a>获取验证码</a>
              </div>
              <button type="submit" @click="Next">找回密码</button>
            </div>
        </div>
        <div class="mui-form-contrl animated fadeInRight" id="form" v-if="Step === 2" ref="forget">
            <div class="form-item">
              <div class="mui-form-input">
                <input @focus="onFocus" type="text" placeholder="请输入新的密码*">
              </div>
               <div class="mui-form-input">
                  <input @focus="onFocus" type="text" placeholder="请再次输入*">
              </div>
              <div class="mui-form-input">
                <input @focus="onFocus" type="text" placeholder="请输入验证码*"><img src="../../images/tool/timg2.jpeg">
              </div>
              <button type="submit" @click="Next">重置密码</button>
            </div>
        </div>
         <div class="mui-list-item">
          <div class="mui-list-item-inner">
            <div class="mui-list-bottom">
            <div class="mui-left" :class="{'unactive':Step === 2}" @click="stepClick">
              <p>01</p>
              <span>验证手机号</span>
            </div>
            <div class="mui-right" :class="{'unactive':Step === 1}">
              <p>02</p>
              <span>重置密码</span>
            </div>
            <hr class="middle-line">
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script type="text/ecmascript6">
export default {
  name: 'forget',
  data(){
    return{
      Step:1
    }
  },
  methods:{
    Next(){
        this.Step = 2;
    },
    stepClick(){
      this.Step = 1;
    },
    goSignIn(){
      this.$router.push({name:'signIn'});
    },
    onFocus(){
            let _this = this;
            setTimeout(function(){
                let _pannel = _this.$refs.forget;
                _pannel.scrollIntoView(true);

            },500);
        }
  }
}
</script>

  <style lang="scss" scoped>
$col-yellow:#ffdd3a;
$navbar-height:150px;
$navbar-color:#26252a;
$font-small:24px;
$font-middle:30px;
$font-big:40px;
$inner-height:300px;
$input-height:120px;
.page-warp {
   position: absolute;
   top:0;
   bottom: 0;
   left:0;
   right: 0;
   overflow: hidden;
}
.bg-color {
  background: $col-yellow;
}
.mui-bar {
    height: $navbar-height;
    background: $navbar-color;
}

.page-content {
  background: $col-yellow;
  width: 100%;
  height: 100%;
}
.mui-list-item-inner{
    width: 100%;
    height: $inner-height;
    img{
        width: $inner-height;
        height: $inner-height;
        margin: 0 225px;
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
.fairlylong{
  line-height: $navbar-height;
  padding:0 15px;
  a:first-child{
    border-right:2px solid #ffffff;
    padding-right:10px;
    margin-right:10px;
  }
  a{
    color: #ffffff;
  }
  span{
    font-size:$font-big;
    position: relative;
    top:4px;
  }
}
.mui-icon-middle {
    width: $navbar-height;
    height: $navbar-height;
}

.mui-icon {
    position: relative;
    display: block;
    background:$col-yellow;
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
.form-item{
  width:600px;
  margin:0 auto;
    .mui-form-input{
      height: $input-height;
      border-bottom: 2px solid $navbar-color;
      line-height: $input-height;
      select{
        font-size: $font-small;
      }
      span{
        font-size:$font-small;
      }
      input{
        height: $input-height - 20px;
        width:420px;
        background:transparent;
        border: none;
        font-size:$font-middle;
        outline: none;
      }
      img{
        margin:20px 0;
        width:150px;
        height:78px;
        float:right;
        border:2px solid #000000;
      }
      a{
        display: block;
        width:150px;
        height:78px;
        float:right;
        border:2px solid #000000;
        margin:20px 0;
        line-height: 80px;
        text-align: center;
        font-size:$font-small;
      }
      a:active{
        background: $navbar-color;
        color: #ffffff;
      }
    }
    button{
        width: 100%;
        height: 80px;
        background: #000000;
        margin: 50px 0;
        color: #ffffff;
        font-size: $font-small;
    }
    button:active{
      background:#727272;
    }
}
.mui-list-bottom{
    width: 600px;
    height:$navbar-height;
    margin: 50px auto;
    position: relative;
  .mui-left{
    position: absolute;
    left:0;
    height: $navbar-height;
    width:$navbar-height;
    text-align: center;
    p{
      font-size: 10ex;
    }
    span{
      font-size:$font-small;
    }
  }
  .mui-right{
    position: absolute;
    right:0;
    height: $navbar-height;
    width:$navbar-height;
    text-align: center;
    p{
      font-size:10ex;
    }
    span{
      font-size:$font-small;
    }
  }
}
.middle-line{
    width: 300px;
    position: absolute;
    top: 45px;
    left: 140px;
    border-color: #000000;
}
.unactive{
   color:#727272 !important;
}
</style>

