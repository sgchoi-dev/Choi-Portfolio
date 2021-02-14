<template>
    <div>
        <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo" placeholder="할 일을 입력해 주세요">
        <button v-on:click="addTodo">추가</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: ''
        }
    },
    methods: {
        addTodo(){
            if(this.newTodoItem !== ''){
				var value = this.newTodoItem && this.newTodoItem.trim();
                if(value > 0) {
                    this.$emit('addTodo', value);
                    this.clearInputbox();
                }
            }
        },
        clearInputbox(){
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
	* {box-sizing: border-box;}
	div {padding: 50px 50px 0;}
	input {padding: 10px; width: calc(100% - 110px); height: 50px; border: 1px solid #ccc;}
	button {margin-left: 10px; width: 100px; height: 50px; color: #fff; font-weight: bold; font-size: 15px; border: 0; background-color: #333;}
</style>