<template>
  <div class="search" :style="{backgroundColor: bgColor}">
    <img class="search-icon" :src="icon" alt=""/>
    <span class="search-hint" :style="{color: hintColor}">大前端开发，混合京东商城系统</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    // 图标
    icon: {
      default: require('@img/search.svg'),
      type: String
    },
    // 字体颜色
    hintColor: {
      default: '#999',
      type: String
    },
    // 背景颜色
    bgColor: {
      default: '#fff',
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .search{
    background-color: #fff;
    width: 100%;
    margin: px2rem(6);
    border-radius: px2rem(22);
    display: flex;
    align-items: center;
    &-icon {
      margin-left: $marginSize;
      width: px2rem(16);
    }
    &-hint {
      margin: $marginSize;
      font-size: $minInfoSize;
      color: $hintColor;
    }
  }
</style>
