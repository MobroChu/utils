
/**
 * 频率超高的工具方法，单独抛出去
 */
import O from './object'
import Mo from './mo'

export const deepClone = O.deepClone
export const GetIn = O.GetIn

export const getUuid = Mo.getUuid
export const throttle = Mo.throttle
export const debounce = Mo.debounce

export { default as Mo } from './mo';
export { default as Money } from './money';
export { default as Obj } from './object';
