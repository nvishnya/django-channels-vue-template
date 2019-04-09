<template>
    <b-container>
        <b-row class="mt-4">
            <b-col cols="4" offset="4">
                <b-form inline @submit="onSubmit">
                    <b-input class="mb-2 mr-sm-2 mb-sm-0"
                             placeholder="Type your message here"
                             v-model="message">
                    </b-input>
                    <b-button variant="primary" type="submit">Send</b-button>
                </b-form>
                <message-list v-bind:messages="messages"></message-list>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import MessageList from './MessageList.vue';

export default {
    name: "ChatRoom",
    components: {
        MessageList
    },
    data: function(){
        return{
            message: '',
            messages: [],
            socket: new WebSocket('ws://' + window.location.host + '/ws' + window.location.pathname),
        }
    },
    methods: {
        sendSocketMessage: function(message){
            this.socket.send(JSON.stringify({'message': message}));
        },
        onSubmit: function(event){
            event.preventDefault();
            if(this.message != ""){
                this.sendSocketMessage(this.message);
                this.message = "";
            }
        },
        handleData: function(data){
            this.messages.push(JSON.parse(data)["message"]);
        },
        getContent: function(){
            var room = window.location.pathname.split('/').reverse().filter(x => x)[0];
            var self = this;

            axios.get('/api/messages/' + room + '/?format=json')
                .then(function (response) {
                   self.messages = response.data;
                })
        }
    },
    mounted(){
        this.getContent();
        var self = this;
        this.socket.addEventListener('message', function(event){
            self.handleData(event.data);
            console.log('new')
        });
    }
}
</script>
