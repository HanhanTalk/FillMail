  <template>
    <div class="mui-page">
      <search></search>
      <div class="page-warp-inner">
        <ul>
          <li v-for="item in mailBox" :key="item.id">
              <ul>
                <div class="mui-page-item-list">
                <div v-if="item.date !== 'today'" class="date-division"><span>{{item.date}}</span></div>
                <li v-for="mail in item.mailList" :key="mail.id" :class="{'unread-bg':mail.unread}">
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
      </div>  
    </div>
  </template>
  
 <script type="text/ecmascript6">
 import search from '../../../../components/common/search.vue'
  export default {
    name:'inbox',
    components:{ search },
    //模拟数据
    data(){
      return{
        mailBox:[
          {
            date:'today',
            mailList:[
                    {
                      id:1,
                      name:'海绵宝宝',
                      url:'./src/images/userpic/user-03.jpeg',
                      title:'哈啰，我是海绵宝宝',
                      time:'11:20AM',
                      content:'海绵宝宝是方块形的黄色海绵，住在比基尼海滩（裤头村、比奇堡）的一个菠萝里，他的宠物是一只会“猫~猫~”叫的海蜗牛小蜗，海绵宝宝喜欢捕捉水母，职业是蟹堡王（The Krusty Krab）里的头号厨师。派大星和姗迪都是他的朋友。'+
                            '海绵宝宝总是能给平静的世界制造麻烦，虽然闹出一些笑话，不过他总能摆脱困境，然后又制造出新的麻烦.',
                      unread:true
                    },
                    {
                      id:2,
                      name:'面具男',
                      url:'./src/images/userpic/user-02.jpeg',
                      title:'今天你会来吗？',
                      time:'8:20AM',
                      content:'......',
                      unread:false
                    },
                    {
                      id:3,
                      name:'熊猫',
                      url:'./src/images/userpic/user-04.jpeg',
                      title:'没什么想说的',
                      time:'15:21PM',
                      content:'竹子，我要竹子！',
                      unread:true
                    }
            ]
          },
          {
            date:'YESTERDAY',
            mailList:[
              {
                id:1,
                name:'2哈',
                url:'./src/images/userpic/user-05.jpeg',
                title:'因催思挺',
                time:'8:21AM',
                content:'你们这些人啊，总想搞个大新闻',
                unread:false
              },
              {
                id:2,
                name:'小黄淫',
                url:'./src/images/userpic/user-09.jpeg',
                title:'banana～',
                time:'7:07AM',
                content:'*&...*@#!$*&*@#&*@(小黄人语言)',
                unread:true
              }
            ]
          },
          {
            date:'8月7日',
            mailList:[
              {
                id:1,
                name:'葫芦娃',
                url:'./src/images/userpic/user-10.jpeg',
                title:'我要去救爷爷',
                time:'7:07AM',
                content:'我真的不是去看蛇。。女王大人',
                unread:true
              }
            ]
          }
        ],
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
 
  
