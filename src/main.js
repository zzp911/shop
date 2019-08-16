// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mock'
import './filter'
import VueLazyload from 'vue-lazyload'
import loading from './common/images/loading.gif'

Vue.component(Button.name, Button)
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
