import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

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
})
