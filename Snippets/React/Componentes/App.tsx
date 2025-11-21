import { useState } from "react";
import "./App.css";

const clientes = [
  // Fazer os seus dados hard-coded assim é terrível, veremos como fazer melhor em breve
  {
    id: 0,
    nome: "Mulatu Astatke",
    tel: "219846321936",
    email: "mulatuofethiopia@gmail.com",
    urlFoto: "https://f4.bcbits.com/img/a1457850517_16.jpg",
  },
  {
    id: 1,
    nome: "Labi Siffre",
    tel: "11973521827",
    email: "thevulture@yahoo.com",
    urlFoto:
      "https://images.genius.com/925b89ba8b3d85fa0fde27f0e8d23f91.1000x1000x1.jpg",
  },
  {
    id: 2,
    nome: "Tom Waits",
    tel: "21984899763",
    email: "raindog@gmail.com",
    urlFoto:
      "https://images.mubicdn.net/images/cast_member/4105/cache-817-1582791358/image-w856.jpg",
  },
  {
    id: 3,
    nome: "Ramsey Lewis",
    tel: "31998753365",
    email: "rlewis@gmail.com",
    urlFoto: "https://variety.com/wp-content/uploads/2022/09/ramseylewis.jpg",
  },
];

function App() {
  const [selecionado, setSelecionado] = useState({
    id: -1,
    nome: "",
    tel: "",
    email: "",
    urlFoto: "",
  }); //As vezes se atribui o valor inicial de um estado com  o "formato" do objeto que ele vai segurar assim

  return (
    <>
      <div className="listaClientes">
        {clientes.map(
          (
            item,
            index // Você pode usar o item e índice como argumentos da função que passa para map, ou só o item (seria inclusive melhor nesse caso)
          ) => (
            // Se você não se importa sobre o estado anterior, você pode setar diretamente o valor, como abaixo
            <div className="itemCliente" onClick={() => setSelecionado(item)}>
              <img src={item.urlFoto} className="fotoPerfil" />
              <h1>{item.nome}</h1>
            </div>
          )
        )}
      </div>
      {selecionado.id >= 0 && (
        <div>
          <div
            className="infoCliente"
            onClick={() =>
              setSelecionado(
                { ...selecionado, id: -1 } //O operador ... faz um unpacking do objeto e te permite a copiar todos os campos que você não atribui manualmente
              )
            }
          >
            <h2 className="fechar">X</h2>
            <h1>{selecionado.nome}</h1>
            <h3>
              Contatos: <br />
              {selecionado.tel} - {selecionado.email}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
