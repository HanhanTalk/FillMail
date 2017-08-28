<template>
  <div :class="{'overhide':show}" class="page-warp">
    <h1>{{onTop}}</h1>
      <div class="ui-index page-inner-box" :class="[show ? 'toShow overhide':'toHide']">
          <div id = "headBar" :class="[onTop ? 'flex':'']">
              <headGui @transferEven="fadeShow"></headGui>
          </div>
          <router-view></router-view>
      </div>
    <dashboard @transferEven = "fadeShow"></dashboard>
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
      show:false,
      onTop:false
    }
  },
  methods:{
    fadeShow(data){
      if(data){
        this.onTop = false;
      }else{
        window.addEventListener('scroll',this.listenScroll);
      }
      this.show = data;
    },
    listenScroll(e){
      var _this = this;
      if(e){
        window.removeEventListener('scroll',this.listenScroll);
           _this.onTop = true;
        }
      }
  },
  mounted() {
    if (!this.$store.state.userInfo.uid) {
      this.$router.push({name:'signIn'});  
    }else{
      this.$router.push({name:'mail',params:{pathName:'inbox'}})
    }
    window.addEventListener('scroll',this.listenScroll);

  }

}
</script>
<style lang="scss">
  .flex{
    position: fixed;
    top:0;
    width:100%;
    z-index:3;
  }
  .toShow{
    position: absolute;
    left: 500px !important;
    top: 100px !important;
    height: 1100px !important;
    animation: sideShow 1s 1;
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

  .toHide{
    position: absolute;
    left:0;
    top:0;
    height: 100%;
    animation: sideHide 1s 1; 
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
  .ui-index{
    z-index:3;
  }
  .page-warp{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom: 0;
  }
  // .mui-index-warp{
  //   position: absolute;
  //   top:0;
  //   left:0;
  //   right:0;
  //   bottom: 0;
  //   overflow-y:scroll; 
  // }
  .page-inner-box{
    width:750px;
  }
  .overhide{
    overflow: hidden;
  }
</style>


