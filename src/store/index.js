import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * vuex 作用：
 * 1、vuxe 就是在 vue 中创建全局变量的一个东西
 * 2、并且我们可以通过一些方法，来改变这些全局变量的值
 */

/**
 * Store:
 *  就是 new Vuex.Store({}) 里面的对象，用到的 vuex 所有的核心概念
 *  在 vue 的组件中，我们可以直接通过 this.$store = Store对象
 * State:
 *  vuex 中的数据源，所有通过 vuex 声明的全局变量都会在 state 里面 this.$store.state = "state: {}"
 *
 * getter:
 *  相当于 vue 中的计算属性，可以用于监听、计算 state 中数据的变化
 *
 * mutations:
 *  vuex 去操作数据的方法 (vuex 中，不推荐直接去为 state 赋值。this.$store.state.xx = 'xxx')
 *  推荐我们使用 mutation 去修改 state 的值。因为这样它会是一个有迹可循的操作方式（只能是同步执行的）
 *
 * actions:
 *  帮助 mutations 进行异步操作
 *
 * module:
 *  将 store 分为了多个模块，每个模块都是一个 module
 */
export default new Vuex.Store({
  state: {
    // 购物车数据源
    shoppingDatas: [],
    // 当前的设备是否为 Iphonex
    isIphoneX: false
  },
  mutations: {
    /**
     * 添加商品到购物车数据源
     */
    addShoppingData: function (state, goods) {
      // 判断购物车中是否已经包含该商品，如果购物车已经包含了该商品，那么让商品的数量 + 1
      const isExist = state.shoppingDatas.some(item => {
        // 该商品已经存在于购物车中
        if (item.id === goods.id) {
          item.number += 1
          return true
        }
      })
      // 只有当购物车中不包含该商品的时候，才让 商品 push 到 shoppingDatas中
      if (!isExist) {
        // 为商品新增属性
        // isCheck: 表示商品是否选中
        // number: 表示商品的数量
        // 通过 Vue.set 的方法可以把新添加的属性变为响应式的数据
        // 如果直接通过 goods.isCheck = false 那么 isCheck 就不是响应式的数据
        Vue.set(goods, 'isCheck', false)
        Vue.set(goods, 'number', 1)
        state.shoppingDatas.push(goods)
      }
    },
    /**
     * 更改指定的商品数量
     */
    changeShoppingDataNumber: function (state, data) {
      /**
       * data: {
       *  index: 指定的商品,
       *  number: 商品数量
       * }
       */
      state.shoppingDatas[data.index].number = data.number
    },
    /**
     * 修改 isIphoneX
     */
    setIsIphoneX: function (state, isIphoneX) {
      console.log(isIphoneX)
      state.isIphoneX = isIphoneX
    }
  },
  actions: {
  },
  modules: {
  }
})
