import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// Stránka je předgenerovaná do HTML; React ji jen „oživí“.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
