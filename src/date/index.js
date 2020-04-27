class MoDate {
  constructor() { }
  /**
   * 格式化时间
   * @function MoDate[format]
   * @param {any} time 要被格式的时间(可以是时间戳，时间戳字符串，标准时间格式的字符串，标准时间)
   * @param {string} fmt 格式化后的产出结果
   * @example
   * import { MoDate } from '@mobro/utils'
   * 
   * MoDate.format(new Date(), 'YYYY年MM月DD日 hh:mm:ss:S 第Q季度') // 2020年04月26日 19:17:25:201 第2季度
   * MoDate.format(Date.now(), 'YYYY年MM月DD日 hh:mm:ss:S 第Q季度')
   * MoDate.format('Sun Apr 26 2020 11:42:43 GMT+0800', 'YYYY年MM月DD日 hh:mm:ss:S 第Q季度')
   */
  format(time, fmt) {
    const date = MoDate.typevalue(time);
    const timeQuota = MoDate.getTimeQuota(date);
    if (!(fmt && typeof fmt === 'string')) {
      fmt = 'YYYY/MM/DD hh:mm:ss'; 
    }

    if (/(Y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in timeQuota) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (timeQuota[k]) : (("00" + timeQuota[k]).substr(("" + timeQuota[k]).length)));
      }
    }
    return fmt;
  }
  /**
   * 获取时间对应的年月日等
   * @param {Date} ins 时间实例
   * @returns 
   */
  static getTimeQuota(ins) {
    return {
      "M+": ins.getMonth() + 1,     //月份
      "D+": ins.getDate(),     //日
      "h+": ins.getHours(),     //小时
      "m+": ins.getMinutes(),     //分
      "s+": ins.getSeconds(),     //秒
      "Q+": Math.floor((ins.getMonth() + 3) / 3), //季度
      "S": ins.getMilliseconds(),    //毫秒
      "W":  ins.getDay(), // 周几
    }
  }
  /**
   * 将传入时间格式统一 
   */
  static typevalue(time) {
    switch (Object.prototype.toString.call(time)) {
      case '[object Number]':
        if (`${time}`.length === 10) {
          time *= 1000;
        } else if (`${time}`.length !== 13) {
          throw new Error('时间戳格式应为10位或者13位的数字或字符串')
        }
        break;
      case '[object String]':
        if (!isNaN(Number(time))) {
          if (time.length === 10) {
            time = Number(time) * 1000;
          } else if (`${time}`.length !== 13) {
            throw new Error('时间戳格式应为10位或者13位的数字或字符串')
          }
        } else if (Date.parse(time) > 0) {
          time = Date.parse(time);
        } else {
          throw new Error('传入的时间格式不正确！！');
        }
        break;
      case '[object Date]':
        time = time.getTime();
        break;
      default:
        throw new Error('请仔细检查你传入的时间格式！！仅支持(秒级、毫秒级)时间戳的字符串或者数字类型，及Date实例');
    }
    return new Date(time);
  }
}

export default new MoDate();
