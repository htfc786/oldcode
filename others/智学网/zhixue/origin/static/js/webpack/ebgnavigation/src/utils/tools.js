/**
 * 防抖
 * @param {*} operate 操作
 * @param {*} delay 延时
 */
export const debounce = (fn, delay = 1000) => {
  let timer

  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 func 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给func
    const context = this
    const args = arguments

    // 函数被调用，清除定时器
    clearTimeout(timer)

    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 func
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}
