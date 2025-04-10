// example
import { create } from 'zustand'

interface CounterState {
  count: number
  incr: () => void
  decr: () => void
}

export const useCounter = create<CounterState>(set => ({
  count: 0,
  incr: () => set(state => ({ count: state.count + 1 })),
  decr: () => set(state => ({ count: state.count - 1 })),
}))
