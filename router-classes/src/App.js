import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quemSomos" element={<QuemSomos />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer/>
          </Router>
          
          
  )
}

export default App;
