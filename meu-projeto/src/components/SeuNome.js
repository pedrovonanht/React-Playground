function SeuNome({ setNome }) {
  return (
    <form method="Post" autoComplete="off">
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        placeholder="Digite seu nome"
        id="nome"
        onChange={(e) => {
          setNome(e.target.value);
        }}
      ></input>
    </form>
  );
}

export default SeuNome;
