<template>
  <!-- 直营的标签 -->
  <span class="goods-item-name-direct">直营</span>
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
  .goods-item-name-direct{
    padding: 0 px2rem(4);
    font-size: $minInfoSize;
    color: #fff;
    background-color: $mainColor;
    border-radius: px2rem(2);
    margin-right: px2rem(2);
  }
</style>
