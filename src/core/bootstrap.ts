import { createPluginRegistry } from "./plugins/registry";
import { analyticsPlugin } from "@/plugins/analytics/plugin";

export const registry = createPluginRegistry();

// Load plugins here
registry.use(analyticsPlugin);

// Example: inspect what got registered
export const registered = registry.list();
