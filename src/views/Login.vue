<template>
  <div class="login-page">
    <navigation-bar :pageName="'登录'" @onLeftClick="onBackClick"></navigation-bar>
    <!-- 内容区 -->
    <div class="login-page-content">
      <div class="input-container">
        <input v-model="username" type="text" placeholder="用户名"/>
      </div>
      <div class="input-container">
        <input v-model="password" type="password" placeholder="密码"/>
      </div>
      <div class="login-page-content-login page-commit" @click="onLoginClick">登录</div>
      <a class="login-page-content-register" @click="onToRegisterClick">注册新用户</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@c/currency/NavigationBar.vue'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {
    NavigationBar
  },
  methods: {
    onBackClick: function () {
      this.$router.go(-1)
    },
    onLoginClick: function () {
      // 验证
      if (this.username.length === 0 || this.password.length === 0) {
        alert('用户名或密码未输入')
      }

      // 与原生交互，验证用户输入的用户名或密码
    },
    onToRegisterClick: function () {
      this.$router.push({
        name: 'Register',
        params: {
          routerType: 'push'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .login-page{
    // 页面组件过渡动画，脱离标准文档流
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    &-content{
      width: 100%;
      height: 100%;
      &-login{
        margin-top: 40%;
      }
      &-register{
        font-size: $infoSize;
        color: $hintColor;
        margin-top: $marginSize;
        padding: $marginSize;
        float: right;
      }
    }
  }
</style>
