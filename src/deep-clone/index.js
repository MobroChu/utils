/**
 * 深拷贝
 * @function Obj[deepClone]
 * @param {*} obj 被拷贝的对象
 * @returns {*} 处理结果
*/
const deepClone = (obj) => {
  if (obj === null) {
    return obj;
  } else if (typeof obj !== 'object') {
    return obj;  // 函数，undefine，number, string, boolen
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  } else if (obj instanceof Date) {
    return new Date(obj);
  }
  let newObj = obj.constructor();
  for (let i in obj) {
    if (Object.hasOwnProperty.call(obj, i)) {
      newObj[i] = deepClone(obj[i]);
    }
  }

  return newObj;
}

export default deepClone;
