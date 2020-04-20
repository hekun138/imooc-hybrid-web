<template>
  <!--
    如何在同一个组件中去展示不同的样式
    1、html 表示整个布局的结构，具体的展示样式，将由css决定
    2、每种展示样式对应不同的css，对应不同的类名
      1、垂直列表 -> goods-list
      2、网格布局 —> goods-grid
      3、瀑布流布局 -> goods-waterfall
    3、实现不同的展示形式，本质上就是实现不同的 css 样式

    瀑布流的布局：
    1、创建商品列表的基本html和css，让 item 相对于 goods（div）进行排列
    2、生成不同高度的图片，撑起不同高度的item
    3、计算 item 的位置，来达到从上到下，从左到右依次排列的目的
  -->
  <div class="goods" :class="layoutClass" :style="{height: goodsViewHeight}">
    <div class="goods-item" :class="layoutItemCalss" ref="goodsItem" v-for="(item, index) in dataSource" :key="index" :style="goodsItemStyles[index]">
      <!-- 图片 -->
      <img class="goods-item-img" :src="item.img" alt="" :style="imgStyles[index]"/>
      <!-- desc 描述 -->
      <div class="goods-item-desc">
        <p class="goods-item-desc-name text-line-2" :class="{'goods-item-desc-name-hint' : !item.isHave}">
          <!-- 是否为直营 -->
          <direct v-if="item.isDirect"></direct>
          <!-- 是否有库存 -->
          <no-have v-if="!item.isHave"></no-have>
          {{item.name}}
        </p>
        <div class="goods-item-desc-data">
          <p class="goods-item-desc-data-price">{{item.price | priceValue}}</p>
          <p class="goods-item-desc-data-volume">销量：{{item.volume}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Direct from '@c/goods/Direct.vue'
import NoHave from '@c/goods/NoHave.vue'
export default {
  props: {
    /**
     * 在父元素中指定的展示形式
     * 1: 垂直列表
     * 2: 网格布局
     * 3: 瀑布流布局
     */
    layoutType: {
      type: String,
      default: '1'
    }
  },
  data () {
    return {
      // 数据源
      dataSource: [],
      // 最大高度
      MAX_IMG_HEIGHT: 230,
      // 最小高度
      MIN_IMG_HEIGHT: 178,
      // 图片样式集合
      imgStyles: [],
      // item margin
      ITEM_MARGIN_SIZE: 8,
      // item 样式集合
      goodsItemStyles: [],
      // goods组件的高度
      goodsViewHeight: '100%',
      // 不同展示形式下的类名
      layoutClass: 'goods-list',
      layoutItemCalss: 'goods-list-item'
    }
  },
  components: {
    Direct,
    NoHave
  },
  created: function () {
    this.initData()
  },
  methods: {
    /**
     * 获取数据
     */
    initData: function () {
      this.$http.get('/goods').then(data => {
        this.dataSource = data.list
        // this.initImgStyles()
        // // 调用创建瀑布流的方法（等到 dom 创建完成之后）
        // this.$nextTick(() => {
        //   this.initWaterfall()
        // })
      })
    },
    /**
     * 返回随机的图片高度
     */
    imgHeight: function () {
      // Math.random() -> 0 - 1 随机数 * (高度区间) + 最低的图片高度
      const result = Math.floor(Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) + this.MIN_IMG_HEIGHT)
      return result
    },
    /**
     * 根据随机生成的图片高度，生成对应的图片样式数据
     */
    initImgStyles: function () {
      this.dataSource.forEach(item => {
        // 随机生成的图片高度
        const imgHeight = this.imgHeight() + 'px'
        // push 图片高度，到 img 样式集合
        this.imgStyles.push({
          height: imgHeight
        })
      })
    },
    /**
     * 瀑布流布局
     * 1、获取到所有的 item 元素
     * 2、遍历 item 元素，得到每一个 item 的高度，加上一个 margin 的高度
     * 3、创建两个变量：leftHeightTotal，rightHeightTotal 分别表示左右两侧目前距离顶部的高度
     *  通过对于左右两侧距离顶部的高度，来确定 item 的放置位置
     *  如果左侧小于等于右侧高度的话，(leftHeightTotal <= rightHeightTotal)，那么 item 就应该放置到左侧。此时 item 距离左侧为0，距离顶部为当前的leftHeightTotal
     *  否则，item 放置到右侧，此时 item 距离右侧为 0，距离顶部为当前的 rightHeightTotal
     * 4、保存计算出的 item 的所有样式，配置到 item 上
     * 5、item 配置完成之后，对比左右两侧最大的高度，最大的高度为 goods 组件的高度
     */
    initWaterfall: function () {
      // 1、获取到所有的 item 元素
      const $goodsItems = this.$refs.goodsItem
      if (!$goodsItems) return
      // 左右两侧距离顶部的高度
      let leftHeightTotal = 0; let rightHeightTotal = 0
      $goodsItems.forEach(($el, index) => {
        // item 样式
        let goodsItemStyle = {}
        // 2、遍历 item 元素，得到每一个 item 的高度，加上一个 margin 的高度
        const elHeight = $el.clientHeight + this.ITEM_MARGIN_SIZE
        // 对比 左右两侧距离顶部的高度
        if (leftHeightTotal <= rightHeightTotal) {
          // item 就应该放置到左侧。此时 item 距离左侧为0，距离顶部为当前的leftHeightTotal
          goodsItemStyle = {
            left: '0px',
            top: leftHeightTotal + 'px'
          }
          // 3、更新左侧距离顶部的高度
          leftHeightTotal += elHeight
        } else {
          // item 距离右侧为0，距离顶部为当前的 rightHeightTotal
          goodsItemStyle = {
            right: '0px',
            top: rightHeightTotal + 'px'
          }
          // 3、更新左侧距离顶部的高度
          rightHeightTotal += elHeight
        }
        // 4、保存计算出的 item 的所有样式，配置到 item 上
        this.goodsItemStyles.push(goodsItemStyle)
      })
      // 5、item 配置完成之后，对比左右两侧最大的高度，最大的高度为 goods 组件的高度
      this.goodsViewHeight = (leftHeightTotal > rightHeightTotal ? leftHeightTotal : rightHeightTotal) + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .goods{
    background-color: $bgColor;
    overflow: hidden;
    overflow-y: auto;
    &-item{
      background-color: #fff;
      padding: $marginSize;
      box-sizing: border-box;
      &-desc{
        width: 100%;
        &-name{
          font-size: $infoSize;
          line-height: px2rem(18);
          &-hint{
            color: $hintColor;
          }
        }
        &-data{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: $marginSize;
          &-price{
            font-size: $titleSize;
            color: $mainColor;
            font-weight: 500;
          }
          &-volume{
            font-size: $infoSize;
            color: $hintColor;
          }
        }
      }
    }
  }
  // 垂直列表
  .goods-list{
    &-item{
      display: flex;
      border-bottom: 1px solid $lineColor;
      .goods-item-img{
        width: px2rem(120);
        height: px2rem(120);
      }
      .goods-item-desc{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: $marginSize;
      }
    }
  }

  // 瀑布流
  .goods-waterfall{
    position: relative;
    margin: $marginSize;
    &-item{
      position: absolute;
      width: 49%;
      border-radius: $radiusSize;
      .goods-item-img{
        width: 100%;
      }
    }
  }
</style>
