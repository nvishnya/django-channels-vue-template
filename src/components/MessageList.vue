<template>
  <div id="chat-log">
    <p v-if="messages.length === 0">No messages here yet :(</p>
    <div v-else class="message" v-for="message in messages" v-bind:key="message.id">
      <div class="date">
        {{ dayjs(message.datetime).fromNow()
        }}
      </div>
      <div class="text">{{ message.text }}</div>
      <!-- <div class="delete">
        <button>Delete</button>
      </div>-->
    </div>
    <!-- <p v-for="message in messages" v-bind:key="message.id">{{ message.text }}</p> -->
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default {
  beforeCreate() {
    dayjs.extend(relativeTime);
    this.dayjs = dayjs;
  },
  props: ["messages"],
};
</script>

<style>
.message {
  display: flex;
  border-bottom: 1px solid gainsboro;
  margin: 0 auto;
  max-width: 50rem;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
}
/* .date{
  border-right: 1px solid gainsboro;;
} */
.date {
  flex: 25%;
  text-align: left;
}
.delete {
  text-align: right;
}
.text {
  flex: 50%;
  text-align: left;
}
</style>