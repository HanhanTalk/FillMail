  <template>
    <div class="mui-page">
      <search></search>
      <div class="page-warp-inner">
        <ul v-if="!mailBox.length == 0">
          <li v-for="item in mailBox" :key="item.id">
              <ul>
                <div class="mui-page-item-list">
                <div v-if="item.date !== today && item.date !== yesterday" class="date-division"><span>{{item.date}}</span></div>
                <div v-if="item.date == yesterday" class="date-division"><span>昨天</span></div>
                <li @click="mailClick(mail.id)" v-for="mail in item.mailList" :key="mail.id" :class="{'unread-bg':mail.unread}">
                  <div class="mui-pull-left mui-small">
                      <img :src="mail.url">
                      <span v-if="mail.unread" class="item-badge"></span>
                    </div>
                    <div class="mui-pull-right mui-long">
                      <div class="mui-item-header">
                        {{mail.name}}
                      </div>
                      <div class="mui-item-content">
                        {{mail.title}}
                      </div>
                      <div class="mui-item-footer">
                          {{mail.content}}
                      </div>
                      <div class="item-time">
                          {{mail.time}}
                      </div>
                    </div>
                </li>
                </div>
              </ul>
          </li>
        </ul>  
        <div class="middleText" v-if="mailBox.length == 0">
          <h1>没有邮件</h1>
        </div>
      </div>  
    </div>
  </template>
  
 <script type="text/ecmascript6">
 import search from '../../../components/common/search.vue'
//  import api from '../../../api/api'
  import axios from 'axios'
 import { mapMutations } from 'vuex'
  export default {
    name:'mail',
    components:{ search },
    //模拟数据
    data(){
      return{
        path:null,
        mailBox:[],
        today:null,
        yesterday:null
      }
    },
    watch:{
       "$route":"fetchData"
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      ...mapMutations([
        'GET_TITLE'
      ]),
      fetchData(){
        this.path = this.$route.params.pathName;
        this.setTitle();
        this.getPage();
        this.setDate();
      },
      setTitle(){
        var _title = '';
        switch (this.path){
          case 'inbox':{
              _title = '收件箱';
              break;
          }
          case 'starred':{
             _title = '星标邮件';
             break;
          }
          case 'drafts':{
            _title = '草稿箱';
            break;
          }
          case 'sentmail':{
            _title = '已发送';
            break;
          }
          case 'deleted':{
            _title = '已删除';
              
          }
          default:{
             _title = '垃圾邮件';
          }
        }
        this.GET_TITLE(_title);
      },
      getPage(){
        var _this = this;
        var _value = this.path;
        axios.get('mock/data.json').then(function(response){
              _this.mailBox = response.data[_value];
        })
      },
      mailClick(value){
        this.$router.push({name:'mailbox',params:{mailId:value}});
      },
      setDate(){
        var date = new Date();
          this.today = date.getMonth()+1 +'月'+ date.getDate() + '日';
          this.yesterday = (date.getMonth() + 1) + '月' + (date.getDate() - 1) + '日'; 
      }
    }
  }
  </script>
  
 <style lang="scss" scoped>
  @mixin textOut {
          white-space:nowrap; 
          text-overflow:ellipsis;
          overflow:hidden;
          width:100%;
  }
  $item-height:150px;
 
    .mui-page{
        height: 100%;
        width: 100%;
        background:#35395f;
        position: absolute;
        top: 150px;
        left: 0;
        padding:0 40px;
        box-sizing: border-box;
        overflow: hidden;
        }
        .date-division{
          border-bottom: 1px solid #727272;
          margin-bottom: 50px;
          position: relative;
          span{
              display: block;
              width: 300px;
              height: 50px;
              position: absolute;
              top: -25px;
              font-size: 26px;
              color: #dddddd;
              left: 50%;
              margin-left: -150px;
              text-align: center;
              background: #35395f;
              line-height: 50px;
          }
        }
        .page-warp-inner{
           .middleText{
              width: 400px;
              height: 400px;
              margin: 0 auto;
              text-align: center;
              line-height: 400px;
           h1{
              font-size:30px;
              color:#fafafa;
           }
        }
        }
    .mui-page-item-list{
       margin-top: 50px;
       .unread-bg{
         background:rgb(57,60,94) !important;
       }
      li{
        height: $item-height;
        position: relative;
        background:#525672;
        border-radius: 5px;
        margin-bottom:5px;
        .mui-small{
           height:$item-height;
           width:$item-height;
            img{
              width:100px;
              height:100px;
              margin: 25px;
              border-radius: 50%;  
            }
        }
        .mui-long{
          height: $item-height;
          width:670px - $item-height;
          padding:25px;
          box-sizing: border-box;
          .item-time{
            position: absolute;
            right:30px;
            top:30px;
            font-size:26px;
            color:#cccccc;
          }
        }
        .mui-item-header{
          font-size:32px;
          margin-bottom:10px;
          color: #fafafa;
           @include textOut;
        }
        .mui-item-content{
          font-size:26px;
          margin-bottom: 10px;
          color: #dddddd;
          width:380px !important;
           @include textOut;
        }
        .mui-item-footer{
          font-size:24px;
          color:#cccccc; 
          width:380px !important;
          @include textOut;
        }
      } 
    }
    .item-badge{
        width: 20px;
        height: 20px;
        background: #53cae3;
        position: absolute;
        top: 25px;
        left: 25px;
        display: block;
        border-radius: 50%;
        border: 5px solid #525672;
    }
    .mui-pull-right{
      position: absolute;
      right:0;
      top:0;
    }
    .mui-pull-left{
      position: absolute;
      left:0;
      top:0;
    }
 </style>
 
  
