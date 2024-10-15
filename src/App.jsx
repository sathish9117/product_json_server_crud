import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./screens/About";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";

function App() {
  return (
    <>
      <Router>
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
