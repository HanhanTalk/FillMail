<template>
    <div class="page-warp send-page animated fadeIn" @click="pageClick">
      <header class="mui-send-navbar">
          <div class="mui-navbar-nav">
              <div class="mui-pull-left">
                  <a href="javascript:;" @click="cancelClick" class="navbar-text">取消</a>
              </div>
              <div class="mui-pull-right">
                  <a class="navbar-text">发送</a>
              </div>
              <div class="mui-nav-title">
                  新邮件
              </div>
          </div>
      </header>
      <div class="mui-send-page">
        <div class="mui-page-item">
          <div class="mui-page-item-head">
            <div class="send-to">
                <div class="send-to-head">
                  <span class="mui-pull-left">To</span>
                  <input type="text" v-model="search" @input="onSearch">
                  <div class="search-list" v-if="searchShow">
                     <ul>
                      <li @click="sendFriendClick(item)" v-for="item in searchIn" :key="item.id">
                          <img :src="item.url"> 
                          <div class="search-list-item">
                              <span>{{item.name}}</span>
                              <p>{{item.account}}</p>
                          </div>
                      </li>
                    </ul> 
                  </div>
                  <a @click.stop="userListClick" class="mui-pull-right" href="javascript:;"><span class="fa fa-user-plus"></span></a>
                  <div class="send-user-list animated slideInRight" v-if="userlist">
                    <ul>
                      <li @click="sendFriendClick(item)" v-for="item in friends" :key="item.id"><img :src="item.url"><span>{{item.name}}</span></li>
                    </ul>
                     <a href="javascript:;" @click="moreFriendClick"><i class="fa fa-user-o"></i>更多好友...</a>
                  </div>
                </div>
                <div class="send-to-content">
                    <ul>
                      <li @click="removeSendClick(item)" v-for="item in sendFriends" :key="item.id">
                        <img :src="item.url">
                        <span>{{item.name}}</span>
                        <!-- <a href="javascript:;"><i class="fa fa-remove"></i></a> -->
                      </li>
                    </ul>
                </div>
            </div>
          </div>
          <div class="mui-page-item-content">
              <form class="mui-send-form" id="sendForm">
                <div class="form-input">
                  <input type="text" name="title" placeholder="主题"/>
                </div>
                <div class="form-textarea">
                  <textarea type="textarea" name="content" placeholder="说点什么"/>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name:'sendMail',
  data(){
    return{
      userlist:false,
      search:'',
      searchShow:false,
      //模拟数据
      friends:[
        {
          id:1,
          name:'海绵宝宝',
          account:'haimianbaobao@fillmail.com',
          url:'./src/images/userpic/user-03.jpeg'
        },
        {
          id:2,
          name:'小怪兽',
          account:'xiaoguaishou@fillmail.com',
          url:'./src/images/userpic/user-06.jpeg'
        },
        {
          id:3,
          name:'熊猫',
          account:'panda@fillmail.com',
          url:'./src/images/userpic/user-04.jpeg'
        }
      ],
      sendFriends:[]
    }
  },
  methods:{
    onSearch(){
      this.searchShow = true;
    },
    pageClick(){
      this.userlist = false;
    },
    cancelClick(){
      window.history.go(-1);
    },
    userListClick(){
      this.userlist= !this.userlist;
    },
    moreFriendClick(){
      this.$router.push({name:'friends'})
    },
    //添加收件人
    sendFriendClick(item){
       let _hasUser = false;
       this.sendFriends.forEach(function(element){
          if(element == item){
            _hasUser = true;
          }
       })
       if(!_hasUser){
          this.sendFriends.push(item);
       }
      this.searchShow = false;
    },
    //移除收件人
    removeSendClick(item){
       this.sendFriends.forEach(function(element,index){
         if(item == element){
            this.sendFriends.splice(index,1);
         }
       }.bind(this))
    },
  },

  computed:{
      //搜索filter
        searchIn() {
          var _this = this;
        if (this.search !== '') {
          return this.friends.filter(function (item) {
            return (item.name.indexOf(_this.search) > -1 || item.account.indexOf(_this.search) > -1)
          })
        }
      }
    }

}
</script>
<style lang="scss">
    $navbar-color:rgb(35,37,66);
    $font-color:#fafafa;
    $navbar-height:100px;

    @mixin sendTextOut {
          white-space:nowrap; 
          text-overflow:ellipsis;
          overflow:hidden;
    }
    .send-page{
      overflow-y: scroll;

    }

  .mui-send-page{
          background: #fafafa;
          position: absolute;
          top: 150px;
          left: 0;
          padding: 40px;
          box-sizing: border-box;
          right: 0;
          bottom: 0;
        }
 .mui-send-navbar{
        height: $navbar-height;
        background: $navbar-color;
        color: $font-color;
        padding-top:50px;
        z-index:1;
        position: fixed;
        top:0;
        left:0;
        right:0;
      .navbar-text{
            height: $navbar-height;
            text-align: center;
            width:$navbar-height;
            line-height: $navbar-height;
            font-size: 30px;
      }
        .mui-navbar-nav{
            position: relative;
            a{
              text-decoration: none;
              display: block;
              color:#fafafa;
            }
           a:active{
              color: cyan;
            }
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
    .send-to{
      min-height:100px;
      .send-to-head{
        position: relative;
        height: 100px;
        input{
            position: absolute;
            bottom: 0;
            height: 50px;
            width: 90%;
            background: transparent;
            border: none;
            font-size: 30px;
            outline: none;
        }
        .search-list{
              position: relative;
              top: 100px;
              right: 0;
              width: 100%;
              background: #ffffff;
              font-size: 30px;
              z-index: 1;
              border: 1px solid #727272;
              box-shadow: 0px 10px 20px #dddddd;
          .search-list-item{
              margin-left: 100px;
              height: 100%;
              box-sizing: border-box;
              padding: 15px;
          }
          li{
              height:100px;
            img{
              height:80px;
              width:80px;
              margin: 10px;
              border-radius: 50%;
              display: block;
              float:left;
            }
            p{
            
            }
            span{

            }
          }
        }
        .send-user-list{
          position: absolute;
          top:50px;
          right:0px;
          border-radius: 10px;
          z-index:1;
          a{
            display: block;
            height:80px;
            width:204px;
            font-size:30px;
            line-height: 80px;
            background: #1d203b;
            border-radius:0 0 10px 10px; 
            color: #ffffff;
            text-decoration: none;
          }
          li:first-child{
            border-radius: 10px 10px 0 0 ;
            border:2px solid #1d203b; 
            border-bottom:none;

          }
          li{
            height:80px;
            width:200px;
            background: #ffffff;
            line-height: 80px;
            border-right:2px solid #1d203b; 
            border-left:2px solid #1d203b; 
            i{
                margin: 0 10px;
            }
            span{
              font-size:26px;
              width:120px;
              display: block;
              position: absolute;
              right:0;
              @include sendTextOut;
            }
            img{
              width:60px;
              height:60px;
              margin:10px;
              float:left;
              border-radius: 50%;
            }
          }
        }
        >span,a{
          display: block;
          width:50px;
          height:50px;
          line-height: 50px;
          text-align: center;
          font-size:40px;
          color:#727272;
        }
      }
    }
    .send-to-content{
      ul{
        margin:20px 0;
      }
      li{
            height:80px;
            width:200px;
            display: block;
            display: inline-block;
            background:#dddddd;
            border-radius: 40px;
            margin:0 10px;
            position: relative;
        a{
          position: absolute;
          top:-10px;
          right:8px;
          color:#1d203b;
          display: block;
          i{
            font-size:30px;
          }
        }
        img{
          width:60px;
          height:60px;
          border-radius: 50%;
          margin:10px;

        }
        span{
          height: 60px;
          width:120px;
          line-height: 60px;
          display: block;
          float:right;
          font-size:26px;
          margin: 10px 0;
          @include sendTextOut;
        }
      }
      li:active{
        background:#dddddd;
      }
    }
    .mui-send-form{
      .form-input{
        height:120px;
        width: 100%;
        border-bottom: 2px solid #dddddd;
        margin:10px 0;
        input{
          height: 110px;
          width: 100%;
          background:transparent;
          border: none;
          font-size:40px;
          outline: none;
        }
      }
      .form-textarea{
          height: 600px;
          textarea{
              width: 100%;
              height: 590px;
              background: transparent;
              border:none;
              font-size:36px;
              padding:10px;
              outline: none;
          }
      }
    }

</style>


