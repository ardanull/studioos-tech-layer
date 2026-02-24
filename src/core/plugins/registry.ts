import type { StudioPlugin, PluginContext } from "./types";

export function createPluginRegistry() {
  const routes = new Map<string, () => Promise<Response>>();
  const widgets = new Map<string, unknown>();

  const ctx: PluginContext = {
    log: (msg) => console.log(`[StudioOS] ${msg}`),
    registerRoute: (path, handler) => routes.set(path, handler),
    registerWidget: (slot, component) => widgets.set(slot, component),
  };

  return {
    use(plugin: StudioPlugin) {
      plugin.setup(ctx);
      ctx.log(`plugin loaded: ${plugin.id}`);
    },
    getRoute(path: string) {
      return routes.get(path);
    },
    getWidget(slot: string) {
      return widgets.get(slot);
    },
    list() {
      return {
        routes: [...routes.keys()],
        widgets: [...widgets.keys()],
      };
    },
  };
}
