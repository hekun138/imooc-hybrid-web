<template>
  <div class="goods-list-page">
    <navigation-bar @onLeftClick="onBackClick" :pageName="'商品列表'"></navigation-bar>
    <div class="goods-list-page-content">
      <goods-options></goods-options>
      <goods></goods>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@c/currency/NavigationBar.vue'
import GoodsOptions from '@c/goods/GoodsOptions.vue'
import Goods from '@c/goods/Goods.vue'

export default {
  name: '',
  data () {
    return {}
  },
  components: {
    NavigationBar,
    GoodsOptions,
    Goods
  },
  methods: {
    /**
     * 后退按钮点击事件
     */
    onBackClick: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-list-page{
    height: 100%;
    width: 100%;
    background-color: $bgColor;
    display: flex;
    flex-direction: column;
    &-content{
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }
</style>
