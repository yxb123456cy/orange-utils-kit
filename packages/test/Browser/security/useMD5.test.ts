import { useMD5 } from 'packages/Browser'
import { describe, expect, it } from 'vitest'

describe('useMD5', () => {
  it('测试加密', () => {
    expect(useMD5('123456').toLowerCase())
      .toBe('e10adc3949ba59abbe56e057f20f883e')
  })
})
