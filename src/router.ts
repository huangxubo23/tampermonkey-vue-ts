import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from './pages/account/login.vue'
import TaskList from './pages/task/list.vue'
import NotFoundPage from './pages/404/index.vue'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/task-list',
    name: 'TaskList',
    component: TaskList,
  },
  {
    path: '/404',
    component: NotFoundPage,
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  routes: constantRoutes
})

const router = createRouter()

export default router