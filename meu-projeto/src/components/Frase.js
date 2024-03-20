import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.frase_container}>
      <p className={styles.frase_text}>Aqui temos uma frase, e lembre-se tudo no React é um componente!</p>
    </div>
  );
}

export default Frase;
