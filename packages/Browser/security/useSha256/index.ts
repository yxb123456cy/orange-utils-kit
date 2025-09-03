import CryptoJS from 'crypto-js'

/**
 * 计算 SHA-256 哈希
 * @param input 输入字符串
 * @returns string 十六进制字符串
 */
export function useSha256(input: string): string {
  return CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex)
}
