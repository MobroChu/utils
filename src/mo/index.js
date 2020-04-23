import getUuid from './get-uuid'

const mo = {
  getUuid,
  /**
   * 防抖
   * @function Mo[debounce]
   * @param {function} fn 执行函数
   * @param {number} wait 等待时间
   */
  debounce(fn, wait) {
    let timer = null;
    return function () {
      if (timer) clearTimeout(timer);
      timer = setTimeout(fn, wait);
    }
  },
  /**
   * 节流
   * @function Mo[throttle]
   * @param {function} fn 执行函数
   * @param {number} delay 间隔时间
   */
  throttle(fn, delay) {
    let timer = null;
    return function () {
      const that = this;
      const args = arguments;
      if (!timer) {
        timer = setTimeout(function () {
          fn.apply(that, args);
          timer = null;
        }, delay);
      }
    }
  }
}

export default mo;
