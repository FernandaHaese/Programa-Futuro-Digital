import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FotoArr from "./Aulas/Aula 29/main";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FotoArr
      raio="50%"
      espessura={20}
      cor="black"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAowaWEVRdppIjxA-EZYkQJF-XyMUaQFRNTw&s"
    ></FotoArr>
    <div></div>
  </StrictMode>
);
