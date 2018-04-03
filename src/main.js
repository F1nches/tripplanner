// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vSelect from 'vue-select'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueTimepicker from 'vue2-timepicker'
import Vuebar from 'vuebar';

Vue.use(VueAxios, axios);
Vue.use(VueTimepicker);
Vue.use(Vuebar);

Vue.component('v-timepicker', VueTimepicker)
Vue.component('v-select', vSelect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
