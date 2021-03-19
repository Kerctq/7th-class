<style scoped>
    div {
        display: inline-block;
        background: hotpink;
    }
</style>

<template>
    <div>
        <p>{{pText.toUpperCase()}}</p>
    </div>
</template>

<script>
    module.exports = {props: ["pText"]}
</script>