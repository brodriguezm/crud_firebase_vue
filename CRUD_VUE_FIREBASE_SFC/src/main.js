import Vue from 'vue'
import App from './App.vue'
import './helpers/firebase.js'
import VueFire from 'vueFire'

Vue.use(VueFire)

new Vue({
  el: '#app',
  render: h => h(App)
})
