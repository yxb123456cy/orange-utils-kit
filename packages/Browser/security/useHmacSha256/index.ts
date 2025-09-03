import CryptoJS from 'crypto-js'

/**
 * 生成 HMAC-SHA256 签名
 * @param message 原始消息
 * @param secret 密钥
 * @returns string 十六进制字符串
 */
export function useHmacSha256(message: string, secret: string): string {
  return CryptoJS.HmacSHA256(message, secret).toString(CryptoJS.enc.Hex)
}
