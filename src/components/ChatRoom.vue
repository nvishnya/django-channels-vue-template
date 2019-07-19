<template>
  <center>
    <form @submit="onSubmit">
      <input id="message-input-field" placeholder="Type your message here" v-model="message" />
      <button type="submit">Send</button>
    </form>
    <message-list v-bind:messages="messages"></message-list>
  </center>
</template>

<script>
import axios from "axios";
import MessageList from "./MessageList";
export default {
  name: "ChatRoom",
  components: {
    MessageList
  },
  data: function() {
    return {
      message: "",
      messages: [],
      socket: new WebSocket(
        "ws://" + window.location.host + "/ws/" + this.$route.params.room + '/'
      )
    };
  },
  methods: {
    sendSocketMessage: function(message) {
      this.socket.send(JSON.stringify({ message: message }));
    },
    onSubmit: function(event) {
      event.preventDefault();
      if (this.message != "") {
        this.sendSocketMessage(this.message);
        this.message = "";
      }
    },
    handleData: function(data) {
      this.messages.push(JSON.parse(data)["message"]);
    },
    getContent: function() {
      var room = this.$route.params.room;
      var self = this;
      axios
        .get("/api/messages/" + room + "/?format=json")
        .then(function(response) {
          self.messages = response.data;
        });
    }
  },
  mounted() {
    this.getContent();
    var self = this;
    this.socket.addEventListener("message", function(event) {
      self.handleData(event.data);
    });
  }
};
</script>
<style>
center {
  position: relative;
  top: 5%;
}
</style>