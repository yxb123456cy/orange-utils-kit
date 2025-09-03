/**
 *
 * @param min 最小值
 * @param max 最大值
 * @returns 返回一个介于最小值与最大值之间的一个随机数;
 */
export function useRandomInteger(min: number, max: number) {
  if (min > max)
    throw new Error(`Min:${min} cannot be greater than max:${max}`)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
// npx  tsx .\useRandomInteger.ts
// const res = useRandomInteger(15, 20)
// console.warn(res)
