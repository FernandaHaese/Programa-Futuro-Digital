import { use, useState } from "react";
import "./App.css";

function App() {
  const [escuro, setEscuro] = useState(false);
  const [count, setCount] = useState(0);

  const aumentarCount = (count: number) => {
    return count + 1;
  };

  const MudarModo = (escuro: any) => {
    return !escuro;
  };

  const botaoClicado = () => {
    setEscuro(MudarModo);
    setCount(aumentarCount);
  };

  return (
    <>
      <body className={escuro ? "escuro" : "claro"}>
        <h1>Modo de cor</h1>
        {count < 10 ? (
          <div className="card">
            <button onClick={() => botaoClicado()}>Mudar o modo {count}</button>
            <p>Modo {escuro ? "escuro" : "claro"} está ativado</p>
          </div>
        ) : (
          <b>Você apertou demais! Perdeu o botão!</b>
        )}
      </body>
    </>
  );
}

export default App;
