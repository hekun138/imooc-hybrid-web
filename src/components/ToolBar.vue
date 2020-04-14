<template>
  <div class="tool-bar">
    <!-- tab按钮 -->
    <div class="tool-bar-item"
         v-for="(item, index) in toolBarData"
         :key="index">
      <img class="tool-bar-item-img"
           :src="[index === selectItemIndex ? item.hIcon : item.nIcon]"
           alt="" />
      <p class="tool-bar-item-name"
         :class="{'tool-bar-item-name-h': index === selectItemIndex}">{{item.name}}</p>
      <div>
      </div>
</template>

<script type="text/ecmascript-6">
/**
 * ToolBar 的功能：
 * 1.永远位于页面的最底部
 * 2.点击toolbar按钮的时候，页面发生对应的切换
 * 3.按钮分为默认和选中两个状态
 * ------------------------
 * 功能和约束
 * 1、不具备的能力（约束）
 * 2、通过一个回调，告诉父组件，按钮的点击事件
 * 3、当按钮被选中的时候，应该切换按钮的状态
 */
export default {
  name: '',
  data() {
    return {
      // tab 按钮数据源
      toolBarData: [
        {
          // 默认状态下的图片
          nIcon: require('@imgs/home-n.svg'),
          // 高亮状态下的图片
          hIcon: require('@imgs/home-h/svg'),
          // 名称
          name: '首页',
          // 组件名称
          componentName: 'home'
        },
        {
          // 默认状态下的图片
          nIcon: require('@imgs/shopping-n.svg'),
          // 高亮状态下的图片
          hIcon: require('@imgs/shopping-h/svg'),
          // 名称
          name: '购物车',
          // 组件名称
          componentName: 'shopping'
        },
        {
          // 默认状态下的图片
          nIcon: require('@imgs/my-n.svg'),
          // 高亮状态下的图片
          hIcon: require('@imgs/my-h/svg'),
          // 名称
          name: '我的',
          // 组件名称
          componentName: 'my'
        }
      ],
      // 选中的 tab 按钮
      selectItemIndex: 0
    }
  },
  components: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
