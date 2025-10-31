import { useState } from "react";
import "./App.css";

const usuarios = [
  {
    nome: "Fernanda",
    tipoPerfil: "Free",
    urlFotos: [
      "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
      "https://optimumpet.com.br/media/uploads/2022/12/dicas-sobre-gatos-01-1-scaled.webp",
    ],
    configUX: { claridadeTela: 5, modoDefVisual: false },
  },
  {
    nome: "Rafael",
    tipoPerfil: "Premium",
    urlFotos: [
      "https://blog.segurosunimed.com.br/wp-content/uploads/2025/01/como-cuidar-gatos-filhotes.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswwvA9WWb2e3ZfFOEMZHik4jQ9MgJGCEDbg&s",
    ],
    configUX: { claridadeTela: 5, modoDefVisual: false },
  },
];

function App() {
  const [usuario, setUsuario] = useState({
    nome: "",
    tipoPerfil: "",
    urlFotos: ["", ""],
    configUX: { claridadeTela: 5, modoDefVisual: false },
  });

  return (
    <>
      <div className="listaUsuarios">
        {usuarios.map((item) => (
          <div className="itemUsuario" onClick={() => setUsuario(item)}>
            <h1>{item.nome}</h1>
            <h2>{item.tipoPerfil}</h2>
            {item.urlFotos.map((url) => (
              <img src={url} className="fotoPerfil" />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
