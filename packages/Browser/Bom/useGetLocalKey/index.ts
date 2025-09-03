/**
 * @description 从LocalStorage中获取某个键所对应的值;
 * @param key
 * @returns value 键对应的值;
 */
export function useGetLocalKey(key: string) {
  return localStorage.getItem(key)
}
