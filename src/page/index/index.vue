<template>
  <div class="page-warp">
      <div class="page-warp ui-index" :class="[show ? 'toShow':'toHide']">
          <headGui @transferEven="fadeShow"></headGui>
          <router-view></router-view>
      </div>
    <dashboard></dashboard>
  </div>
</template>
 <script type="text/ecmascript6">
 import headGui from '../../components/header/head.vue'
 import dashboard from '../../components/common/dashboard/dashboard.vue'
export default {
  name:'index',
  components:{ headGui,dashboard },
  data(){
    return{
      show:false
    }
  },
  methods:{
    fadeShow(data){
        this.show = data;
    }
  }
}
</script>
<style lang="scss" scoped>
  .toShow{
    position: absolute;
    left: 500px !important;
    top: 100px !important;
    height: 1100px !important;
    animation: sideShow 1s 1;
    -webkit-animation: sideShow 1s 1;
    -moz-animation: sideShow 1s 1;
  }
  @keyframes sideShow{
    from{
      left:0;
      top:0;
      height:100%;
    }
    to{
       left: 500px;
       top: 100px ;
       height: 1100px;
    }
  }
  @-webkit-keyframes sideShow{
    from{
      left:0;
      top:0;
      height:100%;
    }
    to{
       left: 500px;
       top: 100px ;
       height: 1100px;
    }
  }
  @-moz-keyframes sideShow{
    from{
      left:0;
      top:0;
      height:100%;
    }
    to{
       left: 500px;
       top: 100px ;
       height: 1100px;
    }
  }

  .toHide{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    animation: sideHide 1s 1;
    -moz-animation: sideHide 1s 1;
    -webkit-animation: sideHide 1s 1;
    
  }
  @keyframes sideHide{
    from{
      left: 500px;
       top: 100px;
       height: 1100px;
    }
    to{
      left:0;
      top:0;
      height:100%;
    }
  }
  @-moz-keyframes sideHide{
    from{
      left: 500px;
       top: 100px;
       height: 1100px;
    }
    to{
      left:0;
      top:0;
      height:100%;
    }
  }
  @-webkit-keyframes sideHide{
    from{
      left: 500px;
       top: 100px;
       height: 1100px;
    }
    to{
      left:0;
      top:0;
      height:100%;
    }
  }
  .ui-index{
    z-index:1;
  }
  .page-warp{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
    overflow: hidden;
  }
</style>


