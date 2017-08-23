import Vue from 'vue'
import App from './App.vue'
import router from './router/router'


// import 'font-awesome-webpack'
import './fonts/font-awesome/css/font-awesome.css'
import './style/animate.css'

//创建一个vue实例
var app = new Vue({
  template:'<App/>',
  router,
  components:{App},

})

app.$mount('#app');
