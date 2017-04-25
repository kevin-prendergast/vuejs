var Vue = require('vue')

var todoList = require('./todo-list.vue')
new Vue({
  el: '#todos-demo',
  components: {
    'todos-list': todoList
  }
})

new Vue({
  el: '#filtering-demo',
  data: {
    columns: ['name', 'age'],
    searchText: '',
    sortKey: '',
    reversedSort: false,
    people: [
      { name: 'john', age: 21 },
      { name: 'jim', age: 10 },
      { name: 'paul', age: 100 },
      { name: 'mary', age: 50 },
      { name: 'ira', age: 52 },
      { name: 'caleb', age: 78 },
      { name: 'kate', age: 30 },
      { name: 'kat', age: 39 },
      { name: 'adam', age: 39 }
    ]
  },
  methods: {
    sortBy: function sortBy(key) {
      if (this.sortKey === key) {
        this.reversedSort = this.reversedSort * -1;
      } else {
        this.sortKey = key;
        this.reversedSort = 1;
      }
    }
  }
})