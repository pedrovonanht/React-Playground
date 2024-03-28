function outraLista({ itens }) {
  const render_itens = itens.map((item, index) => <p key={index}>{item}</p>);
  console.log(render_itens);
  return (
    <>
      <h3>Lista de tecnologias Frontend:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Não há nenhum item na lista ainda!</p>
      )}
    </>
  );
}

export default outraLista;
