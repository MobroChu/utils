export default {
  /**
   * 深拷贝
   * @param {*} obj 
   */
  deepClone (obj) {
    if (typeof obj === null) {
      return obj
    } else if (typeof obj !== 'object') {
      return obj  // 函数，undefine，number, string, boolen
    } 
    if (obj instanceof RegExp) { 
      return new RegExp(obj)
    } else if (obj instanceof Date) {
      return new Date(obj)
    }
    let newObj = obj.constructor
    for (let i in obj) {
      newObj[i] = this.deepClone(obj[i])
    }

    return newObj
  }
}
