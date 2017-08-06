<template>
  <div class="mui-search" id="search" ref="searchInput" :class="{'active':active}">
      <input @focus="inputFocus" @blur="inputBlur" type="text" placeholder="搜索邮件">
      <div class="mui-pull-right">
          <a @click="search"><i class="fa fa-search"></i></a>
      </div>
  </div>
</template>
<script type="text/ecmascript6">
export default {
  name:'search',
  data(){
    return{
        active:false
    }
  },
  methods:{
        search(){
            //
        },
        inputFocus(){
            this.active = true;
        },
        inputBlur(){
            this.active = false;
        }
    }
}
</script>
<style lang="scss" scoped>
    $search-height:120px;
    .active{
        height: $search-height - 20px !important;
    }
    .mui-search{
        height: $search-height;
        border-bottom: 2px solid;
        position: relative;
        transition: height 0.5s;
        input{
            height:$search-height - 10px;
            width:100%;
            font-size:30px;
            box-sizing: border-box;
            padding-left:10px;
            background: transparent;
            border: none;
            outline: none;
            transition: height 1s;
        }
        a{
            font-size:40px;
            display: block;
            height:$search-height;
            width: $search-height;
            text-align: center;
            line-height: $search-height;
        }
        a:active{
            color:#727272;
        }
    }
    .mui-pull-right{
        position: absolute;
        right:0;
        top:0;
    }
</style>

