import { registry, registered } from "@/core/bootstrap";
import { createBatchedStore } from "@/core/orchestrator/batchedStore";

// Demonstrate plugin registry
console.log("Registered:", registered);
console.log("Route /api/track exists:", Boolean(registry.getRoute("/api/track")));
console.log("Widget footer.right:", registry.getWidget("footer.right"));

// Demonstrate orchestration batching
const uiStore = createBatchedStore({ sidebarOpen: false, theme: "light" });

uiStore.subscribe((s) => console.log("render with state:", s));

// same frame => single notify
uiStore.setState({ sidebarOpen: true }, "user-blocking");
uiStore.setState({ theme: "dark" }, "normal");
