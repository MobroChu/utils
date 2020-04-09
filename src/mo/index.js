const mo = {
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
  },
  /**
   * @function Mo[getUnique]
   * @description 获取唯一标识符
   * @return {string} 唯一表示符
   * @public
   */
  getUuid(module) {
    if (module && typeof module !== 'string') {
      throw new Error('module must be a string');
    } else if (module && !/[xy-_]*/g.test(module)) {
      throw new Error('module is not support exclude [xy-_]');
    }
    let d = (new Date()).getTime();
    module = module || 'xxxx-xxyx-xxxx-4xxx-yxxx-xxxx-xxxx-xxxx';
    const uuid = module.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
}

export default mo;
