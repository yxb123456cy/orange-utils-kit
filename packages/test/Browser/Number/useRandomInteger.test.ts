import { useRandomInteger } from 'packages/Browser'
import { describe, expect, it } from 'vitest'

describe('useRandomInteger', () => {
  it('应返回一个介于最小值和最大值之间的随机整数', () => {
    const min = 1
    const max = 100
    // 使用;
    const res = useRandomInteger(min, max)
    console.warn(res)
    // res应该小于或等于max
    expect(res).toBeLessThanOrEqual(max)
    // res应该大于或等于min
    expect(res).toBeGreaterThanOrEqual(min)
  })
})
