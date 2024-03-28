import Item from "./Item-aula-08";
function List() {
  return (
    <>
      <h1>Minha lista</h1>
      <ul>
        <Item marca="Ferrari" ano_lancamento={1980} />
        <Item marca="Fiat" ano_lancamento={1970} />
        <Item marca="BMW" ano_lancamento={1960} />
        <Item />
      </ul>
    </>
  );
}

export default List;
