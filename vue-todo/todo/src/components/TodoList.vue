<template>
    <section>
        <div class="todoNumber">현재 할 일 갯수는 <span>{{ propsdata.length }}</span>개 입니다</div>
        <ul>
            <li v-for="(todoItem, index) in propsdata" :key="todoItem">
                <span class="listCount"> {{ index + 1 }}. </span>{{ todoItem }} 
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
    section {padding: 30px 3% 0;}
    ul {padding: 0;}
    ul li {position: relative; padding: 10px 100px 10px 10px; list-style: none; border-bottom: 1px solid #eee}
    ul li button {position: absolute; right: 0; top: 50%; transform: translateY(-50%);}

    .todoNumber {margin-bottom: 10px;}
    .todoNumber span {display: inline-block; margin-right: 4px; color: brown; font-weight: bold;}
    .listCount {display: inline-block; width: 20px; font-weight: bold; color: brown;}
</style>