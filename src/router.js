import Vue from 'vue'
import Router from 'vue-router'
import RoomInput from './components/RoomInput.vue'
import ChatRoom from './components/ChatRoom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'lobby',
      component: RoomInput
    },
    {
      path: '/:room',
      name: 'chat',
      component: ChatRoom
    }
  ]
})
