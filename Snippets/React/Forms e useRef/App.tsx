import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Pesquisa from './Pesquisa'
import Ref from './Ref'
import Card from './Card'
import PesquisaState from './PesquisaState'

function App() {
  

  return (
    <>
    <Card title="Explicação Ref VS State">
      <Ref/>
    </Card>
    <Card title="Form Não Controlado com Ref">
      <Pesquisa/>
    </Card>
    <Card title="Form Controlado com State">
      <PesquisaState/>
    </Card>
    <Card title="Form Controlado com Vários Inputs">
      <Login/>
    </Card>
    </>
  )
}

export default App
