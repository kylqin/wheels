/**
 * 保证一个 delay (毫秒) 时间段内调用 fn 不超过一次, 第一次调用请求直接直接执行
 * @param fn {Functon} 被封装函数
 * @param delay {number} 函数调用最小间隔 (毫秒)
 */
export const throttle = (fn: Function, delay: number): Function => {
  // 定义上次调用的时间戳
  let timestramp = 0

  return (...args) => {
    const now = Date.now()
    if (now > timestramp + delay) {
      // 离上次调用超过 delay 毫秒，则调用 fn
      fn(...args)

      // 更新调用时间戳
      timestramp = now
    }

    // else
    // 否则, 忽略调用
  }
}

/**
 * 使函数 fn 等待 delay 毫秒后被执行，如果在等待过程中，有新的调用请求，
 * 则等待时间更新为从这个新请求的时刻开始
 * @param fn {Function} 被封装函数
 * @param delay {number} 函数调用最小时间间隔 (毫秒)
 */
export const debounce = (fn: Function, delay: number): Function => {
  // 使用 timeout 标记调用请求
  let timeout

  return (...args) => {
    if (timeout) {
      // 如果还在等待，清除上次调用请求
      clearTimeout(timeout)
    }

    // 更新调用请求，(重新)等待 delay ms
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
