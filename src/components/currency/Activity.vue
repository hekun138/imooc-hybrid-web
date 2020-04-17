<template>
  <div class="activity">
    <!-- 插槽，展示活动内容 -->
    <slot></slot>
  </div>
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
  .activity{
    max-height: px2rem(157);
    position: relative;
    z-index: 2;
  }
</style>
