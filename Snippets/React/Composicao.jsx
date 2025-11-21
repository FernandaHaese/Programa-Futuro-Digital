
// Um componente sem props
function Feliz(){
  return <h1>:)</h1>
}

//Usando um prop "nome" que nós mesmo definimos
function Ola({nome}) {            
  return <h1>Olá, {nome}!</h1>;
}

function Espanhol({children}) {
  return <b>¡{children}!</b>;
}

// Usando o prop padrão
function Citacao({children,autor}) {
  return <h1>"{children}" - {autor}</h1>;
}

//Usando os componentes definidos
export function App() {
  return (
    <div style={{'backgroundColor':'white'}}>
        <Feliz/>
        <Ola nome="mundo" />
        <Espanhol>
          <Ola nome="MUNDO"/>
        </Espanhol>
        <Citacao autor="Edsger Dijkstra">
          Se debuggar é o processo de tirar bugs do código, então programar deve ser o processo de introduzí-las.
        </Citacao>
    </div>
  )
}