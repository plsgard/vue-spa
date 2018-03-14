import Vue from 'vue'
import AppLayout from './theme/Layout.vue'
import router from './router'

const app = new Vue({
  ...AppLayout,
  router: router
})

export { app, router }
