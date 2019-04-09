<template>
    <b-container>
        <b-row class="mt-4">
            <b-col cols="4" offset="4">
                <b-form inline @submit="onSubmit">
                    <b-input class="mb-2 mr-sm-2 mb-sm-0"
                            placeholder="Room name:"
                            v-model="room_name">
                    </b-input>
                    <b-button variant="primary" type="submit">Go!</b-button>
                </b-form>
            </b-col>
        </b-row>
    </b-container>
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
