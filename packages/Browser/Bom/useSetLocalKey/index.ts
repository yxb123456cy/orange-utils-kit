/**
 * @description 使用LocalStorage存储键值对;
 * @param key 键
 * @param value 值
 */
export function useSetLocalKey(key: string, value: unknown) {
  if (typeof value === 'string') {
    localStorage.setItem(key, value)
  }
  else {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
