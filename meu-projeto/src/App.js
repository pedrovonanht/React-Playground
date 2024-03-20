import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const url = "https://via.placeholder.com/150";

  let name = "Pedro";
  return (
    <div>
      <h1>Alterando JSX</h1>
      <Frase/>
      <img src={url} alt="placeholder" />
      <SayMyName text={name} />
      <Pessoa nome={name} idade="16" profisao="Estudante" foto={url} />
    </div>
  );
}

export default App;
