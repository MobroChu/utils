
/**
 * 同步 nexttick
 * @return {Primise} Primise
 */
export const nextTickSync = (vnode) =>
  new Promise(resolve => {
    vnode.$nextTick(resolve);
  });
