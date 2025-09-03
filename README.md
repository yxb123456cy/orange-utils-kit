
---

````markdown
# Orange Utils Kit

[![npm version](https://img.shields.io/npm/v/@qy-utils/orange-utils-kit)](https://www.npmjs.com/package/@qy-utils/orange-utils-kit)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

**Orange Utils Kit** 是一个 **useXXX 风格的前端通用工具函数库**，专为现代前端开发设计。
它提供 **完善的 TypeScript 类型支持**，并包含两类实用函数：

- **浏览器函数**（默认导入）
- **Node.js 服务端函数**（可选导入）

该库帮助你编写 **干净、可维护、可复用** 的工具函数，适用于前端和后端环境。

---

## 特性

- ✅ **useXXX 风格 API**，函数调用一致、易读
- ✅ **TypeScript 优先**，类型推导友好
- ✅ **双环境支持**
  - 浏览器：默认导入
  - Node.js：通过 `@qy-utils/orange-utils-kit/node` 可选导入
- ✅ **轻量、支持 tree-shaking**
- ✅ **默认不包含外部依赖**（Vue、Pinia 等为 peerDependencies）

---

## 安装

```bash
npm install @qy-utils/orange-utils-kit
# 或者
yarn add @qy-utils/orange-utils-kit
````

---

## 使用示例

### 浏览器（默认导入）

```ts
import { useDebounce } from '@qy-utils/orange-utils-kit'

const result = useDebounce(() => {
  console.log('Hello World')
}, 300)
```

### Node.js（可选导入）

```ts
import { useDebounce } from '@qy-utils/orange-utils-kit/node'

const result = useDebounce(() => {
  console.log('Hello from Node')
}, 300)
```

---

## 贡献指南

* 请遵循 **Conventional Commits**（`feat`, `fix`, `chore` 等）
* 开发时运行 `npm run dev`
* 测试时运行 `npm run test`

---

## 许可证

MIT © [yxb123456cy](https://github.com/yxb123456cy)
