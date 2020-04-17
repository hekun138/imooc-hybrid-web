<template>
  <!-- 1、需要一个swiper
  2、swiper 里面的滑动模块 - swiperSlide
  3、分页器配置，插槽（slot） 配置分页器 -->
  <swiper :options="swiperOptions">
    <swiper-slide v-for="(item, index) in swiperImgs" :key="index">
      <img class="swiper-slide-img" :style="{height: height}" :src="item" alt=""/>
    </swiper-slide>
    <template v-slot:pagination>
      <div class="swiper-pagination"></div>
    </template>
  </swiper>
</template>

<script type="text/ecmascript-6">
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'carrousel',
  props: {
    // slide 高度
    height: {
      type: String,
      default: 'auto'
    },
    swiperImgs: {
      type: Array,
      required: true,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      // swiper 配置
      swiperOptions: {
        // 自动滚动
        autoplay: true,
        // swiper 高度随 slide 高度变化
        autoHeight: true,
        // 分页器设置效果
        pagination: {
          // 分页器对应的 html 元素
          el: '.swiper-pagination',
          // 分页器样式
          type: 'bullets',
          // 分页器内的元素，添加类名
          bulletClass: 'custom-bullet-class'
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {}
}
</script>

<style lang="scss">
@import '@css/style.scss';
.swiper-pagination{
  bottom: px2rem(12);
  .custom-bullet-class{
    box-sizing:border-box;
    border-radius: 100%;
    width: px2rem(6);
    height: px2rem(6);
    border: px2rem(1) solid #fff;
    margin: 0 px2rem(4);
    display: inline-block;
    opacity: 1;
  }
  .swiper-pagination-bullet-active{
    background: #fff;
  }
}

</style>
