<template>
    <div class="mui-navbar">
        <div class="mui-pull-left">
            <span class="fa fa-navicon" @click="dash"></span>
        </div>
        <div class="mui-pull-right">
            <span class="fa fa-edit" @click="edit"></span>
        </div>
        <div class="mui-nav-title">
            收件箱
        </div>
    </div>
</template>
<script type="text/ecmascript6">
export default {
  name:'headGui',
  data(){
    return{
        isShow:true
    }
  },
  methods:{
      dash(){
         this.isShow = !this.isShow;
         this.$emit('transferEven',this.isShow);
      },
      edit(){
          
      }
  }
  }
</script>
<style lang="scss" scoped>
    $navbar-color:#26252a;
    $font-color:#fafafa;
    $navbar-height:100px;
    .mui-navbar{
        height: $navbar-height;
        background: $navbar-color;
        color: $font-color;
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
</style>


