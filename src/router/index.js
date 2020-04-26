import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/goodsList',
    name: 'GoodsList',
    // vue-router 懒加载 -> GoodsList
    component: () => import(/* webpackChunkName: "goodsList" */ '../views/GoodsList.vue')
  },
  {
    path: '/goodsDetail',
    name: 'GoodsDetail',
    component: () => import(/* webpackChunkName: "goodsDetail" */ '../views/GoodsDetail.vue')
  },
  {
    path: '/buy',
    name: 'Buy',
    component: () => import(/* webpackChunkName: "buy" */ '../views/Buy.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
