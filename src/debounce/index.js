/**
 * 防抖
 * @function Mo[debounce]
 * @param {function} fn 执行函数
 * @param {number} wait 等待时间
 */
export default (fn, wait) => {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  };
}