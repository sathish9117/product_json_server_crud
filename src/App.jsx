import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./screens/About";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
