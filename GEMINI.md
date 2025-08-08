要求:
1. 保持中文回复
2. 当前项目基础技术栈:react vite tanstack/router typescript TailwindCSS ShadCN axios zustand
3. 采用前后端分离方案, 前端react(前端先行,通过mock api造数据)
4. 根据项目结构进行模块化开发


以下是项目代码结构:
```
/src
├── api/                  # API 请求层
│   ├── index.ts          # Axios 实例、拦截器、通用 API 函数
│   └── XXXApi.ts         # 示例：功能模块 XXX 相关的 API 请求
│
├── assets/               # 静态资源 (图片, SVG, 字体等)
│
├── components/           # UI 组件
│   ├── ui/               # 原子组件 (来自 shadcn/ui 或其他 UI 库)
│   └── shared/           # 全局共享的、与业务无关的复合组件 (如 PageLoader)
│
├── config/               # 项目配置 (环境变量等)
│   └── index.ts
│
├── features/             # **核心开发区域：按功能模块划分**
│   └── XXX/              # 示例：功能模块 XXX (例如: 首页)
│       ├── components/   # 仅用于功能 XXX 的 React 组件
│       ├── hooks/        # 仅用于功能 XXX 的自定义 Hooks
│       ├── store.ts      # 仅用于功能 XXX 的 Zustand store
│       └── types.ts      # 仅用于功能 XXX 的 TypeScript 类型定义
│
├── hooks/                # 全局共享的自定义 Hooks (如 useDebounce)
│
├── lib/                  # 第三方库配置或通用工具函数
│   └── utils.ts
│
├── routes/               # **TanStack Router 文件路由**
│   ├── __root.tsx        # 根布局 (可包含全局 Header, Footer, Outlet)
│   ├── index.tsx         # 应用首页 (路径: /)
│   │
│   └── XXX/              # 示例: 功能 XXX 的路由组
│       ├── index.tsx     # 列表页 (路径: /XXX)
│       └── $Id.tsx       # 动态参数详情页 (路径: /XXX/:Id)
│
├── stores/               # **全局 Zustand stores**
│   └── useAppStore.ts    # 示例：全局应用状态 (如用户认证、主题)
│
├── types/                # **全局 TypeScript 类型定义**
│   └── index.ts          # 全局共享类型 (如 ApiResponse<T>)
│
└── main.tsx              # 应用入口 (初始化路由和全局 Provider)
```