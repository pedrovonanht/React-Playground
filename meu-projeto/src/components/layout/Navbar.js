import { Link } from "react-router-dom";
function Navbar() {
  return (
    <ul>
      <il>
        <Link to="/">Home</Link>
      </il>
      <il>
        <Link to="/empresa">Empresa</Link>
      </il>
      <il>
        <Link to="/contato">Contato</Link>
      </il>
    </ul>
  );
}

export default Navbar;
