import style from "./Frase.module.css";

function Frase() {
  return (
    <div className={style.frase_container}>
      <p className={style.frase_text}>Aqui temos uma frase, e lembre-se tudo no React é um componente!</p>
    </div>
  );
}

export default Frase;
