<template>
    <center>
        <form @submit="onSubmit">
            <input placeholder="Room name:" v-model="room_name">
            <button type="submit">Go!</button>
        </form>
    </center>
</template>

<script>
export default {
    name: "RoomInput",
    data: function(){
        return{
            room_name: "",
        }
    },
    methods: {
        onSubmit: function(event){
            event.preventDefault();
            console.log("ggg");
            window.location.pathname = window.location.pathname + this.room_name
        }
    }
}
</script>

<style>
center{
    position: relative;
    top: 5%;
}
</style>
