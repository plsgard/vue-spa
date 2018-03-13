import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hello2'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }
