import { schedule, type Priority } from "./scheduler";

type Listener<T> = (state: T) => void;

export function createBatchedStore<T extends object>(initial: T) {
  let state = initial;
  const listeners = new Set<Listener<T>>();
  let pending = false;

  function notify() {
    pending = false;
    listeners.forEach((l) => l(state));
  }

  return {
    getState: () => state,
    subscribe(listener: Listener<T>) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setState(partial: Partial<T>, priority: Priority = "normal") {
      state = { ...state, ...partial };
      if (!pending) {
        pending = true;
        schedule(notify, priority);
      }
    },
  };
}
