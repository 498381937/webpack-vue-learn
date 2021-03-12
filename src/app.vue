<template>
    <div class="container">
        <p class="text">{{text}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            text:'哈哈哈哈'
        }
    }
}
</script>
<style lang="scss">
.container{
    margin: 0 auto;
    background: #000;
    .text{
        font-size: 30px;
        text-align: center;
        color: red;
    }
}

</style>