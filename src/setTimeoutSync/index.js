/**
 * 同步 setTimeout
 * @param duration 时间间隔 (ms)
 * @return {Primise} Primise
 */
export const setTimeoutSync = (duration) =>
  new Promise(resolve => {
    setTimeout(resolve, duration);
  });