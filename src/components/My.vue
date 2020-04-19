<template>
  <div class="my">
    <navigation-bar :pageName="'个人中心'" :isShowBack="false"></navigation-bar>
    <h1>My</h1>
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
.my{
  width: 100%;
  height: 100%;
}
</style>
