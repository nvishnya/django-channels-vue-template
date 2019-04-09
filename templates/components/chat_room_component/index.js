import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import ChatRoom from './ChatRoom.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
  
new Vue({
  render: h => h(ChatRoom),
}).$mount('#chat_room')