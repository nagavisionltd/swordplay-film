import { StrictMode } from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { getRouter } from "./router";

declare global {
  interface Window {
    __TSR_DEFERRED_STATE__: unknown;
  }
}

const router = getRouter();

// Hydrate or render based on SSR state
if (window.__TSR_DEFERRED_STATE__) {
  hydrateRoot(
    document.getElementById("root")!,
    <StrictMode>
      <router.Provider>
        <router />
      </router.Provider>
    </StrictMode>
  );
} else {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <router.Provider>
        <router />
      </router.Provider>
    </StrictMode>
  );
}
