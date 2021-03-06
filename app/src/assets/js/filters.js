import Vue from 'vue'

/**
 * 金额数据处理
 * @param value 调用过滤器时，调用的文本
 */
Vue.filter('priceValue', function (value) {
  // 如果文本不存在，返回空字符
  // value === 0; !0 === true
  if (!value) {
    return '0.00'
  }

  // 文本转化为float
  const result = parseFloat(value)

  // 如果文本为 integer 类型的文本，表示当前文本没有小数
  if (Number.isInteger(result)) {
    return result
  }
  // 文本包含小数
  return result.toFixed(2)
})

/**
 * 时间过滤器
 */
Vue.filter('filterTime', function (value) {
  if (!value) {
    return ''
  }

  // value 不是时间格式 时：分：秒
  if (value.indexOf(':') === -1) {
    return value
  }

  let result = ''
  // arr[0] 小时
  // arr[1] 分钟
  // arr[2] 秒数
  const arr = value.split(':')
  // 对 小时、分钟、秒数 补0
  if (parseInt(arr[0]) < 10) {
    result = '0' + arr[0]
  } else {
    result = arr[0]
  }
  // 分钟
  if (parseInt(arr[1]) < 10) {
    result = result + ':0' + arr[1]
  } else {
    result = result + ':' + arr[1]
  }
  // 秒数
  if (parseInt(arr[2]) < 10) {
    result = result + ':0' + arr[2]
  } else {
    result = result + ':' + arr[2]
  }

  return result
})
