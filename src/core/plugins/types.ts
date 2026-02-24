export type PluginContext = {
  log: (msg: string) => void;
  registerRoute: (path: string, handler: () => Promise<Response>) => void;
  registerWidget: (slot: string, component: unknown) => void;
};

export type StudioPlugin = {
  id: string;
  setup: (ctx: PluginContext) => void;
};
