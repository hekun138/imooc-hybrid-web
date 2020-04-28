<template>
  <div class="register-page">
    <navigation-bar :pageName="'注册'" @onLeftClick="onBackClick"></navigation-bar>
    <!-- 内容区 -->
    <div class="register-page-content">
      <div class="input-container">
        <input v-model="username" type="text" placeholder="用户名"/>
      </div>
      <div class="input-container">
        <input v-model="password" type="password" placeholder="密码"/>
      </div>
      <div class="input-container">
        <input v-model="confirmPassword" type="password" placeholder="确认密码"/>
      </div>

      <div class="register-page-content-register page-commit" @click="onRegisterClick">注册</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@c/currency/NavigationBar.vue'

export default {
  name: '',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  },
  components: {
    NavigationBar
  },
  methods: {
    onBackClick: function () {
      this.$router.go(-1)
    },
    onRegisterClick: function () {
      // 验证用户输入的合法性
      if (this.username.length === 0) {
        alert('请完善用户名')
        return
      }
      if (this.password.length === 0 || this.password !== this.confirmPassword) {
        alert('请完善密码')
      }

      // 与原生交互，保存用户输入的用户名和密码
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .register-page{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    &-content{
      width: 100%;
      height: 100%;
      &-register{
        margin-top: 40%;
      }
    }
  }
</style>
