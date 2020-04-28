/**
 * 判断当前设备是否为iphoneX
 * @return boolean true 表示当前设备为 iphonex。false就部位iphonex
 */
const isIphoneX = () => {
  if (typeof window !== 'undefined' && window) {
    return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812
  }
  return false
}

// 计算结果，赋值给window对象下的一个属性
window.isIphoneX = isIphoneX()
