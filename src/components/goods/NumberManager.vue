<template>
  <div class="number-manager">
    <span class="number-manager-less" :class="{'number-manager-disabled': number === 1}" @click="onLessClick">-</span>
    <span class="number-manager-number">{{number}}</span>
    <span class="number-manager-add" @click="onAddClick">+</span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    /**
     * 父组件指定的默认数量
     */
    defaultNumber: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      // 数量数据源
      number: 1
    }
  },
  watch: {
    /**
     * 监听defaultNumber
     */
    defaultNumber: function (newValue) {
      this.number = newValue
    },
    /**
     * 监听数量的变化，当数量发生变化时，通知父组件
     */
    number: function (newValue) {
      this.$emit('onChangeNumber', newValue)
    }
  },
  methods: {
    /**
     * 减号按钮点击事件
     */
    onLessClick: function () {
      if (this.number === 1) {
        return
      }
      this.number -= 1
    },
    /**
     * 加号按钮点击事件
     */
    onAddClick: function () {
      this.number += 1
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@css/style.scss';
  .number-manager{
    display: flex;
    font-size: $infoSize;
    height: px2rem(20);
    line-height: px2rem(20);
    span{
      width: px2rem(30);
      text-align: center;
      display: inline-block;
      font-weight: 500;
    }
    &-number{
      background-color: $bgColor;
      padding: 0 px2rem(4);
    }
    &-disabled{
      color: $hintColor;
    }
  }
</style>
