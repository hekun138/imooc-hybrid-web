<template>
  <!-- 缺货的标签 -->
  <span class="goods-item-name-no-have">缺货</span>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-item-name-no-have{
    padding: 0 px2rem(4);
    font-size: $minInfoSize;
    color: #fff;
    background-color: #999999;
    border-radius: px2rem(2);
    margin-right: px2rem(2);
  }
</style>
