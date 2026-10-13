import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Base styles first, so component styles imported by App can build on and override them.
import "./styles/base.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
