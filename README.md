# React Vite Template
🚧 **This template is still in progress**

My custom starter template using:
- ⚛️ React + Vite + TypeScript
- 💨 TailwindCSS + ShadCN UI
- 🧭 TanStack Router
- ⚡ Axios + Zustand for API and state management
- 🧹 Prettier + Tailwind CSS formatting plugin
---

> React + Vite + TypeScript + TailwindCSS + TanStack Router + Zustand + Axios
> **Node:** `>=18`  
> **Package Manager:** `pnpm`

```bash
pnpm install
pnpm dev
```

## 📦 Installation Detail


### Step 0: Prettier Setup

> [Tailwind Prettier Plugin](!https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

```bash
pnpm install -D prettier prettier-plugin-tailwindcss
```
`.prettierrc`
```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/index.css",
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "arrowParens": "avoid"
}
```
`.vscode/settings.json (optional):`
```json
{
  "editor.tabSize": 2,
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  }
}

```
Manually format all files:
```bash
npx prettier --write .
```

### Step 1: TailwindCSS + ShadCN Setup
>[ShadCN Doc](!https://ui.shadcn.com/docs/installation/vite)


```bash
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @types/node
```
`src/index.css`
```
@import "tailwindcss";
```
`tsconfig.app.json / tsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```
`vite.config.ts`
```ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"

plugins: [react(), tailwindcss()],
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
},
```
**Init ShadCN** 
```bash
pnpm dlx shadcn@latest init

# Add a test componet
pnpm dlx shadcn@latest add button
```

### Step 2: TanStack Router Setup
>[TanStack Router Guide](!https://tanstack.com/router/latest/docs/framework/react/installation)

```bash
pnpm add @tanstack/react-router
pnpm add -D @tanstack/router-plugin @tanstack/react-router-devtools
```
`vite.config.ts`
```
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    // ...,
  ],
```

**Start dev server to auto-generate route files**
```bash
pnpm dev
```
**Main App Entry(`main.tsx`)**
```
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
// for tailwind
import '@/index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
```

**Need the file: `src/routes/__root.tsx`**

**Example Routes**

`src/routes/__root.tsx`
```tsx
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Link to="/" className="bg-green-500">
        Home
      </Link>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
```
`src/routes/index.tsx`
```tsx
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}
```

###  Step 3: Zustand + Axios Setup
>[Zustand Docs](!https://zustand.docs.pmnd.rs/getting-started/introduction)
>[Axios Docs](!https://axios-http.com/docs/intro)
```
pnpm add zustand axios
```