<template>
  <div class="goods-detail">
    <navigation-bar :isShowBack="false" :navBarStyle="navBarStyle">
      <template v-slot:nav-left>
        <div class="goods-detail-nav-left" @click="onBackClick">
          <img src="@img/back-2.svg" alt=""/>
        </div>
      </template>
    </navigation-bar>
    <div class="goods-detail-content">
      <my-swiper
        :swiperImgs="goodsData.swiperImgs"
        :height="SWIPER_IMAGE_HEIGHT"
        :paginationType="'2'"
      ></my-swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@c/currency/NavigationBar.vue'
import MySwiper from '@c/swiper/MySwiper.vue'

export default {
  data () {
    return {
      navBarStyle: {
        backgroundColor: '',
        position: 'fixed'
      },
      SWIPER_IMAGE_HEIGHT: '364px',
      goodsData: {}
    }
  },
  components: {
    NavigationBar,
    MySwiper
  },
  methods: {
    /**
     * 后退当前页面
     */
    onBackClick: function () {
      this.$router.go(-1)
    }
  },
  created: function () {
    const { history: { current: { params: data } } } = this.$router
    this.goodsData = data.goods
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods-detail{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    &-nav-left{
      width: 100%;
      display: flex;
      img{
        align-self: center;
      }
    }
    &-content{
      overflow: hidden;
      overflow-y: auto;
      height: 100%;
    }
  }
</style>
