<template>
  <!--
    视差效果：让多层背景以不同的速度去进行移动
    1、至少需要拥有两层背景（缓慢移动区、正常移动区）
    2、将背景设置为相对布局（为缓慢缓慢移动区设置 top 来缓冲掉 scroll 滚动）
    3、监听 Parallax 组件的滑动，根据滑动来计算 缓慢移动区 top 的值
  -->
  <div class="parallax" @scroll="onScrollChange">
    <!-- 缓慢移动区 -->
    <div class="parallax-slow" :style="{top: slowTop}">
      <slot name="parallax-slow"></slot>
    </div>
    <!-- 正常移动区 -->
    <div class="parallax-content z-index-2">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: '',
  data () {
    return {
      // 速度差 （正常移动区移动100px，缓慢移动区 100 / 2 = 50px）
      SPEED_DIFF: 2,
      // 页面滑动值
      parallaxScroll: 0
    }
  },
  components: {},
  methods: {
    /**
     * 监听组件滑动
     */
    onScrollChange: function ($event) {
      this.parallaxScroll = $event.target.scrollTop
      this.$emit('onScrollChange', this.parallaxScroll)
    }
  },
  computed: {
    /**
     * 返回 slow 距离顶部的距离
     */
    slowTop: function () {
      // 当前页面的滑动距离 / 速度差 = 缓慢移动区应该滑动的距离
      // 当前页面的滑动距离 - 缓慢移动区应该滑动的距离 = 缓慢移动区用来缓冲掉 scroll 的值
      return (this.parallaxScroll - (this.parallaxScroll / this.SPEED_DIFF)) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .parallax{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
    &-slow{
      width: 100%;
      position: relative;
    }
    &-content{
      width: 100%;
      position: relative;
    }
  }
</style>
