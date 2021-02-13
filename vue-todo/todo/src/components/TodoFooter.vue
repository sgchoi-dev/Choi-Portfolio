<template>
    <div>
        <button type="button" v-on:click="clearTodo">전체삭제</button>
    </div>
</template>

<script>
export default {
    methods: {
        clearTodo(){
            this.$emit('removeAll');
        }
    }
}
</script>

<style scoped>
    div {padding: 0 50px;}
    button {width: 100%; height: 50px; color: #fff; background-color: violet; border: 0; transition: all 0.2s ease;}
    button:hover {background-color: blueviolet;}
</style>