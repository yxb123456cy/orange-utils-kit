import os from 'node:os'

/**
 * @description 获取操作系统信息
 * @returns 系统信息
 */
export function useOsInfo() {
  return {
    type: os.type(),
    platform: os.platform(),
    release: os.release(),
    arch: os.arch(),
    hostname: os.hostname(),
  }
}
