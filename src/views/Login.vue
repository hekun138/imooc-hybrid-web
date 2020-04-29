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
import md5 from '@js/md5.min.js'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      md5Password: ''
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

      // 对用户输入的密码进行 MD5 加密
      this.md5Password = md5(this.password)

      // 判断当前的项目是运行在 Android 设备还是 IOS 设备中
      if (window.androidJSBridge) {
        // window 下存在android注入的对象（androidJSBridge），则表示当前项目是android项目
        this.onLoginToAndroid()
      } else if (window.webkit) {
        // window 下存在 webkit，表示当前项目在 IOS 设备中运行
        this.onLoginToIOS()
      }
    },
    /**
     * 调用 android 登录验证
     */
    onLoginToAndroid: function () {
      // 创建 json 字符串
      const userJson = JSON.stringify({
        username: this.username,
        password: this.md5Password
      })

      // 调用 android 登录接口
      const result = window.androidJSBridge.login(userJson)

      // 对 android 的返回值进行处理
      this.onLoginCallback(result)
    },
    /**
     * 调用 ios 登录验证
     */
    onLoginToIOS: function () {
      // ios 可以直接接收对象类型参数
      const userObj = {
        username: this.username,
        password: this.md5Password
      }
      // ios 不能直接返回返回值，所以 ios 操作完成之后会回调对应的回调方法
      // 同时原生调用 js 的方法只能是调用绑定到 window 对象下的方法
      window.loginCallback = this.onLoginCallback

      // 调用 ios 注册方法
      window.webkit.messageHandlers.login.postMessage(userObj)
    },
    /**
     * 处理登录接口返回值
     */
    onLoginCallback: function (result) {
      switch (result) {
        case '-1':
          alert('系统内部错误')
          break
        case '0':
          this.$store.commit('setUsername', this.username)
          this.onBackClick()
          break
        case '1':
          alert('登录用户不存在')
          break
        case '2':
          alert('用户密码错误')
          break
      }
    },
    /**
     * 立即注册点击事件
     */
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
