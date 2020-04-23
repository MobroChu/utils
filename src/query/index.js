import qs from 'querystring';

const urlregx = /^([^?#]+)(\#[^?]+)?(\?.+)?$/;
let Query = {
  /**
   * @function Query[get] - 获取url上的参数值
   * @param {string} key 参数的key
   * @param {string} [url=location.href] 页面url，默认当前url
   * @example
   * import { Query } from '@zz-biz/utils';
   * 
   * Query.get('__t');
   * // return 50
   * 
   * Query.get();
   * // { a: 1, b: 2, c: 3 }  //返回对象
   * @return {string} queryValue
   */
  get(key= '', url = location.href) {
    if (key) {
      const reg = new RegExp(`(^|[&|\\?])${key}=([^&|#]*)([&|#]|$)`);
      const hrefs = url.split('?').splice(1);
      if (hrefs.length > 0) {
        let r = null;
        hrefs.forEach(v => {
          if (reg.test(v)) {
            r = `?${v}`.match(reg);
          }
        });
        if (r !== null) return decodeURIComponent(r[2]);
        return r;
      }
      return null;
    } else {
      const reg = /([\?&])([^\?&#]*)=([^&|#|\?]*)/g;
      const result = {};
      const matchArr = url.match(reg) || [];
      matchArr.forEach(v => {
        const str = v.substring(1);
        if (str) {
          result[str.split('=')[0]] = str.split('=')[1];
        }
      });
      return result;
    }
  },
  /**
   * @function Query[add] - url上添加参数
   * @param {string} [url=location.href] 页面url默认当前url
   * @param {object | string} queryData 添加的参数，支持querystr或者obj数据
   * @example
   * import { Query } from '@zz-biz/utils';
   * 
   * Query.add({a: 1});
   * 
   * // return url?a=1
   */
  add(queryData, url=location.href){
    let [whole, domain, hashStr, queryStr] = urlregx.exec(url) || [];
    let query = {};
    if(queryStr){
      Object.assign(query, qs.parse(queryStr.substring(1)));
    }
    if(typeof queryData === 'string'){
      query = qs.parse(queryData[0] === '?' ? queryData.substring(1) : queryData);
    }else{
      Object.assign(query, queryData);
    }
    url = domain;
    if(hashStr){
      url += hashStr;
    }
    if(JSON.stringify(query) != '{}'){
      url += `?${qs.stringify(query)}`;
    }
    return url;
  },
  /**
   * @function Query[remove] - 删除url上的特定参数
   * @param {string} [url=location.href] 页面url, 默认当前url
   * @param {array | string} queryData 删除的参数字段，支持数组和字符串
   * @example
   * import { Query } from '@zz-biz/utils';
   * // url?a=1&b=2
   * Query.remove('a');
   * 
   * // return url?b=2
   */
  remove(queryData, url = location.href) {
    let [whole, domain, hashStr, queryStr] = urlregx.exec(url) || [];
    let query = {};
    if(queryStr){
      url = domain;
      Object.assign(query, qs.parse(queryStr.substring(1)));
      if(typeof queryData.length){
        for(let i = 0; i < queryData.length; i++){
          delete query[queryData[i]];
        }
      }else{
         delete query[queryData];
      }
    }else{
      return url;
    }
    if(hashStr){
      url += hashStr;
    }
    if(JSON.stringify(query) != '{}'){
      url += `?${qs.stringify(query)}`;
    }
    return url;
  },
  /**
   * @function Query[getParams] - 拼接对象成为url参数字符串形式
   * @param {object} [params={}] 参数对象
   * @example
   * import { Query } from '@zz-biz/utils';
   * // url?a=1&b=2
   * Query.getParams({a: 1, b: 2, c: 3});
   * 
   * // return a=1&b=2&c=3
   */
  getParams(params = {}) {
    return Object.keys(params).map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    }).join('&');
  }
}

export default Query;
