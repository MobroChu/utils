/**
 * @function Mo[getUnique]
 * @description 获取唯一标识符
 * @return {string} 唯一表示符
 * @public
 */
export default (module) => {
  if (module && typeof module !== 'string') {
    throw new Error('module must be a string');
  }
  let d = (new Date()).getTime();
  module = module || 'xxxx-yyyy-xxxx-yyyy-4yxy';
  const uuid = module.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}