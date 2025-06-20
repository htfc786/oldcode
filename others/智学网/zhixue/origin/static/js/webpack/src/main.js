// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/theme/index.css';

// IE9 兼容Promise
import promise from 'es6-promise';
promise.polyfill();

require('./api/checkStorage')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})



// WEBPACK FOOTER //
// ./src/main.js