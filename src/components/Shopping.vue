<template>
  <!--
    业务逻辑：
    1、在商品详情中点击加入购物车，系统会通过 alert 弹出“添加成功”的提示，然后页面会跳转到购物车页面
    2、跳转到购物车页面之后，购物车会展示我们添加的商品。此时在默认状态下，商品处于未选中状态，商品数量为1
    3、可以在购物车中，通过+、-按钮来增加或减少商品的购买数量，当商品数量为1的时候，不可减少
    4、加入购物车时，如果该商品已经存在于购物车中，那么购物车中的该商品数量自动+1
    5、购物车中会展示已选的商品总价格和已选商品的总数量，当选中商品或选中商品的数量发生变化时，展示的总价格和总数量也会发生对应的变化
  -->
  <!--
    从商品详情中进入购物车页面
    1、首先进入到 main.vue
    2、通过 main.vue 跳转到购物车（可以通过传递自定义标记的方式）
  -->
  <div class="shopping">
    <navigation-bar :pageName="'购物车'" :isShowBack="false"></navigation-bar>
    <h1>Shopping</h1>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@c/currency/NavigationBar.vue'
export default {
  name: '',
  data () {
    return {}
  },
  components: {
    NavigationBar
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.shopping{
  width: 100%;
  height: 100%;
}
</style>
