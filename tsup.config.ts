import type { Options } from 'tsup'
import process from 'node:process'
import { defineConfig } from 'tsup'

// 直接在配置文件中处理环境逻辑
const isProduction = process.env.NODE_ENV === 'production'
const commonConfig: Options = {
  minify: isProduction,
  sourcemap: !isProduction,
  shims: true,
  clean: true,
  dts: true,
}

export default defineConfig([
  {
    format: ['esm', 'cjs', 'iife'],
    entry: ['./packages/Browser/index.ts'],
    outDir: 'dist/browser',
    platform: 'neutral',
    globalName: 'fy',
    ...commonConfig,
  },
  {
    format: ['esm', 'cjs'],
    entry: ['./packages/Node/index.ts'],
    outDir: 'dist/node',
    platform: 'node',
    ...commonConfig,
  },
])
