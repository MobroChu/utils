/**
 * @function Mo[getUnique]
 * @description 获取唯一标识符
 * @return {string} 唯一表示符
 * @public
 */
export const getUuid = () => {
  let module = '';  // todo 希望可以传入生成uuid 的模板
  if (module && typeof module !== 'string') {
    throw new Error('module must be a string');
  } else if (module && !/[xy-_]*/g.test(module)) {
    throw new Error('module is not support exclude [xy-_]');
  }
  let d = (new Date()).getTime();
  module = module || 'xxxx-xyxx-xxxx-4xxx-xxxx-xxxy-xxyx-xxxx';
  const uuid = module.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}