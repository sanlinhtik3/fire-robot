import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import jQuery from 'jquery'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.min'

window.jQuery = window.$ = jQuery
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
