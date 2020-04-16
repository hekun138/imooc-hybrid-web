<template>
  <!-- 在 vue 这种单页面的应用程序中，
  它只存在一个页面 - App.vue，其他的都是组件 -->
  <div class="main">
    <!-- 动态组件 -->
    <component :is="currentComponent"></component>
    <tool-bar @onChangeFragment="onChangeFragment"></tool-bar>
  </div>
</template>

<script>
import toolBar from '@c/currency/ToolBar.vue'
export default {
  name: '',
  data () {
    return {
      currentComponent: 'home'
    }
  },
  components: {
    'tool-bar': toolBar,
    // 异步组件引入方式，异步组件：只有在需要去展示这个组件的时候，才会把组件去进行渲染
    home: () => import('@c/Home'),
    shopping: () => import('@c/Shopping'),
    my: () => import('@c/My')
  },
  methods: {
    // 组件切换
    onChangeFragment: function (componentName) {
      this.currentComponent = componentName
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
