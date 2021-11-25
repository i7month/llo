// 节流 只认第一次触发
const throttle = function (fn, interval) {
  // 纪录上一次时间戳
  let last = 0;
  return function () {
    // 获取时间戳
    let now = +new Date();
    // 当前时间戳 减 上一次时间戳 是否大于 用户传过来的 interval ms时间
    if (now - last > interval) {
      // 重新记录上一次时间戳
      last = now;
      // 执行用户传过来的回调函数 返回end
      fn('end')
      // console.log('我是在interval时间段只触法第一次');
    }
  };
}

// 防抖(无优化) 只认最后一次触发 如果一直在滚动 打印是永远不会执行的
const debounce = function (fn, delay) {
  // 创建一个延时器变量
  let timer = null;
  return function () {
    // 判断是否有上次的延时器
    if (timer) {
      // 如果有清除延时器 下面重新进行
      clearTimeout(timer)
    }
    //  重新进行延时
    timer = setTimeout(() => {
      // 如果用户在delay ms时间内没有触发这个方法 触发用户的回调
      fn('end')
      // console.log('我是delay到了无任何动作才执行')
    }, delay)
  }
}

// 防抖(优化) 只认最后一次触发 即时一直在滚动 每过1s都会在执行一次
const betterDebounce = function (fn, delay) {
  let last = 0
  let timer = null
  return function () {
    let now = +new Date()
    if ((now - last) < delay) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn('end')
        // console.log('我是delay到了无任何动作才执行');
        last = now
      }, delay)
    } else {
      last = now
      fn('auto')
      // console.log('我是倔强型选手 delay你不自己停止我就执行');
    }
  }
}


export default {
  throttle,
  debounce,
  betterDebounce
}