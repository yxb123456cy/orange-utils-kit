import CryptoJS from 'crypto-js'

/**
 *
 * @param value 需要加密的值
 * @returns 进行MD加密后的值;
 */
export function useMD5(value: string) {

  return CryptoJS.MD5(value).toString()
}
