import Vue from 'vue'
import { shallowMount } from "@vue/test-utils";
import BootstrapVue from 'bootstrap-vue'
import MessageList from '../templates/components/chat_room_component/MessageList.vue'
import ChatRoom from '../templates/components/chat_room_component/ChatRoom.vue'

Vue.use(BootstrapVue)

describe("MessageList.vue", () => {
  it("renders props.messages when passed", () => {
    const messages = [ {id: 1, text: "hello"} ]
    const wrapper = shallowMount(MessageList, {
      propsData: { messages }
    })
    expect(wrapper.text()).toMatch("hello")
  })
})

describe("ChatRoom.vue", () => {
  it("renders MessagesList component", () => {
    const wrapper = shallowMount(ChatRoom)
    expect(wrapper.findAll(MessageList)).toHaveLength(1)
  }),
  it("passes messages to MessagesList component", () => {
    const wrapper = shallowMount(ChatRoom)
    wrapper.setData({messages : [ {"id": 1, "text": "hello", } ]});
    wrapper.vm.$forceUpdate()

    let messageslistWrapper = wrapper.find(MessageList);
    expect(messageslistWrapper.props().messages).toEqual(wrapper.vm.messages)
  })
})
