<template>
    <section>
        <ul>
            <li v-for="(todoItem, index) in propsdata" :key="todoItem">
                {{ todoItem }}
                <button type="button" v-on:click="removeTodo(todoItem, index)">삭제</button>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo(todoItem, index){
            this.$emit('removeTodo', todoItem, index);
        }
    }
}
</script>

<style scoped>
    section {padding: 30px 50px 0;}
    ul {padding: 0;}
    ul li {position: relative; padding: 10px 100px 10px 10px; list-style: none; border-bottom: 1px solid #eee}
    ul li button {position: absolute; right: 0; top: 50%; transform: translateY(-50%);}
</style>