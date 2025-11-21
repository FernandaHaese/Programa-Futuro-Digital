import React, { useState } from "react";

export default function Login() {
  // Estado com os valores digitados pelo usuário
  const [dadosLogin, setDadosLogin] = useState({
    username: "",
    senha: "",
    confirmacaoSenha: "",
  });

  // Estado com mensagens de erro de validação
  const [error, setError] = useState({
    senha: "",
    confirmacaoSenha: "",
  });

  // Função para tratar mudanças em todos os campos do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Atualizar o estado do formulário com novo valor
    const { name, value } = e.target;
    setDadosLogin({
      ...dadosLogin,
      [name]: value,
    });
    // Valida se a senha tem pelo menos 6 caracteres
    if (dadosLogin.senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
    }
    // Valida se a confirmação é igual à senha
    if (dadosLogin.confirmacaoSenha !== dadosLogin.senha) {
      alert("A confirmação de senha não coincide com a senha.");
    }
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(dadosLogin));
    // Limpa os campos após o envio
    setDadosLogin({
      username: "",
      senha: "",
      confirmacaoSenha: "",
    });
    // Limpa mensagens de erro
    setError({
      senha: "",
      confirmacaoSenha: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">username</label>
        <br />
        <input
          id="username"
          type="username"
          name="username"
          value={dadosLogin.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="senha">Senha</label>
        <br />
        <input
          id="senha"
          type="password"
          name="senha"
          value={dadosLogin.senha}
          onChange={handleChange}
          style={{
            borderColor: error.senha ? "red" : "#ccc",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        />
        <br />
        <p style={{ color: "red", fontSize: "0.8rem" }}>{error.senha}</p>
        <label htmlFor="confirmacaoSenha">Confirmar senha</label>
        <br />
        <input
          id="confirmacaoSenha"
          type="password"
          name="confirmacaoSenha"
          value={dadosLogin.confirmacaoSenha}
          onChange={handleChange}
          style={{
            borderColor: error.confirmacaoSenha ? "red" : "#ccc",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
        />
        <br />
        <p style={{ color: "red", fontSize: "0.8rem" }}>
          {error.confirmacaoSenha}
        </p>
        <br />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
