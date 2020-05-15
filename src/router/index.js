import Vue from 'vue'
import VueRouter from 'vue-router'
import Launcher from '../views/Launcher.vue'
import Game from '../views/Game.vue'
import Leaderboard from '../views/Leaderboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Launcher',
    component: Launcher
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard,
  },
]

const router = new VueRouter({
  routes
})

export default router