import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import API from "./Aulas/Aula 35/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <API />
  </StrictMode>
);
