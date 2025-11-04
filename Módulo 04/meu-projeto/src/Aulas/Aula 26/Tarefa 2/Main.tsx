import { useState } from "react";
import Pet from "./Pet";
import "./Styles.css";

const pets = [
  {
    nome: "Sofia",
    raca: "Golden Retriever",
    especie: "Cachorro",
  },
  { nome: "Romeu", raca: "Siamês", especie: "Gato" },
];

function App() {
  const [pet, setPet] = useState({
    nome: "",
    raca: "",
    especie: "",
  });

  return (
    <div>
      <h1 className="estilo">Pets</h1>
      {pets.map((animal) => (
        <Pet nome={animal.nome} raca={animal.raca} especie={animal.especie} />
      ))}
    </div>
  );
}

export default App;
