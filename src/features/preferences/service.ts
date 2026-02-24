import { useContainer } from "@/core/di/container";

export async function saveTheme(theme: "light" | "dark") {
  const { kv } = useContainer();
  await kv.set("theme", theme);
}

export async function loadTheme() {
  const { kv } = useContainer();
  return ((await kv.get("theme")) ?? "light") as "light" | "dark";
}
