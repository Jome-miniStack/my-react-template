import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
// 导入路由树
import { routeTree } from './routeTree.gen' // TanStack CLI 会自动生成这个文件

// 创建路由实例
const router = createRouter({ routeTree })

// 注册路由实例以实现类型安全
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      {/* 在这里可以包裹其他全局 Provider, 例如 React Query */}
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}