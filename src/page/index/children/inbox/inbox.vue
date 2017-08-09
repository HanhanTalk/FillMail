  <template>
    <div class="mui-page">
      <search></search>
      <div class="mui-page-item-list">
        <ul>
          <li>
            <div class="mui-pull-left mui-small">
              <img src="../../../../images/userpic/user-01.jpeg">
              <span class="item-badge fa fa-circle"></span>
            </div>
            <div class="mui-pull-right mui-long">
              <div class="mui-item-header">
                皮卡丘
              </div>
              <div class="mui-item-content">
                你在哪里啊，我今天下午请你吃饭出来玩
              </div>
              <div class="mui-item-footer">
                等下我把餐厅地址发给你哦
              </div>
              <div class="item-time">
                11:12 AM
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
 <script type="text/ecmascript6">
 import search from '../../../../components/common/search.vue'
  export default {
    name:'inbox',
    components:{ search }
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
        background: #fafafa;
        position: absolute;
        top: 150px;
        left: 0;
        padding: 40px;
        box-sizing: border-box;
        }
    .mui-page-item-list{
       margin-top: 50px;
      li{
        height: $item-height;
        position: relative;
        border-left:10px solid #651fff;
        background: #fffde7;
        border-radius: 6px;
        margin-bottom:4px;
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
            font-size:20px;
          }
        }
        .mui-item-header{
          font-size:40px;
          margin-bottom:5px;
           @include textOut;
        }
        .mui-item-content{
          font-size:30px;
          
           @include textOut;
        }
        .mui-item-footer{
          font-size:28px;
          color:#727272; 
          @include textOut;
        }
      } 
    }
    .item-badge{
       color:aqua;
       position: absolute;
       top:30px;
       left:30px;
       font-size:26px;
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
 
  
