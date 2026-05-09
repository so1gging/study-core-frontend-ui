import { createFileRoute } from '@tanstack/react-router'
import { isParentRoute, routeMap } from '@/routeMap'
import type { RoutePath } from '@/routeMap'

export const Route = createFileRoute('/$')({
  component: ItemPage,
})

function ItemPage() {
  const { _splat } = Route.useParams()
  const route = routeMap[_splat as RoutePath]
  if (isParentRoute(route) || !route.Component) {
    return null
  }

  const Component = route.Component
  return <Component />
}
export default ItemPage
