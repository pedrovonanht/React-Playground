import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Empresa from "./Pages/Empresa";
import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
