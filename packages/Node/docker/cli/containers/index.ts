import { exec } from 'node:child_process'
import { promisify } from 'node:util'

/**
 * ps: 该函数仅支持安装了Docker的机器本地运行;
 * @param all 是否列出全部 包括运行与未运行
 * @returns 容器列表JSON
 */
export async function useDockerListContainers(all: boolean = false) {
  const execAsync = promisify(exec)
  const { stdout } = await execAsync(`docker ps ${all ? '-a' : ''} --format "{{json .}}"`)
  // 输出每行是 JSON，需要解析
  return stdout
    .split('\n')
    .filter(Boolean)
    .map(line => JSON.parse(line))
}
// 使用npx tsx 来运行;
// console.warn(await useDockerListContainers(true))
