## install detail

### step-0 prettier

> ref: https://github.com/tailwindlabs/prettier-plugin-tailwindcss
```
pnpm install -D prettier prettier-plugin-tailwindcss
```
```
// .prettierrc 
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindStylesheet": "./src/index.css",
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "arrowParens": "avoid"
}
```
```
// vscode settings
  "editor.tabSize": 2,
  "[typescriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
  },
  "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "editor.formatOnSave": true
  },
```

mannually format
```
npx prettier --write .
```

### step-1 shadcn&tailwind

> ref: https://ui.shadcn.com/docs/installation/vite

```
pnpm add tailwindcss @tailwindcss/vite
pnpm add -D @types/node
```
```
// src/index.css
@import "tailwindcss";

// tsconfig.app.json & tsconfig.json
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }

// vite.config.ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
```
shadcn init 
```
pnpm dlx shadcn@latest init

// test: add button
pnpm dlx shadcn@latest add button
```

### step-2 tanstack/router
> ref: https://tanstack.com/router/latest/docs/framework/react/installation

```
pnpm add @tanstack/react-router
pnpm add -D @tanstack/router-plugin @tanstack/react-router-devtools
```

```
// vite.config.ts
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(),
    // ...,
  ],
```

run pnpm dev to generate files
```
pnpm dev
```

```
// main.tsx
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
example pages, Create the following files:
```
src/routes/__root.tsx (with two '_' characters)
src/routes/index.tsx

// src/routes/__root.tsx
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

// src/routes/index.tsx
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

### step-3 zustand & axios
>ref: https://zustand.docs.pmnd.rs/getting-started/introduction

```
pnpm add zustand axios
```