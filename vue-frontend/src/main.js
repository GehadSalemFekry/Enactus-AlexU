import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'


// asset import
import "./assets/scss/main.scss";

createApp(App).mount('#app')
