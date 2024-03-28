import PropTypes from "prop-types";
function Item({ marca, ano_lancamento }) {
  return (
    <>
      <ul>
        <li>
          {marca} - {ano_lancamento}
        </li>
      </ul>
    </>
  );
}
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};

Item.defaultProps = {
  marca: "faltou a marca",
  ano_lancamento: 0,
};
export default Item;
