import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

// asset imports
import "./assets/scss/main.scss";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const Demo = {
  data() {
    return {
      show: true
    }
  }
}

Vue.createApp(Demo).mount('#demo')