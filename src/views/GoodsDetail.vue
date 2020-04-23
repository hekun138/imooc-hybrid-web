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
      <!-- 内容 -->
      <div class="goods-detail-content-desc">
        <div class="goods-detail-content-desc-item">
          <!-- 商品价格 -->
          <p class="goods-detail-content-desc-item-price">￥{{goodsData.price | priceValue}}</p>
          <!-- 商品名称 -->
          <p class="goods-detail-content-desc-item-name">
            <!-- 直营 -->
            <direct v-if="goodsData.isDirect"></direct>
            {{goodsData.name}}
          </p>
        </div>
        <div class="goods-detail-content-desc-item">
          <!-- 已选商品 -->
          <p class="goods-detail-content-desc-item-select">
            <span>已选</span>
            <span class="text single-row-text">{{goodsData.name}}</span>
          </p>
          <!-- 附加服务 -->
          <div class="goods-detail-content-desc-item-support">
            <ul class="goods-detail-content-desc-item-support-list">
              <li v-for="(item, index) in attachDatas" :key="index" class="goods-detail-content-desc-item-support-list-item">
                <img src="@img/support.svg" alt=""/>
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <!-- 商品描述 -->
          <div class="goods-detail-content-desc-detail">
            <img v-for="(item, index) in goodsData.detailImgs" :src="item" :key="index" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 加入购物车，立即购买 -->
    <div class="goods-detail-buy">
      <div class="goods-detail-buy-add">加入购物车</div>
      <div class="goods-detail-buy-now">立即购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import NavigationBar from '@c/currency/NavigationBar.vue'
import MySwiper from '@c/swiper/MySwiper.vue'
import Direct from '@c/goods/Direct.vue'

export default {
  data () {
    return {
      navBarStyle: {
        backgroundColor: '',
        position: 'fixed'
      },
      SWIPER_IMAGE_HEIGHT: '364px',
      goodsData: {},
      // 附加服务
      attachDatas: [
        '可配送海外',
        '京东发货&售后',
        '京准达',
        '211限时送',
        '可自提',
        '不可使用优惠券'
      ]
    }
  },
  components: {
    NavigationBar,
    MySwiper,
    Direct
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
      &-desc{
        width: 100%;
        background-color: $bgColor;
        box-shadow: 0 0 px2rem(16) 0 rgba($color: #000000, $alpha: 0.2);
        &-item{
          background-color: #fff;
          padding: $marginSize;
          margin-bottom: $marginSize;
          &-price{
            font-size: px2rem(20);
            color: $mainColor;
            font-weight: 500;
          }
          &-name{
            margin-top: $marginSize;
            font-size: $titleSize;
            font-weight: 500;
            line-height: px2rem(20);
          }
          &-select{
            font-size: $infoSize;
            color: $hintColor;
            height: px2rem(14);
            display: flex;
            align-items: center;
            padding-bottom: px2rem(5);
            border-bottom: px2rem(1) solid $lineColor;
            span:nth-of-type(1){
              display: inline-block;
              width: px2rem(56);
            }
            .text{
              color: $textColor;
              font-size: $titleSize;
              font-weight: bold;
            }
          }
          &-support{
            margin-top: $marginSize;
            &-list{
              display: flex;
              flex-wrap: wrap;
              &-item{
                display: flex;
                align-items: center;
                padding: px2rem(6) 0;
                margin-right: $marginSize;
                img{
                  width: px2rem(12);
                  margin-right: px2rem(4);
                }
                span{
                  font-size: $minInfoSize;
                  color: $hintColor;
                }
              }
            }
          }
        }
        &-detail{
          img{
            width: 100%;
          }
        }
      }
    }
    &-buy{
      background-color: #fff;
      border-top: px2rem(1) solid $lineColor;
      height: px2rem(46);
      line-height: px2rem(46);
      text-align: right;
      div{
        display: inline-block;
        width: px2rem(100);
        text-align: center;
        font-size: $infoSize;
        color: #fff;
      }
      &-add{
        background-color: $mainColor;
      }
      &-now{
        background-color: darkgoldenrod;
      }
    }
  }
</style>
