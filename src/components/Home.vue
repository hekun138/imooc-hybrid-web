<template>
  <div class="home">
    <div class="home-content">
      <!-- swiper -->
      <my-swiper :swiperImgs="swiperData.map(item => item.icon)" :height="swiperHeight"></my-swiper>
      <!-- 520活动 -->
      <activity>
        <div class="activity-520">
          <img v-for="(item, index) in activityData" :key="index" :src="item.icon" alt=""/>
        </div>
      </activity>
      <!-- 功能选项 -->
      <mode-options></mode-options>
      <!-- 秒杀模块 -->
      <seconds :dataSource="secondsData"></seconds>
      <!-- 拼购节 -->
      <activity>
        <div class="activity-pin-gou-jie">
          <img src="@img/pinGouJie.gif"/>
        </div>
      </activity>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MySwiper from '@c/swiper/MySwiper.vue'
import Activity from '@c/currency/Activity.vue'
import ModeOptions from '@c/currency/ModeOptions.vue'
import Seconds from '@c/seconds/Seconds.vue'
export default {
  name: '',
  data () {
    return {
      swiperData: [],
      swiperHeight: '184px',
      activityData: [],
      secondsData: []
    }
  },
  components: {
    MySwiper,
    Activity,
    ModeOptions,
    Seconds
  },
  created: function () {
    this.initData()
  },
  methods: {
    // 获取数据
    initData: function () {
      // this.$http = axios
      // this.$http.get('/swiper').then(data => {
      //   this.swiperData = data.list
      // }).catch(err => {
      //   console.log(err)
      // })
      // // 520活动数据
      // this.$http.get('/activitys').then(data => {
      //   this.activityData = data.list
      // }).catch(err => {
      //   console.log(err)
      // })
      // axios 同时发送多个请求（并行）
      this.$http.all([
        this.$http.get('/swiper'),
        this.$http.get('/activitys'),
        this.$http.get('/seconds')
      ]).then(this.$http.spread((swiperData, activityData, secondsData) => {
        this.swiperData = swiperData.list
        this.activityData = activityData.list
        this.secondsData = secondsData.list
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@css/style.scss';
.home{
  width: 100%;
  height: 100%;
  background-color: $bgColor;
  overflow: hidden;
  overflow-y: auto;
  &-content{
    height: 100%;
    .activity-520{
      margin-top: px2rem(-8);
      border-top-left-radius: px2rem(8);
      border-top-right-radius: px2rem(8);
      img{
        display: inline-block;
        width: 33.33%;
      }
    }
    .activity-pin-gou-jie{
      background-color: #fff;
      margin-top: $marginSize;
      img{
        width: 100%;
      }
    }
  }
}
</style>
