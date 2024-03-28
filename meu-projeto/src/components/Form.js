import { useState } from "react";

function Form() {
  function SignUser(e) {
    e.preventDefault();
    console.log(
      `O usuário ${name} com a senha ${password} foi cadastrado com sucesso!`
    );
  }

  const [name, setName] = useState();
  const [password, setPasword] = useState();

  return (
    <>
      <h1>Meu formulário</h1>
      <form onSubmit={SignUser}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            placeholder="Digite a sua senha"
            onChange={(e) => setPasword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
