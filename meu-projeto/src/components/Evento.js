import Button from "./Button";

function evento() {
  function meuevento() {
    console.log("opa fui ativado meu mano!");
  }

  return (
    <>
      <p>
        Clique aqui para disparar um evento:
        <Button event={meuevento} text="primeiro evento" />
      </p>
    </>
  );
}

export default evento;
