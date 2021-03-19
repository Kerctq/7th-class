<template>
    <div>
        <p><input type="text" v-model="message"></p>
        <par-cap v-bind:p-text="message"></par-cap>
    </div>
</template>
<script>
    var ParCap = require("./par-cap.vue")

    module.exports = {
        data: function() {
            return {message: "hello, component"}
        },
        components: {
            parCap: ParCap
        }
    }
</script>