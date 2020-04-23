/**
 * 节流
 * @function Mo[throttle]
 * @param {function} fn 执行函数
 * @param {number} delay 间隔时间
 */
export default (fn, delay) => {
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
  };
}