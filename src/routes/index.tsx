import { Button } from '@/components/ui/button'
import { useCounter } from '@/store/useCounter'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { count, incr } = useCounter()
  return (
    <div className="flex items-center">
      <Button className="rounded-full bg-blue-500" onClick={incr}>
        Add {count}
      </Button>
    </div>
  )
}
