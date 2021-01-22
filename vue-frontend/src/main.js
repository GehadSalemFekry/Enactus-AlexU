import '@babel/polyfill'
import 'mutationobserver-shim'
import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'


// asset import
import "./assets/scss/material-dashboard.scss";


createApp(App).mount('#app')
