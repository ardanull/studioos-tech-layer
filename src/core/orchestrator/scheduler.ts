type Task = () => void;

export type Priority = "user-blocking" | "normal" | "idle";

const queues: Record<Priority, Task[]> = {
  "user-blocking": [],
  normal: [],
  idle: [],
};

let scheduled = false;

function flush() {
  scheduled = false;

  const runQueue = (p: Priority) => {
    const q = queues[p];
    while (q.length) q.shift()!();
  };

  runQueue("user-blocking");
  runQueue("normal");

  if (queues.idle.length) {
    (window as any).requestIdleCallback
      ? (window as any).requestIdleCallback(() => runQueue("idle"))
      : setTimeout(() => runQueue("idle"), 50);
  }
}

export function schedule(task: Task, priority: Priority = "normal") {
  queues[priority].push(task);

  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(flush);
  }
}
