<template>
    <div id='chat-log'>
        <p v-for="message in messages" v-bind:key="message.id">
            {{ message.text }}
        </p>
    </div>
</template>

<script>
export default {
    props: ['messages']
}
</script>
