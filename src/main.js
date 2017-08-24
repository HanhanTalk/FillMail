import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'


// import 'font-awesome-webpack'
import './fonts/font-awesome/css/font-awesome.css'
import './style/animate.css'

//创建一个vue实例
var app = new Vue({
  template:'<App/>',
  router,
  store,

  components:{App},
  watch:{
    //监听路由检查登录
    "$route":'checkLogin'
  },
  create(){
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      
      }
    }
})

app.$mount('#app');
