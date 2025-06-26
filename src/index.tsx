import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Categories } from "./screens/Categories";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Categories />
  </StrictMode>,
);
