export default {
  /**
   * 深拷贝
   * @function Obj[deepClone]
   * @param {*} obj 被拷贝的对象
   * @returns {*} 处理结果
   */
  deepClone(obj) {
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
  },
  /**
   * 深层数据属性获取
   * @function Obj[GetIn] - 深层数据属性获取
   * @param {Object|Array} deepObj 深层次数据
   * @param {Array|String} path 路径
   * @param {Any} defaultVal 默认值
   * @returns {Any} 深层次数据属性
   * @example
   * import { GetIn } from '@zz-biz/utils';
   * const deepObj = {
      respCode: 0,
      respData: {
        status: 0,
        data: {
          useInfo: {
            userName: '曹清达',
            sellerAddress: {
              city: '北京市'
            }
          }
        }
      },
      data: [{
        name: '我爱你1'
      }, {
        name: '我爱你2'
      }]
     };
   * GetIn(deepObj,'respData.data.useInfo.sellerAddress.city','默认数据');
   * // return 北京市
   * GetIn(deepObj,'respData.data.useInfoSS.sellerAddress.city','默认数据');
   * // return 默认数据
   * GetIn(deepObj,'data.0.name','我不爱你');
   * // return 我爱你1
   * GetIn(deepObj, 'data.1.name', '我不爱你');
   * // return 我爱你2
   * GetIn(deepObj, ['data', 1, 'name'], '我不爱你');
   * // return 我爱你2
   * GetIn(deepObj, {}, '我不爱你');
   * // console.warn(path 类型只能为字符串或数组)
   * // return 我不爱你
   */
  getIn(deepObj, path, defaultVal) {
    try {
      if (!path) {
        return deepObj;
      }
      if (typeof path === 'string' || path instanceof Array) {
        const pathArr = typeof path === 'string' ? path.split('.') : [...path];
        if (!pathArr.length) {
          return deepObj || defaultVal;
        }
        const currPath = pathArr[0];
        const restPath = pathArr.slice(1);
        let currValue = deepObj[currPath];
        if (currValue === undefined) {
          currValue = defaultVal;
          return currValue;
        }
        return restPath.length === 0 ? currValue : getIn(currValue, restPath, defaultVal);
      } else {
        throw 'path 类型只能为字符串或数组';
      }
    } catch (err) {
      return defaultVal;
    }
  }
}