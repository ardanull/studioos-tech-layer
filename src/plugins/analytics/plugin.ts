import type { StudioPlugin } from "@/core/plugins/types";

export const analyticsPlugin: StudioPlugin = {
  id: "analytics",
  setup(ctx) {
    ctx.registerRoute("/api/track", async () => {
      ctx.log("tracking event");
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "content-type": "application/json" },
      });
    });

    ctx.registerWidget("footer.right", function AnalyticsBadge() {
      return "📈 Analytics Enabled";
    });
  },
};
