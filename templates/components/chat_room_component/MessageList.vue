<template>
    <b-col cols="12">
        <p v-for="message in messages" v-bind:key="message.id">
            {{ message.text }}
        </p>
    </b-col>
</template>

<script>
export default {
    props: ['messages']
}
</script>
