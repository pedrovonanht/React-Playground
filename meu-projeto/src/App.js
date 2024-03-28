import OutraLista from "./components/OutraLista";
function App() {

  const meusItens = ["React", "Vue", "Angular"]
  return (
    <div>
      <h1>Renderização de listas</h1>
      <OutraLista itens={meusItens}/>
    </div>
  );
}

export default App;
