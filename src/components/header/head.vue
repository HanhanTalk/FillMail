<template>
    <div class="mui-navbar">
        <div class="mui-navbar-nav">
        <div class="mui-pull-left">
            <span class="fa fa-navicon" @click="dash"></span>
        </div>
        <div class="mui-pull-right">
            <span class="fa fa-envelope-o" @click="unRead">
                <span class="mui-nav-icon-badge">3</span>
            </span>
        </div>
        <div class="mui-nav-title">
            {{title}}
        </div>
        </div>
    </div>
</template>
 <script type="text/ecmascript6">
 import { mapState } from 'vuex'
export default {
  name:'headGui',
  data(){
    return{
        isShow:true,
        fiexValue:true
    }
  },
  computed:mapState([
        'title'
  ]),
  methods:{
      dash(){
         this.isShow = !this.isShow;
         this.$emit('transferEven',this.isShow);
      },
      unRead(){
        this.$router.push({name:'unRead'});
      }
  }
  }
</script>
<style lang="scss" scoped>
    $navbar-color:#232542;
    $font-color:cyan;
    $navbar-height:100px;
    .mui-navbar{
        height: $navbar-height;
        background: $navbar-color;
        color: $font-color;
        padding-top:50px;
        position: absolute;
        top:0;
        width: 100%;
        .mui-navbar-nav{
            position: relative;
        }
        .mui-nav-icon-badge{
            display: block;
            position:absolute;
            top:8px;
            left:0;
            font-size:20px;
            line-height: 40px;
            width:40px;
            height:40px;
            background:#F44336;
            border-radius:50%; 
        }
        .mui-nav-title{
            font-size:40px;
            text-align: center;
            line-height: $navbar-height;
            color:#fafafa;
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
</style>


