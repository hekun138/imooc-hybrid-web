<template>
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
