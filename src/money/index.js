export default {
  /**
   * @function Money[toYuan] - 分转元
   * @param {string | number} [num=0] 分
   * 
   * @example
   * import { Money } from '@mobro/utils';
   * Money.toYuan(1);
   * // 0.01
   * 
   * @return {number} num / 100 带两位小数的浮点型
   */
  toYuan(num = 0, digit = 10) {
    if (isNaN(parseFloat(num))) return 0; //不是数字的返回0
    const m = Math.pow(10, digit);
    return parseFloat((Math.round(parseFloat(num) * 0.01 * m, 10) / m).toFixed(2));
  },
  /**
   * @function Money[toFen] - 元转分
   * @param {string | number} [num=0] 元
   * 
   * @example
   * import { Money } from '@mobro/utils';
   * Money.toFen(0.29);
   * // return 29
   * 
   * @return {number} num * 100
   */
  toFen(num = 0, digit = 10) {
    if (isNaN(parseFloat(num))) return 0;
    const m = Math.pow(10, digit);
    return parseFloat((Math.round(parseFloat(num) * 100 * m, 10) / m));
  },
  /**
   * 千位分割，每三位加','，
   * @function Money[splitThousands]
   * @param {string | number} num
   * @return {string} 处理后结果
   */
  splitThousands(num = 0) {
    if (isNaN(parseFloat(num))) return 0;
    let [int, decimal] = String(num).split('.');
    //保证传进来的都输数字
    const target = parseFloat(int);
    if (isNaN(target)) return '0';
    int = int.split('')
      .reverse()
      .join('')
      .replace(/(\d{3})/gi, '$1,')
      .replace(/,$/g, '')
      .split('')
      .reverse()
      .join('');
    return decimal ? `${int}.${decimal}` : int;
  },
  /**
   * 千位分割
   * @function Money[splitThs]
   * @param {number} num 要被分割的数字
   * @param {number} fixed 保留小数
   */
  splitThs(num, fixed) {
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
}