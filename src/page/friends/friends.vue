<template>
  <div class="page-warp bg-color-friend" @click="cancelSearch">
     <div class="page-head-friend">
         <div class="page-head-nav-friend">
             <div class="mui-pull-left">
                <a href="javascript:;" @click="back"><span class="fa fa-arrow-left"></span></a>
             </div>
             <div class="mui-pull-right">
                <a href="javascript:;">确定</a>
             </div>
             <div class="page-head-title-friend">
                联系人
             </div>
         </div>
         <div class="search-input-friend animated slideInUp" v-if="toMove" @click.stop>
             <input type="text" placeholder="搜索联系人" v-model="search">
             <button type="button" @click="cancelSearch">取消</button>
         </div>
         <div class="page-head-menu-friend">
            <ul>
                <li @click.stop="menuClick(item)" v-for ="(item,index) in icons" :key="item.id" :class="{'menu-active-friend': index === active}">
                    <i class="fa" :class="item.icon"></i>
                </li>
            </ul>
         </div>
     </div>
     <div class="page-item-list-friend" :class="{'page-item-move':toMove}">
         <div class="page-item-head-friend">
             <a href="javascript:;" @click="chooseIn"><i class="fa fa-bars"></i></a>
         </div>
         <ul id="friend" v-if="active === 0">
             <li @click="chooseClick(index)" v-for ="(item,index) in friends" :key="item.id">
                 <img :src="item.url">
                 <div class="item-list-caption-friend">
                     <span>{{item.name}}</span>
                        <p>
                            {{item.account}}
                        </p>
                 </div>
                 <div class="chooseBtn" v-if="chooseInShow">
                     <a><img v-if="item.choose == true" src="../../images/bg-img/check.svg"></a>
                 </div>
             </li>
         </ul>
         <ul id="group" v-if="active === 1">
            <li v-for ="item in group" :key="item.id">
                <img :src="item.url">
                <div class="item-list-caption-friend">
                    <span>{{item.name}}</span>
                    <p>
                        <ul>
                            <li v-for="item in group[0].member" :key="item.id">
                                {{item.name}}、
                            </li>
                        </ul>
                    </p>
                </div>
            </li>
         </ul>
         <ul id="searchItem" v-if="active === 2">
             <li v-for="item in searchIn" :key="item.id">
                  <img :src="item.url">
                     <div class="item-list-caption-friend">
                     <span>{{item.name}}</span>
                        <p>
                            {{item.account}}
                        </p>
                 </div>
             </li>
         </ul>
     </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
    name:'friends',
    data(){
        return{
            active:0,
            toMove:false,
            search:'',
            chooseInShow:false,
            choose_user:[],
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
            group:[
                {
                    id:1,
                    name:'家庭',
                    url:'./src/images/userpic/group-01.jpeg',
                    info:'3个成员',
                    member:[
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
                    ]

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
    mounted(){
        this.friends.forEach(function(element,index){
            this.$set(this.friends[index],'choose',false);
        }.bind(this));
    },
    methods:{
        back(){
            window.history.go(-1);
        },
        chooseIn(){
          this.chooseInShow = !this.chooseInShow;
        },
        chooseClick(value){
            this.friends[value].choose = !this.friends[value].choose;
        },
        cancelSearch(){
            this.toMove = false;
        },
        barsClick(){
            this.toMove = !this.toMove;
        },
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
                    this.barsClick();
                }
            }
        }

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
    .bg-color-friend{
        background:#fafafa;
    }
   .page-head-friend{
       height: 400px;
       position: absolute;
       top:0;
       left:0;
       right:0;
       background:url(../../images/bg-img/12.jpg);
       background-size:100%;
       box-sizing: border-box;
       padding:80px 50px 0 50px;
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
    .page-item-move{
        top:200px !important;
    }
   .page-item-list-friend{
       position: absolute;
        top: 400px;
        left: 0;
        right: 0;
        min-height: 800px;
        overflow-y: scroll;
       box-sizing:border-box;
       padding:50px 40px; 
        background: #fafafa;
        transition: top 1s;
       .page-item-head-friend{
           position: absolute;
           top:0;
           height:50px;
           left:0;
           right:0;
           text-align: center;
           line-height: 50px;
           border-bottom:1px solid #f1f0f0;
           i{
               font-size:30px;
               color: #dddddd;
           }
       }
       li{
            box-sizing: border-box;
            padding: 40px 0;
            height:200px;
            border-bottom: 2px solid #dddddd;
            position: relative;
            .chooseBtn{
                height:120px;
                width:120px;
                box-sizing: border-box;
                padding:30px;
                position: absolute;
                right:0;
                a{
                    display: block;
                    height:100%;
                    width: 100%;
                    border-radius: 50%;
                    border:4px solid rgb(63,161,66);
                    img{
                        width:80%;
                        height:80%;
                        border-radius: 50%;
                        margin:10%;
                        
                    }
                }
            }
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
                     li{
                        padding: 0;
                        float: left;
                        height: 50px;
                        border: none;
                     }
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
   .search-input-friend{
           position: absolute;
            top: 100px;
            width: 600px;
            margin-left: -300px;
            left: 50%;
            height: 100px;
       input{
             width: 500px;
             height: 90px;
             border:none;
             font-size:30px;
             padding-left:10px;
             box-sizing: border-box;
             box-shadow: 0 5px 10px #727272;
       }
       button{
           width:100px;
           height:92px;
           float:right;
           background:#F44336;
           border: none;
           color: #fafafa;
           font-size:30px;
           box-shadow: 0 5px 10px #800a01;
       }
   }
</style>


