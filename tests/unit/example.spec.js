import { shallowMount } from "@vue/test-utils";
import MessageList from "../../src/components/MessageList.vue";
import ChatRoom from "../../src/components/ChatRoom.vue";

jest.mock("axios", () => {
    return {
        get: jest.fn(() =>
            Promise.resolve({ data: { messages: [{ id: 1, text: "hello" }] } })
        )
    };
});
const $route = {
    params: { room: "room" }
}

describe("MessageList.vue", () => {
    it("renders props.messages when passed", () => {
        const messages = [{ id: 1, text: "hello" }];
        const wrapper = shallowMount(MessageList, {
            propsData: { messages }
        });
        expect(wrapper.text()).toMatch("hello");
    });
});

describe("ChatRoom.vue", () => {
    it("renders MessagesList component", () => {
        const wrapper = shallowMount(ChatRoom, {
            mocks: {
                $route
            }
        }); expect(wrapper.findAll(MessageList)).toHaveLength(1);
    }),
        it("passes messages to MessagesList component", () => {
            const wrapper = shallowMount(ChatRoom, {
                mocks: {
                    $route
                }
            });
            let messageslistWrapper = wrapper.find(MessageList);
            expect(messageslistWrapper.props().messages).toEqual(wrapper.vm.messages);
        });
});
