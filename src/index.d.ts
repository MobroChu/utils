declare function setTimeoutSync(duration: number): Promise<void>
declare function nextTickSync(vnode: Vue): Promise<void>

export {
  setTimeoutSync,
  nextTickSync
}
