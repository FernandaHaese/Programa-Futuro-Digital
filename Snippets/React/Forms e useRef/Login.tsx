import { useState } from 'react'

//Exemplo de formulário controlado com useState
export default function Login() {
  const [dadosLogin, setDadosLogin] = useState({
    email: '',
    senha: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDadosLogin({
      ...dadosLogin,
      [name]: value
    });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(dadosLogin));
    setDadosLogin({
      email: '',
      senha: ''
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
            id="email"
            type="email"
            name="email"
            value={dadosLogin.email}
            onChange={handleChange}
        />
        <br/>
        <label htmlFor="senha">Senha</label>
        <input
            id="senha"
            type="password"
            name="senha"
            value={dadosLogin.senha}
            onChange={handleChange}
        />
        <br/>
        <button type="submit">Entrar</button>
    </form>
    </>
  )
}