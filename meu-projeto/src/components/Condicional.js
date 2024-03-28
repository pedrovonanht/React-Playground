import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  const [errorMensage, setErrorMensage] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    if (email.includes("@")) {
      setErrorMensage();
      setUserEmail(email);
    } else {
      setErrorMensage(<p>Parece que algo deu errado!</p>);
    }
  }
  return (
    <div>
      {errorMensage}
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="digite o seu email..."
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
      </form>
      {userEmail && (
        <div>
          <p>O e-mail é {userEmail}</p>
        </div>
      )}
    </div>
  );
}

export default Condicional;
