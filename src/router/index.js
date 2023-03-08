import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import timer from '../views/timer.vue'
import daily from '../views/daily.vue'
import tasks from '../views/tasks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/timer',
    name: 'timer',
    component: timer
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: tasks
  },
  {
    path: '/daily',
    name: 'daily',
    component: daily
  }
]

const router = new VueRouter({
  routes
})

export default router
