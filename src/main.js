import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filter from './filters'
import wxconfig from './utils/wx-config'
import wx from 'weixin-js-sdk'
import 'lib-flexible/flexible.js'
// import './utils/rem'
// import 'amfe-flexible/index.js'
import service from './utils/fetch'
// import FastClick from 'fastclick'
// import Md5 from 'md5'
// import Qs from 'qs'
// if ('addEventListener' in document) {
//   document.addEventListener(
//     'DOMContentLoaded',
//     function() {
//       FastClick.attach(document.body)
//     },
//     false
//   )
// }

import {ActionSheet, Toast } from 'vant'
Vue.component(ActionSheet.name, ActionSheet)

function toast(message) {
  Toast({
    message: message,
    position: 'center',
    duration: 1000
  })
}

Vue.prototype.$toast = toast
Vue.prototype.wxconfig = wxconfig
Vue.prototype.$http = service
Vue.prototype.wx = wx
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
