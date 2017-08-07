<template>
  <div class="page-warp">
     <div class="page-head-friend">
         <div class="page-head-nav-friend">
             <div class="mui-pull-left">
                <a href="javascript:;"><span class="fa fa-arrow-left"></span></a>
             </div>
             <div class="mui-pull-right">
                <a href="javascript:;">确定</a>
             </div>
             <div class="page-head-title-friend">
                联系人
             </div>
         </div>
         <div class="page-head-menu-friend">
            <ul>
                <li @click="menuClick(item)" v-for ="(item,index) in icons" :key="item.id" :class="{'menu-active-friend': index === active}">
                    <i class="fa" :class="item.icon"></i>
                </li>
            </ul>
         </div>
     </div>
     <div class="page-item-list-friend">
         <ul id="friend">
             <li v-for ="item in friends" :key="item.id">
                 <img :src="item.url">
                 <div class="item-list-caption-friend">
                     <span>{{item.name}}</span>
                        <p>{{item.account}}</p>
                 </div>
             </li>
         </ul>
     </div>
  </div>
</template>
<script>
export default {
    name:'friends',
    data(){
        return{
            active:0,
            //模拟用户数据
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
            icons:[
                {
                    id:1,
                    name:'friend',
                    icon:'fa-user'
                },
                {
                    id:2,
                    name:'group',
                    icon:'fa-users'

                },
                {
                    id:3,
                    name:'search',
                    icon:'fa-search'
                }]
        
        
        
        
        }
    },
    methods:{
        cancelClick(){
            window.history.go(-1);
        },
        menuClick(item){
            switch(item.id){
                case 1:{
                    this.active = 0;
                    break;
                }
                case 2:{
                    this.active = 1;
                    break;
                }
                default:{
                    this.active = 2;
                }
            }
        }

    }

}   
</script>
<style lang="scss">
    $margin-y-friend:80px;
    $margin-x-friend:50px;
   .page-head-friend{
       height: 400px;
       position: absolute;
       top:0;
       left:0;
       right:0;
       background:url(../../images/bg-img/12.jpg);
       background-size:100%;
       box-sizing: border-box;
       padding:$margin-y-friend $margin-x-friend 0 $margin-x-friend;
   }
   .page-head-nav-friend{
       height: 100px;
       position: absolute;
       left:0;
       top:0;
       right:0;
       .page-head-title-friend{
           margin:0 100px; 
           text-align: center;
           line-height: 100px;
           font-size: 40px;
           color:#fafafa;
       }
        a{
            display: block;
            height: 100px;
            width:100px;
            text-align: center;
            line-height: 100px;
            font-size:30px;
            color:#fafafa;
            text-decoration: none;
        }
   }
   .page-head-menu-friend{
       width:600px;
       height:120px;
       position: absolute;
       bottom:0;
       left:50%;
       margin-left:-300px;
       background:#fafafa;
       border-radius: 20px 20px 0 0;
       ul{
           position: absolute;
           height:80px;
           bottom:0;
           left:0;
           right:0;
       }
       li{
           float:left;
           height:70px;
           width:100px;
           text-align: center;
           font-size:40px;
           margin:0 50px;
           color:#727272;
       }
    //    li:first-child{
    //        margin-left:60px;
    //    }
    //    li:last-child{
    //         margin-right:60px;
    //    }
   }
   .mui-pull-left{
       position: absolute;
       top:0;
       left:0;
   }
   .mui-pull-right{
       position: absolute;
       top:0;
       right:0;
   }
    .menu-active-friend{
           color: rgb(5,244,225) !important;
           border-bottom:8px solid rgb(5,244,225);
       }
   .page-item-list-friend{
       position: absolute;
        top: 400px;
        left: 0;
        right: 0;
        overflow-y: scroll;
       box-sizing:border-box;
       padding:50px 40px; 
       li{
            box-sizing: border-box;
            padding: 40px 0;
            height:200px;
            border-bottom: 2px solid #dddddd;
           img{
                width: 120px;
                height: 120px;
                border-radius: 50%;
                float: left;
           }
           .item-list-caption-friend{
               float:left;
               height: 120px;
               width:500px;
               overflow: hidden;
               box-sizing: border-box;
               padding:20px;
                p{
                    font-size:30px;
                    color:#727272;
                     margin-top:20px;
                }
                span{
                    font-size: 40px;
                
                }
           }
       }
        li:last-child{
           border:none;
        }
   }
</style>


