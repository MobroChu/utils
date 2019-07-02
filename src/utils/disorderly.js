/**
 * 深拷贝
 * @param {*} obj 
 */
function deepClone(obj) {
  if (obj === null) {
    return obj
  } else if (typeof obj !== 'object') {
    return obj  // 函数，undefine，number, string, boolen
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj)
  } else if (obj instanceof Date) {
    return new Date(obj)
  }
  let newObj = obj.constructor;
  for (let i in obj) {
    newObj[i] = this.deepClone(obj[i]);
  }

  return newObj;
}

/**
 * 防抖
 * @param {function} fn 执行函数
 * @param {number} wait 等待时间
 */
function debounce (fn, wait) {
  const timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, wait);
  }
}

/**
 * 节流
 * @param {function} fn 执行函数
 * @param {number} delay 间隔时间
 */
function throttle (fn, delay) {
  const timer = null;
  return function () {
    const that = this;
    const args = arguments;
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(that, args);
        timer = null;
      }, delay)
    }
  }
}

/**
 * 千位分割
 * @param {number} num 要被分割的数字
 * @param {number} fixed 保留小数
 */
function splitThousands(num, fixed) {
  if (typeof num !== "number") {
      num = parseFloat(num);
  }
  var reg = /\B(?=(\d{3})+$)/g;
  num = num.toString().split(".");
  fixed = fixed == undefined ? 2 : fixed;

  num[0] = num[0].replace(reg, ",");
  num[1] = num[1] ? num[1].substr(0, fixed) : "00000000000000000".substr(0, fixed);

  return fixed ? Number(num.join(".")) : Number(num[0]);
}

const utils = {
  deepClone,
  debounce,
  throttle,
  splitThousands
}

module.exports = utils;
