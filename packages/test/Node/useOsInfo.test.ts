import { useOsInfo } from 'packages/Node'
import { describe, expect, it } from 'vitest'

describe('useOsInfo', () => {
  it('获取操作系统信息测试', () => {
    console.warn('osInfo:', useOsInfo())
    expect(useOsInfo())
      .not
      .toBeNull()
  })
})
