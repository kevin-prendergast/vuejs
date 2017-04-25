<style scoped>
ul {
  list-style-type: none;
}
</style>

<template>
  <div>
    <strong>Enter a todo:</strong>
    <input v-model="newTodo" @keyup.enter="addTodo">
      <div class="wrap-list">
    	   <ol class="list">
          <li v-for="todo in todos">
            <span>{{ todo.text }}</span>
            <button @click="removeTodo($index)">X</button>
          </li>
        </ol>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      todos: [
        { text: 'Add some todos' }
      ]
    }
  },

  methods: {
    addTodo: function () {
      var text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text: text })
        this.newTodo = ''
      }
    },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>