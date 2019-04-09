import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import RoomInput from './RoomInput.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)


new Vue({
  render: h => h(RoomInput),
}).$mount('#room_input')