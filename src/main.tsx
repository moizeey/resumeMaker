import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./contexts/FormContexts.tsx";
import { AppActiveProvider } from "./contexts/Active.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppActiveProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AppActiveProvider>
  </StrictMode>
);
