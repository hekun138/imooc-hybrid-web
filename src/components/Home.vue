<template>
  <div class="home">
    <div class="home-content">
      <my-swiper :swiperImgs="swiperImgs" :height="swiperHeight"></my-swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MySwiper from '@c/swiper/MySwiper.vue'
export default {
  name: '',
  data () {
    return {
      swiperImgs: [
        require('@img/swiper-1.jpg'),
        require('@img/swiper-2.jpg'),
        require('@img/swiper-3.jpg'),
        require('@img/swiper-4.jpg'),
        require('@img/swiper-5.jpg'),
        require('@img/swiper-6.jpg'),
        require('@img/swiper-7.jpg'),
        require('@img/swiper-8.jpg')
      ],
      swiperHeight: '184px'
    }
  },
  components: {
    MySwiper
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  &-content{
    height: 100%;
  }
}
</style>
